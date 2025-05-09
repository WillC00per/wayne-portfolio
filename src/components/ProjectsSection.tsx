"use client";

import { FC, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Truck Delivery Automation",
    description: "End-to-end automation system including inventory management, PO generation, and business analytics",
    tech: ["Node.js", "React", "SQL", "Analytics"],
    staticImage: "/images/projects/truck-static.jpg",
    animatedImage: "/images/projects/truck-animated.gif",
    position: "left"
  },
  {
    title: "Science Quest",
    description: "2D Unity game developed in C# that makes learning science fun and interactive for students",
    tech: ["Unity", "C#", "Game Development", "Educational Design"],
    staticImage: "/images/projects/quest-static.jpg",
    animatedImage: "/images/projects/quest-animated.gif",
    position: "right"
  },
  {
    title: "ICS System - Civil Service Commission",
    description: "Streamlined document generation system for inventory management, reducing process time by 75%",
    tech: ["Database Design", "Process Automation", "Document Generation"],
    staticImage: "/images/projects/ics-static.jpg",
    animatedImage: "/images/projects/ics-animated.gif",
    position: "left"
  },
  {
    title: "SiyenSaya - Gamified E-Learning",
    description: "Interactive educational platform making science engaging for elementary students",
    tech: ["Game Development", "Educational Design", "React", "Node.js"],
    staticImage: "/images/projects/siyensaya-static.jpg",
    animatedImage: "/images/projects/siyensaya-animated.gif",
    position: "right"
  },
  {
    title: "Manga Recommendation AI",
    description: "AI-powered system for personalized manga recommendations (In Progress)",
    tech: ["Machine Learning", "Python", "React"],
    staticImage: "/images/projects/manga-static.jpg",
    animatedImage: "/images/projects/manga-animated.gif",
    position: "left"
  },
  {
    title: "PBA Website Restoration",
    description: "Modern restoration of the Philippine Basketball Association website (In Progress)",
    tech: ["Next.js", "TypeScript", "API Integration"],
    staticImage: "/images/projects/pba-static.jpg",
    animatedImage: "/images/projects/pba-animated.gif",
    position: "right"
  }
];

const ProjectsSection: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Featured <span className="text-tech-blue">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: project.position === "left" ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative ${i % 2 === 0 ? 'md:mt-12' : 'md:mb-12'}`}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 mb-4 overflow-hidden rounded-lg">
                <motion.img
                  src={hoveredIndex === i ? project.animatedImage : project.staticImage}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  initial={false}
                  animate={{
                    scale: hoveredIndex === i ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-tech-blue mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-deep-teal/20 text-neon-green rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
