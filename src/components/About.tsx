
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Briefcase } from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="about"
      className="portfolio-section section-padding bg-gradient-to-b from-background to-background/80"
      ref={sectionRef}
    >
      <motion.div
        className="container max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <div className="inline-block mb-3">
            <div className="w-16 h-1 bg-primary mx-auto mb-2"></div>
            <div className="w-10 h-1 bg-primary mx-auto"></div>
          </div>
          <h2 className="section-heading bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">About Me</h2>
          <p className="section-subheading">
            Blockchain technology enthusiast with expertise in both frontend and backend development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Code className="inline-block mr-2 text-primary" size={22} />
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I started my career as a React Developer, eventually growing into leadership roles as Frontend Lead and now CTO. 
              My passion lies in blockchain and backend development, with a focus on creating secure, efficient systems.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At BlockMobLabs, I lead the development of innovative blockchain solutions including Strike Bot, an AI-powered trading platform, 
              and Naitram, a blockchain-based event management system.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Briefcase className="inline-block mr-2 text-primary" size={22} />
              Career Highlights
            </h3>
            <div className="space-y-6">
              <div className="glass rounded-xl p-5 transform transition-transform hover:-translate-y-1 duration-300">
                <div className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full mb-1">Present</div>
                <h4 className="text-xl font-semibold">CTO @ BlockMobLabs</h4>
                <p className="text-muted-foreground mt-2">
                  Leading development of AI trading solutions and blockchain platforms.
                </p>
              </div>

              <div className="glass rounded-xl p-5 transform transition-transform hover:-translate-y-1 duration-300">
                <div className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full mb-1">Previously</div>
                <h4 className="text-xl font-semibold">Frontend Lead</h4>
                <p className="text-muted-foreground mt-2">
                  Managed frontend teams and established development standards.
                </p>
              </div>

              <div className="glass rounded-xl p-5 transform transition-transform hover:-translate-y-1 duration-300">
                <div className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full mb-1">Started as</div>
                <h4 className="text-xl font-semibold">React Developer</h4>
                <p className="text-muted-foreground mt-2">
                  Built responsive, performance-optimized interfaces.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
