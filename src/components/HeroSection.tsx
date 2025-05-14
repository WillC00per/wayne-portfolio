"use client";

import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SunSVG = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <circle cx="24" cy="24" r="10" fill="#FFD600" />
    {[...Array(8)].map((_, i) => (
      <rect
        key={i}
        x="22"
        y="4"
        width="4"
        height="8"
        rx="2"
        fill="#FFD600"
        transform={`rotate(${i * 45} 24 24)`}
      />
    ))}
  </svg>
);

const MoonSVG = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
    <path
      d="M34 38c-7.732 0-14-6.268-14-14 0-4.418 2.014-8.354 5.167-10.917C25.08 13.028 24.543 13 24 13c-6.627 0-12 5.373-12 12s5.373 12 12 12c3.41 0 6.48-1.432 8.667-3.75C35.08 37.028 34.543 37 34 37z"
      fill="#F1F5F9"
    />
    <circle cx="32" cy="18" r="2" fill="#E0E7FF" />
    <circle cx="28" cy="28" r="1.5" fill="#E0E7FF" />
    <circle cx="36" cy="26" r="1" fill="#E0E7FF" />
  </svg>
);

const PixelSun = ({ isVisible, hide }: { isVisible: boolean; hide: boolean }) => (
  <motion.svg
    width="96"
    height="96"
    viewBox="0 0 96 96"
    fill="none"
    className="absolute"
    style={{ top: 32, right: 32 }}
    initial={false}
    animate={{
      y: isVisible ? (hide ? -80 : 0) : 80,
      opacity: isVisible ? (hide ? 0 : 1) : 0,
      scale: hide ? 0.7 : 1,
      pointerEvents: isVisible && !hide ? "auto" : "none",
      rotate: isVisible ? 360 : 0,
    }}
    transition={{
      type: "spring",
      stiffness: 80,
      damping: 18,
      opacity: { duration: 0.5 },
      scale: { duration: 0.5 },
      y: { duration: 0.5 },
      rotate: { duration: 24, repeat: Infinity, ease: "linear" }
    }}
  >
    {/* Pixel sun core */}
    <rect x="32" y="32" width="32" height="32" fill="#FFD600" />
    {/* Pixel rays */}
    <rect x="44" y="8" width="8" height="16" fill="#FFD600" />
    <rect x="44" y="72" width="8" height="16" fill="#FFD600" />
    <rect x="8" y="44" width="16" height="8" fill="#FFD600" />
    <rect x="72" y="44" width="16" height="8" fill="#FFD600" />
    <rect x="20" y="20" width="12" height="6" transform="rotate(-45 26 23)" fill="#FFD600" />
    <rect x="64" y="70" width="12" height="6" transform="rotate(-45 70 73)" fill="#FFD600" />
    <rect x="20" y="70" width="12" height="6" transform="rotate(45 26 73)" fill="#FFD600" />
    <rect x="64" y="20" width="12" height="6" transform="rotate(45 70 23)" fill="#FFD600" />
  </motion.svg>
);

const PixelMoon = ({ isVisible, hide }: { isVisible: boolean; hide: boolean }) => (
  <motion.svg
    width="180"
    height="180"
    viewBox="0 0 180 180"
    fill="none"
    className="absolute"
    style={{ top: 16, right: 16 }}
    initial={false}
    animate={{
      y: isVisible ? (hide ? -120 : 0) : 120,
      opacity: isVisible ? (hide ? 0 : 1) : 0,
      scale: hide ? 0.7 : 1,
      pointerEvents: isVisible && !hide ? "auto" : "none",
      rotate: isVisible ? 360 : 0,
    }}
    transition={{
      type: "spring",
      stiffness: 80,
      damping: 18,
      opacity: { duration: 0.5 },
      scale: { duration: 0.5 },
      y: { duration: 0.5 },
      rotate: { duration: 36, repeat: Infinity, ease: "linear" }
    }}
  >
    {/* Pixel moon crescent (more circular moon) */}
    <circle cx="112" cy="90" r="44" fill="#E0E7FF" />
    <circle cx="128" cy="90" r="32" fill="#0f172a" />
    {/* Pixel stars */}
    <rect x="128" y="48" width="8" height="8" fill="#E0E7FF" />
    <rect x="144" y="80" width="8" height="8" fill="#E0E7FF" />
    <rect x="56" y="104" width="8" height="8" fill="#E0E7FF" />
  </motion.svg>
);

