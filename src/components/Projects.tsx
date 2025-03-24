
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "Strike Bot",
    description: "AI-powered trading bot built on Solana and Ethereum, using advanced algorithms to optimize trading strategies.",
    technologies: ["Solana", "Ethereum", "Python", "Machine Learning", "React"],
    liveUrl: "https://strikebot.io",
    githubUrl: "https://github.com/abu-huraira/strike-bot",
    image: "/placeholder.svg"
  },
  {
    title: "Naitram",
    description: "Blockchain-based event management platform for secure ticketing, transparent transactions, and enhanced attendee experiences.",
    technologies: ["Ethereum", "Solidity", "Next.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://naitram.com",
    githubUrl: "https://github.com/abu-huraira/naitram",
    image: "/placeholder.svg"
  },
  {
    title: "Blockchain Explorer",
    description: "A comprehensive explorer for blockchain transactions, with real-time updates and detailed analytics.",
    technologies: ["React", "Web3.js", "TypeScript", "Node.js", "Express"],
    liveUrl: "https://blockchain-explorer.dev",
    githubUrl: "https://github.com/abu-huraira/blockchain-explorer",
    image: "/placeholder.svg"
  }
];

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

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
      id="projects"
      className="portfolio-section section-padding"
      ref={sectionRef}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="section-heading text-gradient">Projects</h2>
          <p className="section-subheading">
            A showcase of my work in blockchain development, AI integration, and web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
                  >
                    Live Demo <ArrowUpRight className="ml-1 h-3 w-3" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-medium hover:text-primary transition-colors"
                  >
                    <Github className="mr-1 h-4 w-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
