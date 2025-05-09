"use client";

import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectsSection";
import Navbar from "../components/Navbar";
import SkillsSection from "../components/SkillsSection";
import AboutSection from "../components/AboutSection";
import { motion } from "framer-motion";

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="relative bg-dark-bg">
      <Navbar />
      <motion.div variants={fadeInUp}>
        <HeroSection />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <ProjectsSection />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <SkillsSection />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <AboutSection />
      </motion.div>
    </main>
  );
}
