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
        <h2 className="text-4xl font-bold text-text-primary mb-16 text-center">
          Featured <span className="text-neon-blue">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ 
                opacity: 0, 
                x: project.position === "left" ? -50 : 50
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative transform-gpu"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden">
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
                  <div className={`absolute inset-0 bg-gradient-to-t from-dark-bg via-hover-bg/80 to-transparent 
                    transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-95' : 'opacity-70'}`} />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 p-8"
                  animate={{
                    y: hoveredIndex === i ? 0 : 20,
                    opacity: hoveredIndex === i ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-3xl font-bold text-neon-blue mb-4 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-primary text-lg mb-6 leading-relaxed max-w-xl">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-deep-teal/40 text-accent-light rounded-full text-sm font-medium
                          backdrop-blur-sm border border-accent-light/20 shadow-lg shadow-accent-light/10
                          group-hover:bg-deep-teal/60 transition-all duration-300"
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
