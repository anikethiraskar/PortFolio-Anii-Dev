import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2 } from "lucide-react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Sections/HeroSection";
import AboutSection from "./components/Sections/AboutSection";
import SkillsSection from "./components/Sections/SkillsSection";
import DetailedAbout from "./components/Sections/DetailedAbout";
import DetailedSkills from "./components/Sections/DetailedSkills";
import FooterSection from "./components/Sections/FooterSection";
import DetailedProjects from "./components/Sections/DetailedProjects";
import ResumeSection from "./components/Sections/ReseumeSection";
import ContactSection from "./components/Sections/ContactSections";
import ParticleBackground from "./components/ParticleBackground";

gsap.registerPlugin(ScrollTrigger);

const ScrollProgress = () => {
  const progressRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      
      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", updateProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/20 dark:bg-white/5 z-[60]">
      <div
        ref={progressRef}
        className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-100 ease-out"
        style={{ width: "0%" }}
      />
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <ThemeProvider>
      <Router>
      <div className="bg-white dark:bg-[#0a0a0a] min-h-screen text-gray-900 dark:text-white transition-colors duration-300 flex flex-col">
        <AnimatePresence>
          {isLoading && (
            <motion.div
              key="loader-bg"
              className="fixed inset-0 bg-white dark:bg-[#0a0a0a] z-40"
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          )}
        </AnimatePresence>

        {isLoading ? (
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <motion.div
              layoutId="main-logo"
              className="flex items-center gap-4 text-gray-900 dark:text-white"
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <Code2 className="w-16 h-16 md:w-24 md:h-24 text-cyan-400" />
              <span className="text-4xl md:text-6xl font-bold tracking-wide">
                anii-dev
              </span>
            </motion.div>
          </div>
        ) : (
          <div className="flex-grow">
            <ScrollProgress />
            <ParticleBackground />
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                  </motion.div>
                }
              />
              <Route path="/about" element={<DetailedAbout />} />
              <Route path="/skills" element={<DetailedSkills />} />
              <Route path="/projects" element={<DetailedProjects />} />
              <Route path="/resume" element={<ResumeSection />} />
              <Route path="/contact" element={<ContactSection />} />
            </Routes>
            <FooterSection/>
          </div>
        )}
      </div>
      </Router>
    </ThemeProvider>
  );
};
export default App;