"use client";

import { notFound } from "next/navigation";
import { projects } from "../../../utils/projects";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Navbar from "../../../components/Navbar";

const techIcons: Record<string, React.ReactNode> = {
  "React JS": <img src="https://cdn.simpleicons.org/react/60a5fa" alt="React" className="w-6 h-6" />,
  "Node JS": <img src="https://cdn.simpleicons.org/nodedotjs/60a5fa" alt="Node.js" className="w-6 h-6" />,
  "MUI": <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="MUI" className="w-6 h-6" />,
  "Bootstrap": <img src="https://cdn.simpleicons.org/bootstrap/60a5fa" alt="Bootstrap" className="w-6 h-6" />,
  "SQLite": <img src="https://cdn.simpleicons.org/sqlite/60a5fa" alt="SQLite" className="w-6 h-6" />,
  "ExcelJS": <img src="https://cdn.simpleicons.org/javascript/60a5fa" alt="ExcelJS" className="w-6 h-6" />,
  "Express": <img src="https://cdn.simpleicons.org/express/60a5fa" alt="Express" className="w-6 h-6" />,
  "JSPDF": <img src="https://cdn.simpleicons.org/javascript/60a5fa" alt="JSPDF" className="w-6 h-6" />,
  "SQL": <img src="https://cdn.simpleicons.org/mysql/60a5fa" alt="SQL" className="w-6 h-6" />,
  "Unity": <img src="https://cdn.simpleicons.org/unity/60a5fa" alt="Unity" className="w-6 h-6" />,
  "C#": <img src="https://cdn.simpleicons.org/csharp/60a5fa" alt="C#" className="w-6 h-6" />,
  "MongoDB": <img src="https://cdn.simpleicons.org/mongodb/60a5fa" alt="MongoDB" className="w-6 h-6" />,
  "Next JS": <img src="https://cdn.simpleicons.org/nextdotjs/60a5fa" alt="Next.js" className="w-6 h-6" />,
  "Tailwind": <img src="https://cdn.simpleicons.org/tailwindcss/60a5fa" alt="Tailwind" className="w-6 h-6" />,
  "TypeScript": <img src="https://cdn.simpleicons.org/typescript/60a5fa" alt="TypeScript" className="w-6 h-6" />,
  "APIInteg": <img src="https://cdn.simpleicons.org/api/60a5fa" alt="API Integration" className="w-6 h-6" />,
  "Android Studio": <img src="https://cdn.simpleicons.org/androidstudio/60a5fa" alt="Android Studio" className="w-6 h-6" />,
  "Firebase": <img src="https://cdn.simpleicons.org/firebase/60a5fa" alt="Firebase" className="w-6 h-6" />,
};

export default function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(props.params);
  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const images = [project.staticImage, project.animatedImage];
  const [carouselIdx, setCarouselIdx] = React.useState(0);

  const handlePrev = () => setCarouselIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCarouselIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen bg-white dark:bg-dark-bg text-gray-900 dark:text-text-primary transition-all duration-300">
        <div className="max-w-4xl mx-auto px-4 py-16">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
           <Link
  href="/"
  className="mt-10 block text-accent hover:text-accent-light transition-colors duration-300"
>
  &larr; Back to Home
</Link>

          </motion.div>

          {/* Content */}
          <div className="bg-white dark:bg-card-bg rounded-xl shadow-lg p-8 transition-all duration-300">
            <motion.h1
              className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-accent"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {project.title}
            </motion.h1>

            {/* Modern Carousel */}
            <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-8 bg-gray-100 dark:bg-card-bg transition-all duration-300">
              <AnimatePresence initial={false} mode="wait">
                <motion.div
                  key={carouselIdx}
                  initial={{ opacity: 0, x: 60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -60 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={images[carouselIdx]}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent text-white rounded-full p-2 shadow-lg z-10"
                aria-label="Previous image"
              >
                &#8592;
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent/80 hover:bg-accent text-white rounded-full p-2 shadow-lg z-10"
                aria-label="Next image"
              >
                &#8594;
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-3 h-3 rounded-full ${carouselIdx === idx ? "bg-accent" : "bg-gray-400/40 dark:bg-gray-700/60"}`}
                  />
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-secondary text-gray-900 dark:text-accent-light font-medium text-sm transition-all duration-300"
                >
                  {techIcons[tech] || null}
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-8">
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2 rounded-lg font-bold bg-gray-100 dark:bg-card-bg text-gray-900 dark:text-accent-light hover:bg-accent hover:text-white dark:hover:bg-accent dark:hover:text-white transition-colors duration-300"
              >
                <FaGithub /> GITHUB
              </a>
            </div>

            {/* Details Section */}
            <div className="bg-gray-50 dark:bg-card-bg rounded-xl p-6 shadow-lg transition-colors duration-300">
              <h2 className="text-2xl font-bold text-accent mb-4">Details</h2>
              <ul className="list-disc pl-6 text-gray-700 dark:text-text-secondary space-y-2">
                <li>
                  <span className="font-semibold text-accent">Project Overview:</span> {project.description}
                </li>
                <li>
                  <span className="font-semibold text-accent">Tech Stack:</span> {project.tech.join(", ")}
                </li>
                <li>
                  <span className="font-semibold text-accent">Status:</span> <span className="capitalize text-gray-700 dark:text-text-secondary">{project.live === "#" ? "In Progress" : "Live"}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
