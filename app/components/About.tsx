"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Skill = {
  name: string;
  percentage: number;
};

const skills: Skill[] = [
  { name: "Full Stack Web Dev", percentage: 95 },
  { name: "FinTech", percentage: 80 },
  { name: "Desktop Application", percentage: 90 },
  { name: "ERP Development", percentage: 90 },
];

export default function About() {
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setAnimatedValues((prev) =>
        prev.map((val, i) =>
          val < skills[i].percentage
            ? Math.min(val + 1, skills[i].percentage)
            : val
        )
      );
    }, 20);
    return () => clearInterval(interval);
  }, [isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.section ref={ref} id="about" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 md:px-0 flex flex-col items-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold tracking-wide text-center text-[#333] uppercase"
        >
          ABOUT ME
        </motion.h2>
        {/* Double underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 mb-12 flex flex-col items-center space-y-1"
        >
          <span className="w-10 h-[2px] bg-[#555]"></span>
          <span className="w-20 h-[2px] bg-[#555]"></span>
        </motion.div>

        {/* Content layout */}
        <div className="grid md:grid-cols-2 gap-12 w-full">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-[#555] mb-4">Howdy!</h3>

            <p className="text-gray-600">
              I’m a Software Developer with a strong background in Accounting &
              Finance. I specialize in building ERP systems, financial
              applications, and automation tools that enhance business
              operations. Combining my expertise in finance and technology, I
              develop scalable, secure, and efficient solutions that drive
              digital transformation and improve financial decision-making.
            </p>
            <br />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#333] rounded text-white text-xs tracking-[0.3em] px-8 py-4 font-medium hover:bg-black transition uppercase"
            >
              <a href="/Siraj Mohammed CV.pdf" download>
                Download CV
              </a>
            </motion.button>
          </motion.div>

          {/* Right side - Progress Bars */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {skills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="relative"
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-sm uppercase tracking-wider text-[#555]">
                    {skill.name}
                  </span>
                  <motion.span
                    className="text-sm font-bold text-[#555]"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    {animatedValues[idx]}%
                  </motion.span>
                </div>
                <div className="w-full h-1.5 bg-[#e0e0e0] relative">
                  {/* Progress bar */}
                  <motion.div
                    className="h-1.5 bg-[#333]"
                    initial={{ width: 0 }}
                    animate={
                      isInView ? { width: `${animatedValues[idx]}%` } : {}
                    }
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                  {/* Circular thumb */}
                  <motion.div
                    className="absolute top-1/2 w-3 h-3 bg-[#333] shadow-2xl rounded-full -translate-y-1/2"
                    initial={{ left: 0 }}
                    animate={
                      isInView
                        ? { left: `calc(${animatedValues[idx]}% - 6px)` }
                        : {}
                    }
                    transition={{ duration: 0.3 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
