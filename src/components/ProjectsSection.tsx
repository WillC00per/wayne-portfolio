"use client";

import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Truck Delivery Automation",
    description: "End-to-end automation system including inventory management, PO generation, and business analytics",
    tech: ["Node.js", "React", "SQL", "Analytics"],
    staticImage: "/images/truck-delivery.png",
    animatedImage: "/images/truck-delivery.gif",
    position: "left"
  },
  {
    title: "Science Quest",
    description: "2D Unity game developed in C# that makes learning science fun and interactive for students",
    tech: ["Unity", "C#", "Game Development", "Educational Design"],
    staticImage: "/images/science-quest.jpg",
    animatedImage: "/images/science-quest.gif",
    position: "right"
  },
  {
    title: "ICS System - Civil Service Commission",
    description: "Streamlined document generation system for inventory management, reducing process time by 75%",
    tech: ["Database Design", "Process Automation", "Document Generation"],
    staticImage: "/images/ics-system.png",
    animatedImage: "/images/ics-system.gif",
    position: "left"
  },
  {
    title: "SiyenSaya - Gamified E-Learning",
    description: "Interactive educational platform making science engaging for elementary students",
    tech: ["Game Development", "Educational Design", "React", "Node.js"],
    staticImage: "/images/siyensaya-static.jpg",
    animatedImage: "/images/siyensaya.gif",
    position: "right"
  },
  {
    title: "Manga Recommendation AI",
    description: "AI-powered system for personalized manga recommendations (In Progress)",
    tech: ["Machine Learning", "Python", "React"],
    staticImage: "/images/manga-static.jpg",
    animatedImage: "/images/manga.gif",
    position: "left"
  },
  {
    title: "PBA Website Restoration",
    description: "Modern restoration of the Philippine Basketball Association website (In Progress)",
    tech: ["Next.js", "TypeScript", "API Integration"],
    staticImage: "/images/pba-static.jpg",
    animatedImage: "/images/pba.gif",
    position: "right"
  }
];

const ProjectsSection: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-dark-bg min-h-screen relative overflow-hidden">
      {/* Background SVG Animation */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,0 L100,0 L100,100 L0,100 Z"
            fill="none"
            stroke="url(#grid-gradient)"
            strokeWidth="0.1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <defs>
            <linearGradient id="grid-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#60a5fa" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="font-orbitron text-5xl font-bold text-text-primary mb-16 text-center">
          Featured <span className="text-neon-blue">Projects</span>
        </h2>
        
        <div className="grid grid-cols-12 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className={`col-span-12 ${
                i % 2 === 0 ? 'md:col-span-7' : 'md:col-span-5 md:col-start-6'
              } mb-8`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative h-[400px] rounded-xl overflow-hidden group"
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <motion.div
                  className="w-full h-full"
                  animate={{
                    scale: hoveredIndex === i ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={hoveredIndex === null ? project.staticImage : project.animatedImage}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredIndex !== null && hoveredIndex !== i ? 'brightness-50' : ''
                    }`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 2}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-dark-bg via-hover-bg/80 to-transparent"
                    animate={{
                      opacity: hoveredIndex === i ? 0.9 : 0.7
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>

                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-8"
                  animate={{
                    y: hoveredIndex === i ? 0 : 20,
                    opacity: hoveredIndex === i ? 1 : 0.8,
                  }}
                >
                  <h3 className="font-orbitron text-3xl font-bold text-neon-blue mb-4">
                    {project.title}
                  </h3>
                  <p className="text-text-primary text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-accent/20 backdrop-blur-sm text-accent-light 
                          rounded-full text-sm font-medium border border-accent-light/20 
                          shadow-lg shadow-accent/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
