"use client";

import { FC, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from "next/link";
import { projects } from "../utils/projects";
import { useRouter } from "next/navigation";

const ProjectsSection: FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  // Helper to open links in a new tab
  const openInNewTab = (url: string) => {
    if (url && url !== "#") window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-white dark:bg-dark-bg text-gray-900 dark:text-text-primary min-h-screen font-sans relative overflow-hidden transition-colors duration-500"
    >
      {/* SVG Grid Background */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <motion.path
          d="M0,100 L1440,100 M0,300 L1440,300 M0,500 L1440,500 M0,700 L1440,700"
          stroke="#60a5fa"
          strokeWidth="1"
          strokeDasharray="8 8"
          initial={{ opacity: 0.08, pathLength: 0.8 }}
          animate={{ opacity: [0.08, 0.16, 0.08], pathLength: [0.8, 1, 0.8] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className=" text-5xl font-bold text-text-primary mb-16 text-center">
          Featured <span className="text-neon-blue">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="block h-full group">
              <motion.div
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
                  <h3 className={`text-3xl md:text-4xl font-bold mb-3 transition-all duration-300 ${hovered === i ? 'text-white scale-105' : 'text-white'}`}>
                    {project.title}
                  </h3>
                  <p className={`mb-6 text-lg font-medium transition-all duration-300 ${hovered === i ? 'text-white opacity-100' : 'text-white opacity-90'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-4 py-1 rounded-full text-sm font-semibold transition-all duration-300
                          ${hovered === i ? 'bg-accent text-white' : 'bg-secondary text-white'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 justify-center">
                    <button
                      type="button"
                      onClick={e => {
                        e.preventDefault();
                        openInNewTab(project.live);
                      }}
                      className={`px-6 py-2 rounded-lg font-bold transition-all duration-300
                        ${hovered === i ? 'bg-accent text-white shadow-lg hover:bg-accent-light' : 'bg-accent-light text-white'}`}
                    >
                      VIEW LIVE
                    </button>
                    <button
                      type="button"
                      onClick={e => {
                        e.preventDefault();
                        openInNewTab(project.github);
                      }}
                      className={`px-6 py-2 rounded-lg font-bold transition-all duration-300
                        ${hovered === i ? 'bg-secondary text-white shadow-lg hover:bg-accent' : 'bg-secondary/80 text-white'}`}
                    >
                      GITHUB
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
