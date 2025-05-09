"use client";

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
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
    <section className="py-20 px-4 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Featured <span className="text-tech-blue">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ 
                opacity: 0, 
                x: project.position === "left" ? -50 : 50,
                y: i % 2 === 0 ? 50 : -50 
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
                y: i % 2 === 0 ? 0 : 0 
              }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: "easeOut"
              }}
              className={`relative ${
                i % 2 === 0 ? 'md:mt-24' : 'md:mb-24'
              } transform-gpu`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="group relative h-[300px] md:h-[400px] rounded-xl overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  animate={{
                    scale: hoveredIndex === i ? 1.05 : 1,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <Image
                    src={hoveredIndex === i ? project.animatedImage : project.staticImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={i < 2}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black transition-opacity duration-300 ${
                    hoveredIndex === i ? 'opacity-90' : 'opacity-70'
                  }`} />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-6"
                  animate={{
                    y: hoveredIndex === i ? 0 : 10,
                    opacity: hoveredIndex === i ? 1 : 0.9,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-tech-blue mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-200 mb-4">
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
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
