"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutSection: FC = () => (
  <section id="about" className="py-20 bg-white dark:bg-dark-bg text-gray-900 dark:text-text-primary relative overflow-hidden transition-colors duration-500">
    {/* SVG Wave Background */}
    <svg
      className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none"
      viewBox="0 0 1440 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <motion.path
        d="M0,160 C480,320 960,0 1440,160 L1440,320 L0,320 Z"
        fill="#60a5fa"
        fillOpacity="0.07"
        initial={{ y: 30 }}
        animate={{ y: [30, 0, 30] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
    <div className="max-w-4xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-12">
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent shadow-xl bg-card-bg flex items-center justify-center mb-8 md:mb-0">
        <Image
          src="/images/avatar.png"
          alt="Wayne Chandler Gomez"
          width={220}
          height={320}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex-1">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-accent mb-6 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-text-secondary text-center md:text-left leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Hi, I&apos;m <span className="font-bold text-accent-light">Wayne Chandler Gomez</span>, 
          a passionate developer with a love for building robust, scalable, and user-friendly solutions. 
          <br /><br />
          My journey spans <span className="font-semibold text-accent">web, mobile, and game development</span>
          —from automating business processes to gamifying learning for the next generation. 
          <br /><br />
          I thrive in tech stacks like <span className="font-semibold text-accent">
            React, Node.js, Android Studio, Unity, SQL, MongoDB, Bootstrap, and MUI</span>. 
          <br /><br />
          I believe in the power of technology to solve real-world problems and create delightful user experiences.
        </motion.p>
      </div>
    </div>
  </section>
);

export default AboutSection;
