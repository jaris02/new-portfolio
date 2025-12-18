// app/components/Hero.tsx
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={ref}
      id="home"
      className="min-h-[90vh] md:min-h-screen flex items-center bg-[#f7f7f7] px-4 md:px-0 mt-[-40px] relative overflow-hidden"
    >
      <motion.div
        style={{ y, opacity }}
        className="max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center gap-8 md:gap-12"
      >
        {/* Text */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center md:text-left px-2 md:px-4 md:m-5 order-2 md:order-1 relative z-10"
        >
          <motion.p
            variants={itemVariants}
            className="uppercase tracking-[0.3em] text-xs text-[#555] mb-2 md:mb-4 font-light mt-[80px] md:mt-[100px]"
          >
            HELLO, MY NAME IS
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#333] leading-tight mb-4 md:mb-6"
          >
            <span className="font-normal block md:inline">SIRAJ</span>{" "}
            <span className="font-extrabold block md:inline bg-gradient-to-r from-[#333] via-[#555] to-[#333] bg-clip-text text-transparent">
              MOHAMMED
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-[#555] text-sm sm:text-base md:text-lg mb-6 md:mb-8 max-w-md font-light leading-relaxed mx-auto md:mx-0"
          >
            I&rsquo;m a Software Developer with a strong background in
            Accounting & Finance
          </motion.p>
          <motion.div variants={itemVariants}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#333] rounded-sm text-white text-xs tracking-[0.3em] px-6 sm:px-8 py-3 sm:py-4 font-medium hover:bg-black transition uppercase relative overflow-hidden group"
            >
              <span className="relative z-10">
                <Link href="#portfolio">MY WORK</Link>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Image - Animates once on load, then stays still */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex justify-center md:justify-end h-full order-1 md:order-2"
        >
          <div className="h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] w-full relative transform translate-y-8 md:translate-y-0">
            <Image
              src="/036A2528-Photoroom.png"
              alt="Siraj Mohammed"
              fill
              className="object-contain object-center drop-shadow-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
