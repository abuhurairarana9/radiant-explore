
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Linkedin, Github, Twitter, Mail, Send, ArrowRight } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Mock form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
        variant: "default",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

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

  const socialLinks = [
    { icon: <Linkedin size={20} />, url: "https://linkedin.com/in/abuhuraira", label: "LinkedIn" },
    { icon: <Github size={20} />, url: "https://github.com/abu-huraira", label: "GitHub" },
    { icon: <Twitter size={20} />, url: "https://twitter.com/abuhuraira", label: "Twitter" },
    { icon: <Mail size={20} />, url: "mailto:contact@abuhuraira.com", label: "Email" },
  ];

  return (
    <section
      id="contact"
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
          <h2 className="section-heading bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent">Contact Me</h2>
          <p className="section-subheading">
            Got a project in mind? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
            </p>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center glass p-4 rounded-xl hover:bg-primary/5 transition-colors border border-primary/10 backdrop-blur-xl"
                  whileHover={{ 
                    x: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  <div className="mr-4 text-primary">{link.icon}</div>
                  <span className="flex-grow">{link.label}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass focus:ring-2 focus:ring-primary focus:outline-none transition-all border border-primary/10 backdrop-blur-xl"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl glass focus:ring-2 focus:ring-primary focus:outline-none transition-all border border-primary/10 backdrop-blur-xl"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl glass focus:ring-2 focus:ring-primary focus:outline-none transition-all border border-primary/10 backdrop-blur-xl"
                />
              </div>
              
              <motion.button
                type="submit"
                className="w-full py-3 px-6 bg-primary text-primary-foreground rounded-xl flex items-center justify-center hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="animate-spin h-5 w-5 border-2 border-white border-opacity-50 border-t-transparent rounded-full" />
                ) : (
                  <>Send Message <Send className="ml-2 h-4 w-4" /></>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
