"use client";

import { FC } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const ContactSection: FC = () => (
  <section id="contact" className="py-20 bg-primary relative overflow-hidden">
    <div className="max-w-3xl mx-auto px-4 relative z-10">
      <motion.h2
        className="font-orbitron text-4xl font-bold text-accent mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col gap-6 text-lg w-full md:w-1/2">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-accent text-2xl" />
            <span className="text-text-primary font-medium">0927 391 5603</span>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-accent text-2xl" />
            <span className="text-text-primary font-medium">waynelamarca720@gmail.com</span>
          </div>
          <div className="flex items-center gap-4">
            <FaLinkedin className="text-accent text-2xl" />
            <a
              href="https://www.linkedin.com/in/wayne-chandler-gomez-a237a6304"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-light underline hover:text-accent transition"
            >
              linkedin.com/in/wayne-chandler-gomez-a237a6304
            </a>
          </div>
        </div>
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-accent shadow-xl bg-card-bg flex items-center justify-center">
          <Image
            src="/images/avatar.png"
            alt="Wayne Chandler Gomez"
            width={220}
            height={320}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
