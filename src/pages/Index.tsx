
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "@/hooks/useTheme";
import ThemeToggle from "@/components/ThemeToggle";
import LoadingScreen from "@/components/LoadingScreen";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Preload assets or simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <LoadingScreen isLoading={isLoading} setIsLoading={setIsLoading} />
      
      <div className="min-h-screen bg-background text-foreground overflow-hidden">
        <ThemeToggle />
        
        <main className="snap-y snap-mandatory h-screen overflow-y-scroll section-scrollbar">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Index;
