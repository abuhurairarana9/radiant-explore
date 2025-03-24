
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Strike Bot",
    description: "AI-powered trading bot built on Solana and Ethereum, using advanced algorithms to optimize trading strategies.",
    technologies: ["Solana", "Ethereum", "Python", "Machine Learning", "React"],
    liveUrl: "https://strikebot.io",
    githubUrl: "https://github.com/abu-huraira/strike-bot",
    image: "/placeholder.svg",
    color: "from-blue-500/20 to-indigo-600/20"
  },
  {
    title: "Naitram",
    description: "Blockchain-based event management platform for secure ticketing, transparent transactions, and enhanced attendee experiences.",
    technologies: ["Ethereum", "Solidity", "Next.js", "Node.js", "PostgreSQL"],
    liveUrl: "https://naitram.com",
    githubUrl: "https://github.com/abu-huraira/naitram",
    image: "/placeholder.svg",
    color: "from-purple-500/20 to-pink-600/20"
  },
  {
    title: "Blockchain Explorer",
    description: "A comprehensive explorer for blockchain transactions, with real-time updates and detailed analytics.",
    technologies: ["React", "Web3.js", "TypeScript", "Node.js", "Express"],
    liveUrl: "https://blockchain-explorer.dev",
    githubUrl: "https://github.com/abu-huraira/blockchain-explorer",
    image: "/placeholder.svg",
    color: "from-cyan-500/20 to-blue-600/20"
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
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      id="projects"
      className="portfolio-section section-padding bg-gradient-to-b from-background to-background/80"
      ref={sectionRef}
    >
      <motion.div
        className="container max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <div className="inline-block mb-3">
            <div className="w-16 h-1 bg-primary mx-auto mb-2"></div>
            <div className="w-10 h-1 bg-primary mx-auto"></div>
          </div>
          <h2 className="section-heading bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">Projects</h2>
          <p className="section-subheading">
            A showcase of my work in blockchain development, AI integration, and web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`glass rounded-2xl overflow-hidden border border-primary/10 backdrop-blur-xl shadow-lg h-full flex flex-col`}
            >
              <div
                className={`h-48 bg-cover bg-center bg-gradient-to-br ${project.color} flex items-center justify-center`}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center text-3xl font-bold text-white">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full"
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
                    Live Demo <ExternalLink className="ml-1 h-3 w-3" />
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
