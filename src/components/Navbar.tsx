"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setDark(localStorage.getItem("theme") === "dark");
    }
  }, []);

  const navItems = ["Projects",  "Skills", "About", "Contact"];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(href.replace('#', ''));
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 
        ${scrolled 
          ? "py-2 backdrop-blur-md bg-white/80 dark:bg-[#0f172ae6] shadow-lg" 
          : "py-4 bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={e => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className={`font-extrabold text-2xl tracking-wider transition-colors cursor-pointer
              ${
                scrolled
                  ? "text-black"
                  : dark
                  ? "text-white"
                  : "text-tech-blue"
              }`}
            whileHover={{ scale: 1.05 }}
          >
            WCG
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(`#${item.toLowerCase()}`);
                }}
                className={`text-lg font-medium transition-colors
                  ${
                    scrolled
                      ? "text-black hover:text-tech-blue"
                      : dark
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-tech-blue"
                  }`}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
            
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setDark(d => !d)}
              className={`p-2 rounded-full transition-colors
                ${dark 
                  ? "bg-gray-800 text-gray-200 hover:bg-gray-700" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setDark(d => !d)}
              className={`p-2 mr-2 rounded-full transition-colors
                ${dark 
                  ? "bg-gray-800 text-gray-200" 
                  : "bg-gray-100 text-gray-600"}`}
              whileTap={{ scale: 0.95 }}
            >
              {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
            
            <motion.button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              className={`p-2 rounded-full transition-colors
                ${dark 
                  ? "text-white hover:bg-gray-800" 
                  : "text-gray-600 hover:bg-gray-100"}`}
              whileTap={{ scale: 0.95 }}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="fixed inset-x-0 top-[72px] md:hidden overflow-hidden z-50"
            >
              <div className={`py-4 space-y-4 px-4 backdrop-blur-lg ${
                dark 
                  ? "bg-dark-bg/95 border-b border-gray-800" 
                  : "bg-white/95 border-b border-gray-200"
              }`}>
                {navItems.map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(`#${item.toLowerCase()}`);
                    }}
                    className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors
                      ${dark 
                        ? "text-gray-300 hover:text-white hover:bg-gray-800" 
                        : "text-gray-600 hover:text-tech-blue hover:bg-gray-50"}`}
                    whileHover={{ x: 10 }}
                  >
                    {item}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
