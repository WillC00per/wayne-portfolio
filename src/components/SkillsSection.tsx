"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Add project types to skills
const skills = [
  { 
    name: "Android Studio", 
    icon: "androidstudio",
    font: "font-robot",
    relatedProjects: []
  },
  { 
    name: "Node.js", 
    icon: "nodedotjs",
    font: "font-mono",
    relatedProjects: []
  },
  { 
    name: "React", 
    icon: "react",
    font: "font-sans",
    relatedProjects: ["Truck Delivery Automation", "SiyenSaya - Gamified E-Learning", "Manga Recommendation AI"]
  },
  { name: "SQL", icon: "mysql", font: "font-sans", relatedProjects: [] },
  { name: "MongoDB", icon: "mongodb", font: "font-sans", relatedProjects: [] },
  { name: "HTML5", icon: "html5", font: "font-sans", relatedProjects: [] },
  { name: "CSS3", icon: "css3", font: "font-sans", relatedProjects: [] },
  { name: "Unity", icon: "unity", font: "font-sans", relatedProjects: [] },
  { name: "Bootstrap", icon: "bootstrap", font: "font-sans", relatedProjects: [] },
  { name: "MUI", icon: "mui", font: "font-sans", relatedProjects: [] },
];

const SkillsSection: FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateY: 180,
      scale: 0.8
    },
    show: { 
      opacity: 1,
      y: 0,
      rotateY: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <section id="skills" className="py-16 bg-dark-bg min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-900 mb-16 text-center"
        >
          Skills & Technologies
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 perspective-1000"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              onClick={() => setSelectedSkill(skill.name === selectedSkill ? null : skill.name)}
              variants={cardVariants}
              className="flex flex-col items-center group cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center"
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-white shadow-lg mb-3 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <Image
                  src={
                    skill.icon === "mui"
                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                      : `https://cdn.simpleicons.org/${skill.icon}/0EA5E9`
                  }
                  alt={skill.name}
                  width={48}
                  height={48}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className={`${skill.font} text-gray-700 font-medium text-sm group-hover:text-tech-blue transition-colors duration-300`}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-16 p-6 bg-card-bg rounded-xl"
            >
              <h3 className="text-2xl font-bold text-neon-blue mb-4">
                Projects using {selectedSkill}
              </h3>
              <div className="grid gap-4">
                {skills
                  .find(s => s.name === selectedSkill)
                  ?.relatedProjects.map((project) => (
                    <motion.div
                      key={project}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="p-4 bg-hover-bg rounded-lg text-text-primary"
                    >
                      {project}
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SkillsSection;
