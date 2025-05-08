"use client";

import { FC } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  staticImage: string;
  animatedImage: string;
  link: string;
  isOtherHovered: boolean;
  isHovered: boolean;
}

const ProjectCard: FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  staticImage, 
  animatedImage,
  link, 
  isOtherHovered,
  isHovered 
}) => {
  return (
    <Link href={link} className="block h-full group">
      <motion.div 
        className={`relative h-full rounded-xl overflow-hidden ${
          isHovered ? 'bg-black z-10' : isOtherHovered ? 'bg-card-bg/50' : 'bg-card-bg'
        }`}
        layout
        transition={{ 
          layout: { duration: 0.6, type: "spring" },
          default: { duration: 0.3 }
        }}
      >
        <motion.div className="relative h-full w-full">
          <Image
            src={isOtherHovered ? animatedImage : staticImage}
            alt={title}
            fill
            className={`object-cover transition-all duration-700 ${
              isHovered ? 'scale-110 filter brightness-110' : 'scale-100'
            }`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black transition-opacity duration-500 ${
            isHovered ? 'opacity-90' : 'opacity-70'
          }`} />
          
          <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${
                isHovered ? 'text-neon-green scale-110' : 'text-tech-blue'
              }`}>
                {title}
              </h3>
              <p className={`mb-4 transform transition-all duration-300 ${
                isHovered ? 'text-white opacity-100 scale-105' : 'text-slate-300 opacity-80'
              }`}>
                {description}
              </p>
              <div className="flex flex-wrap gap-2">
                {tech.map((item) => (
                  <span
                    key={item}
                    className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                      isHovered 
                        ? 'bg-tech-blue/30 text-white' 
                        : 'bg-deep-teal/20 text-neon-green'
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
