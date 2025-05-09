"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Truck Delivery Automation",
    description: "End-to-end automation system including inventory management, PO generation, and business analytics",
    tech: ["Node.js", "React", "SQL", "Analytics"],
    staticImage: "/images/truck-delivery.png",
    animatedImage: "/images/truck-delivery.gif",
    link: "#truck-delivery"
  },
  {
    title: "Science Quest",
    description: "2D Unity game developed in C# that makes learning science fun and interactive for students",
    tech: ["Unity", "C#", "Game Development", "Educational Design"],
    staticImage: "/images/science-quest.jpg",
    animatedImage: "/images/science-quest.gif",
    link: "#science-quest"
  },
  {
    title: "ICS System - Civil Service Commission",
    description: "Streamlined document generation system for inventory management, reducing process time by 75%",
    tech: ["Database Design", "Process Automation", "Document Generation"],
    staticImage: "/images/ics-system.png",
    animatedImage: "/images/ics-system.gif",
    link: "#ics-system"
  },
  {
    title: "SiyenSaya - Gamified E-Learning",
    description: "Interactive educational platform making science engaging for elementary students",
    tech: ["Game Development", "Educational Design", "React", "Node.js"],
    staticImage: "/images/truck-delivery.png",
    animatedImage: "/images/truck-delivery.gif",
    link: "#siyensaya"
  },
  {
    title: "Manga Recommendation AI",
    description: "AI-powered system for personalized manga recommendations (In Progress)",
    tech: ["Machine Learning", "Python", "React"],
    staticImage: "/images/truck-delivery.png",
    animatedImage: "/images/truck-delivery.gif",
    link: "#manga-ai"
  },
  {
    title: "PBA Website Restoration",
    description: "Modern restoration of the Philippine Basketball Association website (In Progress)",
    tech: ["Next.js", "TypeScript", "API Integration"],
    staticImage: "/images/truck-delivery.png",
    animatedImage: "/images/truck-delivery.gif",
    link: "#pba-website"
  }
];

const ProjectsSection: FC = () => {
  return (
    <section className="py-20 px-4 bg-dark-bg min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Featured <span className="text-tech-blue">Projects</span>
        </h2>
        <div className="grid grid-cols-1 gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Content - alternates between left and right */}
              <motion.div
                className={`${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? -100 : 100 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <h3 className="text-3xl font-bold text-tech-blue mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-6 text-lg">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-deep-teal/20 text-neon-green rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Project Image */}
              <motion.div
                className={`${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}
                variants={{
                  hidden: { opacity: 0, x: i % 2 === 0 ? 100 : -100 },
                  visible: { 
                    opacity: 1, 
                    x: 0,
                    transition: {
                      duration: 0.8,
                      ease: "easeOut"
                    }
                  }
                }}
              >
                <div className="relative h-[300px] rounded-xl overflow-hidden group">
                  <Image
                    src={project.staticImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-6 py-3 bg-tech-blue text-white rounded-full font-semibold"
                    >
                      View Project
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
