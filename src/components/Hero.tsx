
import React from "react";
import { motion } from "framer-motion";
import Canvas3D from "./Canvas3D";
import { useTheme } from "@/hooks/useTheme";

const Hero = () => {
  const { theme } = useTheme();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section className="portfolio-section overflow-hidden" id="hero">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 z-0">
          <Canvas3D dark={theme === "dark"} />
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-10">
          <motion.div
            className="flex flex-col max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <motion.p
              className="text-sm md:text-base font-medium text-muted-foreground"
              custom={0}
              variants={textVariants}
            >
              CTO & Blockchain Developer
            </motion.p>
            
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mt-2 mb-4 tracking-tight"
              custom={1}
              variants={textVariants}
            >
              Abu Huraira
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              custom={2}
              variants={textVariants}
            >
              Building innovative solutions in blockchain, AI, and web development.
              Currently CTO at BlockMobLabs, developing cutting-edge trading solutions.
            </motion.p>
            
            <motion.div
              className="mt-8"
              custom={3}
              variants={textVariants}
            >
              <motion.a
                href="#about"
                className="inline-flex items-center px-6 py-3 border border-primary rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Discover More
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
