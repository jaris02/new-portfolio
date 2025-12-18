"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaLaptopCode,
  FaChartBar,
  FaCogs,
  FaDatabase,
  FaRobot,
  FaDesktop,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    description:
      "Building scalable, responsive web applications using modern stacks (Next.js, Supabase, Tailwind).",
  },
  {
    icon: <FaDesktop />,
    title: "Desktop Applications",
    description:
      "Developing powerful desktop solutions using C#, WinForms, and .NET for business-critical tools.",
  },
  {
    icon: <FaChartBar />,
    title: "FinTech Solutions",
    description:
      "Custom-built tools for budgeting, reporting, and financial analysis with real-world accounting insight.",
  },
  {
    icon: <FaCogs />,
    title: "ERP Systems",
    description:
      "End-to-end ERP modules for inventory, HR, finance, and procurement tailored for SMEs.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    description:
      "Designing normalized, high-performance relational databases with SQL optimization.",
  },
  {
    icon: <FaRobot />,
    title: "Automation & Workflows",
    description:
      "Automation of repetitive tasks, document flows, and business processes to save time and improve accuracy.",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="py-20 bg-gray-100 text-center" id="services">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold uppercase text-[#333]"
        >
          Services
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-2 mb-12 flex flex-col items-center space-y-1"
        >
          <span className="w-10 h-[2px] bg-[#555]" />
          <span className="w-20 h-[2px] bg-[#555]" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
              }}
              className="group p-6 border border-gray-200 rounded-lg shadow-sm bg-white transition-all duration-300 transform"
            >
              <div className="flex flex-col items-center text-gray-800">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-100 group-hover:bg-gray-800 transition duration-300 p-4 rounded-full mb-4"
                >
                  {/* Icon with color transition */}
                  <div className="text-3xl text-gray-700 group-hover:text-white transition duration-300">
                    {service.icon}
                  </div>
                </motion.div>
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
