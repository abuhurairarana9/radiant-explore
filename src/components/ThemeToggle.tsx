
import React from "react";
import { useTheme } from "@/hooks/useTheme";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="fixed top-6 right-6 z-50 glass p-2 rounded-full"
      onClick={toggleTheme}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.8 }}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon size={24} className="text-primary" />
      ) : (
        <Sun size={24} className="text-primary" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;
