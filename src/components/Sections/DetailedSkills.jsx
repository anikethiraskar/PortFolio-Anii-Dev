// e:\PortFolio\Anii-Dev\src\components\Sections\DetailedSkills.jsx

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { SKILLS_CATEGORY, STATS } from "../../utils/data";
import { useTheme } from "../../context/ThemeContext";

const DetailedSkills = () => {
  const { isDarkMode } = useTheme();
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", ...SKILLS_CATEGORY.map((cat) => cat.title)];

  const filteredSkills =
    activeTab === "All"
      ? SKILLS_CATEGORY.flatMap((cat) => cat.skills)
      : SKILLS_CATEGORY.find((cat) => cat.title === activeTab)?.skills || [];

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
    <div className="pt-24 pb-20 bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300 relative z-10">
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
              Technical Skills
            </h1>
            <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use to build digital solutions.
            </p>
          </motion.div>

          {/* Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-cyan-500 text-white shadow-lg scale-105"
                    : "bg-gray-100 dark:bg-[#1a1a1a] text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#252525] border border-transparent"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            layout
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-[#1a1a1a] rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-800 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 transition-colors group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white dark:bg-black shadow-sm">
                      <span className={`text-2xl ${skill.color?.replace("bg-", "text-") || "text-cyan-500"}`}>
                        {typeof skill.icon === "string" ? (
                          <i className={skill.icon} />
                        ) : (
                          skill.icon && <skill.icon />
                        )}
                      </span>
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
                  </div>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 min-h-[40px]">
                    {skill.description}
                  </p>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-medium">
                      <span className="text-gray-500 dark:text-gray-400">Proficiency</span>
                      <span className="text-cyan-600 dark:text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className={`h-full rounded-full ${skill.color || "bg-cyan-500"}`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Achievements Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Achievements & Stats
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {STATS.map((stat, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-[#1a1a1a] p-6 rounded-xl text-center border border-gray-100 dark:border-gray-800"
                >
                  <div className="text-3xl md:text-4xl font-bold text-cyan-600 dark:text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  );
};

export default DetailedSkills;
