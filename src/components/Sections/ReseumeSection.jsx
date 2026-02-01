// e:\PortFolio\Anii-Dev\src\components\Sections\ReseumeSection.jsx

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { WORK_EXPERIENCE, EDUCATION, SKILLS_CATEGORY, CONTACT_INFO, PROJECTS } from "../../utils/data";
import Profile_Pic from "../../assets/images/Avatar1.png";
import { useTheme } from "../../context/ThemeContext";

const ResumeSection = () => {
  const { isDarkMode } = useTheme();
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="pt-24 pb-20 bg-gray-50 dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <Link to="/" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="bg-white dark:bg-[#1a1a1a] rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-800"
        >
          {/* Header / Personal Info */}
          <div className="bg-cyan-600 dark:bg-cyan-900/40 p-8 text-white">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <motion.img
                variants={itemVariants}
                src={Profile_Pic}
                alt="Profile"
                className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-700 object-cover shadow-lg"
              />
              <div className="text-center md:text-left flex-grow">
                <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Aniket Hiraskar
                </motion.h1>
                <motion.p variants={itemVariants} className="text-cyan-100 text-lg font-medium mb-4">
                  Full Stack Developer
                </motion.p>
                <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-cyan-50">
                  {CONTACT_INFO.map((info, idx) => (
                    <div key={idx} className="flex items-center gap-1">
                      <info.icon className="w-4 h-4" />
                      <span>{info.value}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
              <motion.div variants={itemVariants} className="mt-4 md:mt-0">
                <a
                  href="/Aniket_Hiraskar_FSD.pdf" // Ensure this file exists in your public folder
                  download="Aniket_Hiraskar_FSD.pdf"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-white text-cyan-600 font-bold rounded-full hover:bg-gray-100 transition-colors shadow-md"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </motion.div>
            </div>
          </div>

          <div className="p-8 md:p-12 space-y-10">
            {/* Summary */}
            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-bold border-b-2 border-cyan-500 pb-2 mb-4 uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Professional Summary
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Dedicated Computer Science graduate with a strong foundation in building scalable web applications. 
                Proficient in both frontend and backend technologies, with a focus on creating robust and user-friendly solutions. 
                Eager to contribute to impactful projects and collaborate with innovative teams.
              </p>
            </motion.section>

            {/* Skills */}
            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-bold border-b-2 border-cyan-500 pb-2 mb-6 uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {SKILLS_CATEGORY.map((cat, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-3">{cat.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill, idx) => (
                        <span key={idx} className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-md border border-gray-200 dark:border-gray-700">
                          {typeof skill.icon === "string" ? (
                            <i className={skill.icon} />
                          ) : (
                            skill.icon && <skill.icon className="w-4 h-4" />
                          )}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Experience */}
            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-bold border-b-2 border-cyan-500 pb-2 mb-6 uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Experience
              </h2>
              <div className="space-y-8">
                {WORK_EXPERIENCE.map((exp, index) => (
                  <div key={index} className="relative border-l-2 border-gray-200 dark:border-gray-700 pl-4 ml-2">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-2 border-white dark:border-[#1a1a1a]"></div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-cyan-600 dark:text-cyan-400 mb-3">
                      <span className="font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{exp.description}</p>
                    <ul className="list-disc list-inside text-sm text-gray-500 dark:text-gray-400 space-y-1">
                      {exp.responsibilities?.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Projects */}
            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-bold border-b-2 border-cyan-500 pb-2 mb-6 uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PROJECTS.map((project, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-[#222] p-5 rounded-lg border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags?.map((tech, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded border border-gray-200 dark:border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Education */}
            <motion.section variants={itemVariants}>
              <h2 className="text-xl font-bold border-b-2 border-cyan-500 pb-2 mb-6 uppercase tracking-wider bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Education
              </h2>
              <div className="grid grid-cols-1 gap-6">
                {EDUCATION.map((edu, index) => (
                  <div key={index} className="bg-gray-50 dark:bg-[#222] p-5 rounded-lg border border-gray-100 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">{edu.degree}</h3>
                        <p className="text-cyan-600 dark:text-cyan-400">{edu.institution}</p>
                      </div>
                      <span className="text-xs bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-gray-700 dark:text-gray-300 whitespace-nowrap font-medium">
                        {edu.duration}
                      </span>
                    </div>
                    {edu.cgpa && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 font-medium">
                        CGPA/Percentage: <span className="text-gray-700 dark:text-gray-300">{edu.cgpa}</span>
                      </p>
                    )}
                    <p className="text-sm text-gray-600 dark:text-gray-300">{edu.description}</p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumeSection;
