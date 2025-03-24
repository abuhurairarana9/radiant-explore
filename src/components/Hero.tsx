
import React from "react";
import { motion } from "framer-motion";
import Canvas3D from "./Canvas3D";
import { useTheme } from "@/hooks/useTheme";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  const { theme } = useTheme();

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        delay: 0.7,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    },
    hover: { 
      y: -5,
      transition: {
        yoyo: Infinity,
        duration: 1.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="portfolio-section overflow-hidden" id="hero">
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 z-0">
          <Canvas3D dark={theme === "dark"} />
        </div>
        
        <div className="absolute inset-0 z-10 flex flex-col justify-end sm:justify-center items-center p-6 md:p-12">
          <motion.div
            className="container flex flex-col items-center text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 }
            }}
          >
            <motion.div
              custom={0}
              variants={textVariants}
              className="glass px-6 py-3 rounded-full mb-6 backdrop-blur-2xl"
            >
              <span className="text-sm md:text-base font-medium text-primary">
                CTO & Blockchain Developer
              </span>
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent"
              custom={1}
              variants={textVariants}
            >
              Abu Huraira
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8"
              custom={2}
              variants={textVariants}
            >
              Building innovative solutions in blockchain, AI, and web development.
              Currently CTO at BlockMobLabs, developing cutting-edge trading solutions.
            </motion.p>
            
            <motion.a
              href="#about"
              className="flex items-center justify-center w-12 h-12 rounded-full glass backdrop-blur-xl text-primary hover:text-primary-foreground hover:bg-primary transition-colors duration-300"
              variants={buttonVariants}
              animate="visible"
              initial="hidden"
              whileHover="hover"
            >
              <ArrowDownCircle className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
