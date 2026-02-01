import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Code2, Database, Terminal, Cpu } from "lucide-react";
import { SKILLS_CATEGORY } from "../../utils/data";
import { Link } from "react-router-dom"; // Link to full about page
import { useTheme } from "../../context/ThemeContext";
import Profile_Pic from "../../assets/images/Avatar1.png";

const AboutSection = () => {
  const { isDarkMode } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-20 transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Title - Centered */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Image */}
            <motion.div 
              variants={itemVariants} 
              className="lg:w-1/3 flex justify-center"
            >
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ background: "conic-gradient(from 0deg, #06b6d4, #a855f7, #ec4899, #06b6d4)" }}
                  className={`absolute inset-0 rounded-2xl blur-lg transition-opacity duration-300 ${isDarkMode ? "opacity-30" : "opacity-20"}`}
                ></motion.div>
                <img
                  src={Profile_Pic}
                  alt="Profile"
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
                />
              </div>
            </motion.div>

            {/* Right: Content */}
            <div className="lg:w-2/3">
              <motion.div variants={itemVariants} className="text-center lg:text-left mb-8">
                <p className="text-xl text-cyan-600 dark:text-cyan-400 font-medium mb-4">
                  Passionate Full Stack Developer & Problem Solver
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                  I am a dedicated <span className="text-cyan-500 font-semibold">Computer Science graduate</span> with a strong foundation in building scalable <span className="text-purple-500 font-semibold">web applications</span>. 
                  I thrive on solving <span className="text-pink-500 font-semibold">complex problems</span> and am always eager to learn new technologies to stay ahead in the ever-evolving tech landscape.
                </p>
              </motion.div>

              {/* Technical Stack Grid */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {SKILLS_CATEGORY.map((category, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ 
                      y: -5, 
                      scale: 1.02,
                      boxShadow: isDarkMode ? "0 0 20px rgba(34, 211, 238, 0.15)" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                    }}
                    className="bg-white dark:bg-[#1a1a1a] p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-cyan-500 transition-colors"
                  >
                    <div className="flex items-center gap-3 mb-2 text-cyan-600 dark:text-cyan-400">
                      {category.title === "Frontend" && <Code2 className="w-5 h-5" />}
                      {category.title === "Backend" && <Terminal className="w-5 h-5" />}
                      {category.title === "Database" && <Database className="w-5 h-5" />}
                      {category.title === "Tools & Platforms" && <Cpu className="w-5 h-5" />}
                      <h3 className="font-bold text-base">{category.title}</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Buttons */}
              <motion.div variants={itemVariants} className="flex justify-center lg:justify-start gap-6">
                <a
                  href="/Aniket_Hiraskar_FSD.pdf"
                  download="Aniket_Hiraskar_FSD.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
                
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors"
                >
                  View Full Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
