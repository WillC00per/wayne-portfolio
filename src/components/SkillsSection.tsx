"use client";

import { FC } from "react";
import { motion } from "framer-motion";

const skills = [
  { 
    name: "Android Studio", 
    icon: "androidstudio",
    font: "font-robot" // Android's Roboto font style
  },
  { 
    name: "Node.js", 
    icon: "nodedotjs",
    font: "font-mono" // Monospace for backend
  },
  { 
    name: "React", 
    icon: "react",
    font: "font-sans" // Clean modern font
  },
  { name: "SQL", icon: "mysql", font: "font-sans" },
  { name: "MongoDB", icon: "mongodb", font: "font-sans" },
  { name: "HTML5", icon: "html5", font: "font-sans" },
  { name: "CSS3", icon: "css3", font: "font-sans" },
  { name: "Unity", icon: "unity", font: "font-sans" },
  { name: "Bootstrap", icon: "bootstrap", font: "font-sans" },
  { name: "MUI", icon: "mui", font: "font-sans" },
];

const SkillsSection: FC = () => {
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
    <section id="skills" className="py-16 bg-white min-h-screen flex items-center">
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
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="flex flex-col items-center group"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center"
              }}
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-xl bg-white shadow-lg mb-3 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                <img
                  src={
                    skill.icon === "mui"
                      ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                      : `https://cdn.simpleicons.org/${skill.icon}/0EA5E9`
                  }
                  alt={skill.name}
                  className="w-12 h-12 group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <span className={`${skill.font} text-gray-700 font-medium text-sm group-hover:text-tech-blue transition-colors duration-300`}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
