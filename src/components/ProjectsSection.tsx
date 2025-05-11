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
    live: "#",
    github: "#"
  },
  {
    title: "Science Quest",
    description: "2D Unity game developed in C# that makes learning science fun and interactive for students",
    tech: ["Unity", "C#", "Game Development", "Educational Design"],
    staticImage: "/images/science-quest.jpg",
    animatedImage: "/images/science-quest.gif",
    live: "#",
    github: "#"
  },
  {
    title: "ICS System - Civil Service Commission",
    description: "Streamlined document generation system for inventory management, reducing process time by 75%",
    tech: ["Database Design", "Process Automation", "Document Generation"],
    staticImage: "/images/ics-system.png",
    animatedImage: "/images/ics-system.gif",
    live: "#",
    github: "#"
  },
  {
    title: "SiyenSaya - Gamified E-Learning",
    description: "Interactive educational platform making science engaging for elementary students",
    tech: ["Game Development", "Educational Design", "React", "Node.js"],
    staticImage: "/images/siyensaya-static.jpg",
    animatedImage: "/images/siyensaya.gif",
    live: "#",
    github: "#"
  },
  {
    title: "Manga Recommendation AI",
    description: "AI-powered system for personalized manga recommendations (In Progress)",
    tech: ["Machine Learning", "Python", "React"],
    staticImage: "/images/manga-static.jpg",
    animatedImage: "/images/manga.gif",
    live: "#",
    github: "#"
  },
  {
    title: "PBA Website Restoration",
    description: "Modern restoration of the Philippine Basketball Association website (In Progress)",
    tech: ["Next.js", "TypeScript", "API Integration"],
    staticImage: "/images/pba-static.jpg",
    animatedImage: "/images/pba.gif",
    live: "#",
    github: "#"
  }
];

const ProjectsSection: FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-dark-bg min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-orbitron text-5xl font-bold text-text-primary mb-16 text-center">
          Featured <span className="text-neon-blue">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="relative rounded-2xl overflow-hidden min-h-[350px] flex items-center justify-center group transition-all duration-300"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Background Image */}
              <Image
                src={hovered === null ? project.staticImage : project.animatedImage}
                alt={project.title}
                fill
                className={`object-cover transition-all duration-700 ${hovered === i ? 'scale-105' : 'scale-100'} ${hovered !== null && hovered !== i ? 'brightness-75 grayscale' : ''}`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={i < 2}
              />
              {/* Overlay */}
              <div className={`absolute inset-0 transition-all duration-300 ${hovered === i ? 'bg-black/80' : 'bg-black/60'}`} />
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center w-full px-6">
                <h3 className={`font-orbitron text-3xl md:text-4xl font-bold mb-3 transition-all duration-300 ${hovered === i ? 'text-white scale-105' : 'text-accent'}`}>
                  {project.title}
                </h3>
                <p className={`mb-6 text-lg font-medium transition-all duration-300 ${hovered === i ? 'text-white opacity-100' : 'text-text-secondary opacity-90'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300
                        ${hovered === i ? 'bg-accent text-white' : 'bg-secondary text-accent-light'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-2 rounded-lg font-bold transition-all duration-300
                      ${hovered === i ? 'bg-accent text-white shadow-lg hover:bg-accent-light' : 'bg-accent-light text-accent'}`}
                  >
                    VIEW LIVE
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-6 py-2 rounded-lg font-bold transition-all duration-300
                      ${hovered === i ? 'bg-secondary text-white shadow-lg hover:bg-accent' : 'bg-secondary/80 text-accent-light'}`}
                  >
                    GITHUB
                  </a>
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
