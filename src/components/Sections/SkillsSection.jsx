import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SKILLS_CATEGORY, STATS } from "../../utils/data";
import { useTheme } from "../../context/ThemeContext";

const SkillsSection = () => {
  const { isDarkMode } = useTheme();
  const ref = useRef(null);
  const [activeTab, setActiveTab] = useState("All");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Extract categories for tabs
  const tabs = ["All", ...SKILLS_CATEGORY.map((cat) => cat.title)];

  // Filter skills based on activeTab
  const filteredSkills =
    activeTab === "All"
      ? SKILLS_CATEGORY.flatMap((cat) => cat.skills)
      : SKILLS_CATEGORY.find((cat) => cat.title === activeTab)?.skills || [];

  return (
    <section ref={ref} className="py-16 transition-colors duration-300 overflow-hidden relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= TECHNICAL SKILLS ================= */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              My Technical Skills
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I specialize in to build high-quality applications.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                  activeTab === tab
                    ? "bg-cyan-500 text-white shadow-lg scale-105"
                    : "bg-gray-200/50 dark:bg-gray-800/50 backdrop-blur-sm text-slate-600 dark:text-slate-300 hover:bg-gray-300/50 dark:hover:bg-slate-700/50 border border-slate-200/50 dark:border-slate-700/50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Skills Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, idx) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ 
                    y: -5, 
                    scale: 1.05,
                    boxShadow: isDarkMode ? "0 0 20px rgba(34, 211, 238, 0.15)" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-3 sm:p-6 shadow-md border border-slate-100/50 dark:border-slate-700/50 transition-colors group"
                >
                  <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg bg-slate-200 dark:bg-slate-50">
                      <span className={`text-xl sm:text-3xl ${skill.color.replace("bg-", "text-")} transition-transform duration-300 group-hover:scale-110`}>
                        {typeof skill.icon === "string" ? (
                          <i className={skill.icon} />
                        ) : (
                          skill.icon && <skill.icon />
                        )}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white">{skill.name}</h3>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-2 sm:mb-4">
                    {skill.description}
                  </p>

                  <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-1.5 sm:h-2.5 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full rounded-full ${skill.color}`}
                    />
                  </div>
                  <div className="mt-1 sm:mt-2 text-right text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400">
                    {skill.level}%
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-12 text-center">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-cyan-500 text-cyan-600 dark:text-cyan-400 font-semibold rounded-lg hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-colors"
            >
              View Detailed Skills
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* ================= ACHIEVEMENTS ================= */}
        <motion.div style={{ y }}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          My Achievements
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -5,
                boxShadow: isDarkMode ? "0 0 20px rgba(168, 85, 247, 0.15)" : "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-gray-100/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-md p-4 sm:p-8 text-center border border-transparent dark:border-slate-700/50 transition-all"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-indigo-600 dark:text-cyan-400">
                {stat.number}
              </div>
              <div className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;