const HeroSection: FC = () => {
  // Track theme on client for correct sun/moon animation
  const [isDark, setIsDark] = useState(false);
  const [hideIcon, setHideIcon] = useState(false);

  useEffect(() => {
    const checkTheme = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setHideIcon(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-white dark:bg-dark-bg text-gray-900 dark:text-text-primary px-4 md:px-0 overflow-hidden transition-colors duration-500">
      {/* Pixel Sun/Moon Animation - bigger moon and slow rotation, disappears on scroll */}
      <div className="fixed z-30" style={{ top: 0, right: 0 }}>
        <PixelSun isVisible={!isDark} hide={hideIcon} />
        <PixelMoon isVisible={isDark} hide={hideIcon} />
      </div>

      {/* 8-bit Pixel Game Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* Pixel Grid Background */}
        {[...Array(20)].map((_, i) => (
          <rect
            key={`grid-${i}`}
            x={i * 72}
            y={0}
            width={2}
            height="100%"
            fill="#60a5fa"
            opacity="0.05"
          />
        ))}
        
        {/* Animated Pixel Clouds */}
        {[0, 1, 2].map((i) => (
          <motion.g key={`cloud-${i}`}
            animate={{ x: [-100, 1540] }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 7
            }}
          >
            <rect x="0" y={100 + i * 120} width="60" height="20" fill="#60a5fa" opacity="0.1" />
            <rect x="20" y={80 + i * 120} width="40" height="20" fill="#60a5fa" opacity="0.1" />
          </motion.g>
        ))}

        {/* 8-bit Mountains */}
        <path d="M0 600 L200 400 L400 600 L600 300 L800 600 L1000 400 L1200 600 L1440 450 L1440 800 L0 800 Z" 
          fill="#60a5fa" fillOpacity="0.05" />

        {/* Pixel Stars */}
        {[...Array(15)].map((_, i) => (
          <motion.rect
            key={`star-${i}`}
            x={80 + i * 90}
            y={50 + (i % 3) * 60}
            width="6"
            height="6"
            fill="#60a5fa"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Ground Line */}
        <motion.rect
          x="0"
          y="750"
          width="1440"
          height="4"
          fill="#60a5fa"
          opacity="0.2"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </svg>  

      {/* Main content container */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto py-16 z-10">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col items-start z-10">
          {/* Floating Chip */}
          <motion.div
            className="mb-4 px-4 py-2 rounded-full bg-secondary/60 backdrop-blur-md border border-accent text-accent-light font-semibold shadow-md"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Full Stack & Mobile Developer
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-text-primary mb-4 leading-tight">
            Wayne Chandler Gomez
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-accent mb-6">
            Final Year BSIT Student
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-xl">
            Building practical web solutions for business and education. Passionate about automation, systems, and gamified learning.
          </p>
          <div className="flex gap-4">
            <motion.a
              href="#projects"
              className="px-6 py-3 rounded-full bg-accent text-primary font-bold hover:bg-accent-light transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-accent text-accent font-semibold bg-transparent hover:bg-accent/10 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </div>
        </div>
        {/* Right: Avatar with gradient background and glass effect */}
        <div className="flex-1 flex items-end justify-end relative w-full mt-12 md:mt-0">
          <div className="absolute -top-10 right-0 w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-full bg-gradient-to-br from-tech-blue/30 via-white/60 to-neon-green/30 blur-2xl z-0" />
          <div className="relative w-[220px] h-[320px] md:w-[320px] md:h-[400px] z-10">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              fill
              className="object-contain"
              priority
            />
            {/* Glass reflection */}
            <div className="absolute left-0 top-0 w-full h-full rounded-full pointer-events-none" style={{
              background: "linear-gradient(120deg,rgba(255,255,255,0.18) 30%,rgba(255,255,255,0.03) 70%)"
            }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
