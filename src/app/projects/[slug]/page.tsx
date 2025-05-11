"use client";

import { notFound } from "next/navigation";
import { projects } from "../../../utils/projects";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export default function ProjectPage(props: { params: Promise<{ slug: string }> }) {
  // Unwrap params using React.use()
  const { slug } = React.use(props.params);

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-dark-bg text-text-primary py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <Link href="/" className="text-accent hover:underline text-lg">&larr; Back to Home</Link>
        </motion.div>
        <motion.h1
          className="font-orbitron text-4xl md:text-5xl font-bold mb-6 text-accent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {project.title}
        </motion.h1>
        <div className="relative w-full h-72 md:h-96 rounded-xl overflow-hidden mb-8 shadow-lg">
          <Image
            src={project.animatedImage}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>
        <motion.p
          className="text-lg mb-8 text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {project.description}
        </motion.p>
        <div className="flex flex-wrap gap-3 mb-8">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-secondary text-accent-light font-semibold text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg font-bold bg-accent text-primary hover:bg-accent-light transition"
          >
            VIEW LIVE
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-lg font-bold bg-secondary text-accent-light hover:bg-accent transition"
          >
            GITHUB
          </a>
        </div>
      </div>
    </main>
  );
}
