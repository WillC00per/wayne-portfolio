"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection: FC = () => {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center bg-primary px-4 md:px-0 overflow-hidden">
      {/* Animated SVG Techy Background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="techy-gradient" x1="0" y1="0" x2="1440" y2="800" gradientUnits="userSpaceOnUse">
            <stop stopColor="#60a5fa" stopOpacity="0.15" />
            <stop offset="1" stopColor="#93c5fd" stopOpacity="0.10" />
          </linearGradient>
        </defs>
        <motion.path
          d="M0,600 Q400,500 800,600 T1440,600"
          stroke="url(#techy-gradient)"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
        <motion.circle
          cx="1200"
          cy="200"
          r="80"
          fill="url(#techy-gradient)"
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [0.8, 1.1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.rect
          x="100"
          y="100"
          width="120"
          height="120"
          rx="30"
          fill="#0EA5E9"
          fillOpacity="0.07"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
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
