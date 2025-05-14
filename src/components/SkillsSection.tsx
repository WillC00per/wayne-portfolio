"use client";

import { FC, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { projects } from "../utils/projects";
import { FaLayerGroup } from "react-icons/fa";

const skills = [
  { name: "Android Studio", icon: "androidstudio", font: "font-robot" },
  { name: "Node JS", icon: "nodedotjs", font: "font-mono" },
  { name: "React JS", icon: "react", font: "font-sans" },
  { name: "SQL", icon: "mysql", font: "font-sans" },
  { name: "MongoDB", icon: "mongodb", font: "font-sans" },
  { name: "HTML5", icon: "html5", font: "font-sans" },
  { name: "CSS3", icon: "css3", font: "font-sans" },
  { name: "Unity", icon: "unity", font: "font-sans" },
  { name: "Bootstrap", icon: "bootstrap", font: "font-sans" },
  { name: "MUI", icon: "mui", font: "font-sans" }
];

const getProjectsForSkill = (skillName: string) => {
  return projects.filter((project) =>
    project.tech.some(
      (tech) =>
        tech.toLowerCase().replace(/\s+/g, "") === skillName.toLowerCase().replace(/\s+/g, "")
    )
  );
};

const gridPositions = [
  { x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
  { x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }
];

const CARD_WIDTH = 110;
const CARD_HEIGHT = 110;
const GAP = 32;

const SkillsSection: FC = () => {
  const [deckOpen, setDeckOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Open the deck when the section is scrolled into view
  useEffect(() => {
    const handleScroll = () => {
      if (!deckOpen && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (rect.top < windowHeight * 0.7) {
          setDeckOpen(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [deckOpen]);

  const handleSkillClick = (skillName: string) => {
    setSelectedSkill(skillName === selectedSkill ? null : skillName);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-16 bg-white dark:bg-dark-bg text-gray-900 dark:text-text-primary min-h-screen flex flex-col items-center relative overflow-hidden transition-colors duration-500"
    >
      {/* SVG Dots Background */}
      <svg
        className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        {/* Pixel Grid */}
        {[...Array(12)].map((_, i) => (
          <rect
            key={`grid-${i}`}
            x={0}
            y={i * 30}
            width="100%"
            height="2"
            fill="#60a5fa"
            opacity="0.05"
          />
        ))}

        {/* Pixel Radar Animation */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          style={{ originX: "720px", originY: "160px" }}
        >
          {[...Array(4)].map((_, i) => (
            <rect
              key={`radar-${i}`}
              x="720"
              y="160"
              width="240"
              height="4"
              fill="#60a5fa"
              opacity={0.2 - i * 0.05}
              transform={`rotate(${90 * i} 720 160)`}
            />
          ))}
        </motion.g>

        {/* Pixel Blips */}
        {[...Array(6)].map((_, i) => (
          <motion.rect
            key={`blip-${i}`}
            x={600 + i * 40}
            y={140 + (i % 2) * 40}
            width="8"
            height="8"
            fill="#60a5fa"
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.8, 0.1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
      <div className="max-w-4xl mx-auto px-4 relative z-10 w-full">
        <h2 className={`text-3xl font-bold text-text-primary mb-16 text-center ${!deckOpen ? "opacity-0 pointer-events-none" : ""}`}>
          Skills & Technologies
        </h2>
        {/* Deck Trigger (hidden on scroll) */}
        {!deckOpen && (
          <motion.button
            type="button"
            aria-label="Show Skills"
            className="flex flex-col items-center justify-center mx-auto mt-24 mb-24 bg-primary rounded-full shadow-xl p-10 hover:bg-accent/20 transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.08 }}
            tabIndex={-1}
          >
            <FaLayerGroup className="text-accent" size={64} />
            <span className="mt-4 text-accent font-bold text-lg tracking-wider">Show Skills</span>
          </motion.button>
        )}

        {/* Deck and Dealing Animation */}
        <div className={`relative flex justify-center items-center min-h-[300px] md:min-h-[320px] mb-8 ${!deckOpen ? "pointer-events-none" : ""}`} style={{ height: deckOpen ? 2 * CARD_HEIGHT + GAP + 40 : 180 }}>
          <div className="relative" style={{ width: 5 * (CARD_WIDTH + GAP), height: 2 * (CARD_HEIGHT + GAP) }}>
            {skills.map((skill, i) => {
              // Deck: all cards invisible at first
              // Grid: distributed in 2 rows of 5
              const deckX = (2 * (CARD_WIDTH + GAP));
              const deckY = 0;
              const gridX = gridPositions[i].x * (CARD_WIDTH + GAP);
              const gridY = gridPositions[i].y * (CARD_HEIGHT + GAP);

              return (
                <motion.button
                  key={skill.name}
                  type="button"
                  onClick={() => handleSkillClick(skill.name)}
                  className={`absolute bg-transparent border-none outline-none cursor-pointer group`}
                  style={{
                    left: 0,
                    top: 0,
                    zIndex: deckOpen ? 1 : skills.length - i
                  }}
                  initial={false}
                  animate={deckOpen
                    ? {
                        x: gridX,
                        y: gridY,
                        rotate: 0,
                        scale: 1,
                        opacity: 1,
                        boxShadow: "0 8px 32px 0 rgba(96,165,250,0.08)"
                      }
                    : {
                        x: deckX + (i - 0) * 2,
                        y: deckY + (i - 0) * 2,
                        rotate: (i - 0) * 4,
                        scale: 1 - i * 0.03,
                        opacity: 0,
                        boxShadow: "0 8px 32px 0 rgba(96,165,250,0.18)"
                      }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 80,
                    damping: 18,
                    delay: deckOpen ? i * 0.12 : (skills.length - i) * 0.04
                  }}
                  whileHover={deckOpen ? { scale: 1.08 } : { scale: 1.04 }}
                >
                  <div className="w-24 h-24 flex items-center justify-center rounded-xl bg-primary shadow-lg mb-2 group-hover:shadow-2xl transition-all duration-300">
                    <Image
                      src={
                        skill.icon === "mui"
                          ? "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
                          : `https://cdn.simpleicons.org/${skill.icon}/0EA5E9`
                      }
                      alt={skill.name}
                      width={64}
                      height={64}
                      className="group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <span className={`${skill.font} text-text-secondary font-medium text-sm group-hover:text-accent transition-colors duration-300`}>
                    {skill.name}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </div>

        <AnimatePresence>
          {deckOpen && selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8 p-8 bg-primary rounded-xl border border-accent/30 shadow-lg w-full max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold text-accent mb-6 text-center">
                Projects using {selectedSkill}
              </h3>
              <div className="flex flex-col gap-4">
                {getProjectsForSkill(selectedSkill).length === 0 && (
                  <div className="text-text-secondary text-center">No projects found.</div>
                )}
                {getProjectsForSkill(selectedSkill).map((project) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="p-4 bg-hover-bg rounded-lg text-text-primary"
                  >
                    <span className="font-bold">{project.title}</span>
                    <div className="text-sm text-text-secondary">{project.description}</div>
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
