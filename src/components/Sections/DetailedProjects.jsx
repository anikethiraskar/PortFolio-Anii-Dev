// e:\PortFolio\Anii-Dev\src\components\Sections\DetailedProjects.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { PROJECTS, SKILLS_CATEGORY } from "../../utils/data";
import { useTheme } from "../../context/ThemeContext";

const DetailedProjects = () => {
  const { isDarkMode } = useTheme();
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <div className="pt-24 pb-20 bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <Link to="/" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12 md:mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Projects
            </h1>
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the projects I've worked on. Each project represents a unique challenge and a learning opportunity.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-all duration-300 group flex flex-col"
              >
                <div className="relative overflow-hidden h-48 shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-black rounded-full text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white dark:bg-black rounded-full text-gray-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20 px-2 py-1 rounded">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
                    {project.tags?.map((tech, idx) => {
                      const skill = SKILLS_CATEGORY.flatMap((cat) => cat.skills).find(
                        (s) => s.name.toLowerCase() === tech.toLowerCase()
                      );
                      return (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 rounded-full flex items-center gap-1"
                        >
                          {skill?.icon && (
                            typeof skill.icon === "string" ? (
                              <i className={skill.icon} />
                            ) : (
                              <skill.icon className="w-3 h-3" />
                            )
                          )}
                          {tech}
                        </span>
                      );
                    })}
                  </div>

                  {/* Mobile Links */}
                  <div className="flex items-center gap-4 mt-auto md:hidden pt-4 border-t border-gray-100 dark:border-gray-800">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailedProjects;
