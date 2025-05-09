"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Truck Delivery Automation",
    description: "End-to-end automation system including inventory management, PO generation, and business analytics",
    tech: ["Node.js", "React", "SQL", "Analytics"],
  },
  {
    title: "Science Quest",
    description: "2D Unity game developed in C# that makes learning science fun and interactive for students",
    tech: ["Unity", "C#", "Game Development", "Educational Design"],
  },
  {
    title: "ICS System - Civil Service Commission",
    description: "Streamlined document generation system for inventory management, reducing process time by 75%",
    tech: ["Database Design", "Process Automation", "Document Generation"],
  },
  {
    title: "SiyenSaya - Gamified E-Learning",
    description: "Interactive educational platform making science engaging for elementary students",
    tech: ["Game Development", "Educational Design", "React", "Node.js"],
  },
  {
    title: "Manga Recommendation AI",
    description: "AI-powered system for personalized manga recommendations (In Progress)",
    tech: ["Machine Learning", "Python", "React"],
  },
  {
    title: "PBA Website Restoration",
    description: "Modern restoration of the Philippine Basketball Association website (In Progress)",
    tech: ["Next.js", "TypeScript", "API Integration"],
  }
];

const ProjectsSection: FC = () => {
  return (
    <section className="py-20 px-4 bg-dark-bg min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Featured <span className="text-tech-blue">Projects</span>
        </h2>
        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-card-bg p-6 rounded-lg"
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
