"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 shadow-lg
        ${scrolled ? "bg-white/90 dark:bg-dark-bg/95 backdrop-blur-md border-b border-tech-blue" : "bg-transparent"}
      `}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.span 
          className="text-tech-blue dark:text-neon-green font-extrabold text-2xl tracking-widest"
          whileHover={{ scale: 1.08 }}
        >
          WCG
        </motion.span>
        <div className="flex gap-8 items-center">
          {["Projects", "About", "Skills", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-800 dark:text-gray-100 font-semibold hover:text-tech-blue dark:hover:text-neon-green transition-colors text-lg"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
          <button
            aria-label="Toggle Dark Mode"
            onClick={() => setDark((d) => !d)}
            className="ml-4 p-2 rounded-full border border-tech-blue bg-white/70 dark:bg-dark-bg/80 hover:bg-tech-blue/10 dark:hover:bg-neon-green/10 transition"
          >
            {dark ? (
              <span role="img" aria-label="Light Mode">🌞</span>
            ) : (
              <span role="img" aria-label="Dark Mode">🌙</span>
            )}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
