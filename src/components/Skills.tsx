
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  {
    category: "Frontend",
    icon: "🌐",
    technologies: [
      { name: "React.js", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 95 },
      { name: "TypeScript", proficiency: 80 },
      { name: "Three.js", proficiency: 75 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    technologies: [
      { name: "Node.js", proficiency: 85 },
      { name: "Express.js", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "PostgreSQL", proficiency: 70 },
      { name: "GraphQL", proficiency: 65 },
    ],
  },
  {
    category: "Blockchain",
    icon: "🔗",
    technologies: [
      { name: "Solidity", proficiency: 85 },
      { name: "Smart Contracts", proficiency: 80 },
      { name: "Ethereum", proficiency: 85 },
      { name: "Solana", proficiency: 70 },
      { name: "Web3.js", proficiency: 75 },
    ],
  },
  {
    category: "DevOps",
    icon: "🚀",
    technologies: [
      { name: "Docker", proficiency: 75 },
      { name: "AWS", proficiency: 70 },
      { name: "CI/CD", proficiency: 80 },
      { name: "Kubernetes", proficiency: 60 },
      { name: "Git", proficiency: 90 },
    ],
  },
];

const SkillCard = ({ category, technologies, icon }) => {
  return (
    <motion.div
      className="glass rounded-2xl p-6 h-full backdrop-blur-xl border border-primary/10"
      whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <span className="text-2xl mr-2">{icon}</span>
        <h3 className="text-xl font-bold">{category}</h3>
      </div>
      <div className="space-y-4">
        {technologies.map((tech, index) => (
          <div key={index} className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium">{tech.name}</span>
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                {tech.proficiency}%
              </span>
            </div>
            <Progress 
              value={tech.proficiency} 
              className="h-1.5 bg-muted"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
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
      id="skills"
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
          <h2 className="section-heading bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">Skills & Tech Stack</h2>
          <p className="section-subheading">
            My technical expertise spans frontend, backend, blockchain, and DevOps technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
