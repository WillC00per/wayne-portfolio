"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const AboutSection: FC = () => (
  <section id="about" className="py-20 bg-primary">
    <div className="max-w-4xl mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-accent mb-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg text-text-secondary text-center leading-relaxed"
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
  </section>
);

export default AboutSection;
