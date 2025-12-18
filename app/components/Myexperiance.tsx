"use client";

import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

const experiences = [
  {
    company: "Wollo University",
    role: "Full-Stack Developer",
    date: "2024 – Present",
    description:
      "Building a degree document processing system to streamline academic administration and validation.",
  },
  {
    company: "Hospital Desktop App",
    role: "Software Developer",
    date: "2023",
    description:
      "Developed a complete hospital management system for desktop, handling patients, appointments, billing, and HR.",
  },
  {
    company: "SME Inventory + IFRS",
    role: "System Analyst / Developer",
    date: "2022",
    description:
      "Designed a desktop-based inventory and store management system aligned with IFRS for SMEs.",
  },
  {
    company: "Passion Projects",
    role: "Indie Developer",
    date: "Ongoing",
    description:
      "Created various self-driven apps like dashboards, UIs, and automations with modern stacks.",
  },
];

const ExperienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section ref={ref} id="experience" className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-wide text-center text-[#333] uppercase"
        >
          My Experience
        </motion.h2>

        {/* Double underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 mb-12 flex flex-col items-center space-y-1"
        >
          <span className="w-10 h-[2px] bg-[#555]" />
          <span className="w-20 h-[2px] bg-[#555]" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative grid md:grid-cols-2 gap-10"
        >
          {/* This is the full-height vertical dotted line */}

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="relative pl-10"
            >
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 + idx * 0.2, type: "spring" }}
                className="absolute left-[-10px] top-1 w-6 h-6 text-white font-black bg-[#333] rounded-full flex items-center justify-center z-10"
              >
                ✓
              </motion.div>

              {/* Timeline Connector (only if not the last item) */}
              {idx < experiences.length - 2 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.2, duration: 0.5 }}
                  className="absolute left-0 top-6 h-[130%] w-[2px] border-l-2 border-dotted border-gray-300 z-0 origin-top"
                />
              )}

              <h3 className="text-xl font-semibold text-[#333] mb-3">
                {exp.role}
              </h3>
              <p className="text-gray-600 text-sm mb-1">
                {exp.company} — {exp.date}
              </p>
              <p className="text-gray-500">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
