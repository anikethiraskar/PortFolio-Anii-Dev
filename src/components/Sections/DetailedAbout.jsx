import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Profile_Pic from "../../assets/images/Avatar1.png"; // Replace with your actual image
import { 
  Download, 
  Briefcase, 
  GraduationCap, 
  Calendar, 
  User,
  Code2,
  Database,
  Terminal,
  Cpu,
  ArrowLeft,
  Award,
  ExternalLink
} from "lucide-react";
import { Link } from "react-router-dom";
import { 
  SKILLS_CATEGORY, 
  WORK_EXPERIENCE, 
  EDUCATION, 
  JOURNEY_STEPS,
  CERTIFICATIONS
} from "../../utils/data";
import { useTheme } from "../../context/ThemeContext";

const DetailedAbout = () => {
  const { isDarkMode } = useTheme();
  const containerRef = useRef(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    const sections = gsap.utils.toArray('.reveal-on-scroll');
    
    sections.forEach((section) => {
      gsap.fromTo(section.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="pt-24 pb-20 bg-white dark:bg-[#0a0a0a] min-h-screen transition-colors duration-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <Link to="/" className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>

        <div>
          {/* ==================== 1. INTRODUCTION ==================== */}
          <div className="reveal-on-scroll mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                About Me
              </h1>
              <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Passionate Full Stack Developer transforming ideas into seamless web experiences.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              {/* Left: Self Intro */}
              <div className="lg:w-1/2 order-2 lg:order-1">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <User className="w-6 h-6 text-cyan-500" />
                  <span className="bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Who I Am</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-lg">
                  Full-Stack Developer with strong expertise in Java, Spring Boot, Hibernate, and modern frontend technologies including React.js. Experienced in building scalable end-to-end web applications, designing RESTful APIs, and integrating
                  relational (Oracle) and NoSQL (MongoDB) databases. Skilled in applying clean coding principles, Test-Driven Development (TDD), and modern software design practices to deliver reliable and maintainable systems that provide
                  real business value. Passionate about continuous learning, modern architectures, and developing production-ready
                  software.
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                  With experience in Java, Spring Boot, React, and modern cloud tools, I am ready to contribute to impactful projects and collaborate with innovative teams.
                </p>
                
                <a
                  href="/Aniket_Hiraskar_FSD.pdf" // Replace with actual resume path
                  download="Aniket_Hiraskar_FSD.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg transition-colors"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>

              {/* Right: Big Image */}
              <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96">
                  <div className={`absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl rotate-6 blur-lg transition-opacity duration-300 ${isDarkMode ? "opacity-30" : "opacity-20"}`}></div>
                  <img
                    src={Profile_Pic} // Replace with your actual image
                    alt="Profile"
                    className="relative w-full h-full object-cover rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ==================== 2. TECHNICAL SKILLS ==================== */}
          <div className="mb-12 md:mb-20">
            <div className="reveal-on-scroll text-center mb-8 md:mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Technical Skills</h3>
              <p className="text-gray-600 dark:text-gray-400">My technical toolkit and proficiency levels</p>
            </div>

            <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {SKILLS_CATEGORY.map((category, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-[#1a1a1a] p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-cyan-500"
                  style={{
                    boxShadow: isDarkMode ? "0 4px 20px rgba(34, 211, 238, 0.1)" : undefined
                  }}
                >
                  <h4 className="text-xl font-bold mb-6 text-cyan-600 dark:text-cyan-400 flex items-center gap-2">
                    {category.title === "Frontend" && <Code2 className="w-5 h-5" />}
                    {category.title === "Backend" && <Terminal className="w-5 h-5" />}
                    {category.title === "Database" && <Database className="w-5 h-5" />}
                    {category.title === "Tools & Platforms" && <Cpu className="w-5 h-5" />}
                    {category.title}
                  </h4>
                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${skill.color}`}
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== 3. WORK EXPERIENCE ==================== */}
          <div className="reveal-on-scroll mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Work Experience</h3>
              <p className="text-gray-600 dark:text-gray-400">My professional career path</p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {WORK_EXPERIENCE.map((exp, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-[#1a1a1a] p-5 md:p-8 rounded-xl shadow-md border-l-4 border-cyan-500 relative overflow-hidden"
                  style={{
                    boxShadow: isDarkMode ? "0 4px 20px rgba(168, 85, 247, 0.1)" : undefined
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-cyan-500" />
                        {exp.role}
                      </h4>
                      <p className="text-cyan-600 dark:text-cyan-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0 bg-white dark:bg-gray-800 px-3 py-1 rounded-full text-sm shadow-sm">
                      <Calendar className="w-4 h-4" />
                      {exp.duration}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-6">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>{resp}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-sm rounded-md border border-gray-200 dark:border-gray-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== 4. EDUCATION ==================== */}
          <div className="mb-12 md:mb-20">
            <div className="reveal-on-scroll text-center mb-8 md:mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Education</h3>
              <p className="text-gray-600 dark:text-gray-400">My academic background</p>
            </div>

            <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-2 gap-6">
              {EDUCATION.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-[#1a1a1a] p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-cyan-500"
                  style={{
                    boxShadow: isDarkMode ? "0 4px 20px rgba(236, 72, 153, 0.1)" : undefined
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                      {edu.duration}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                  <p className="text-cyan-600 dark:text-cyan-400 text-sm mb-2">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mb-4">{edu.location}</p>
                  {edu.cgpa && (
                    <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold rounded-md mb-4">
                      CGPA/Percentage: {edu.cgpa}
                    </div>
                  )}
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== 5. JOURNEY ==================== */}
          <div className="reveal-on-scroll mb-12 md:mb-20">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-400">Key milestones in my career</p>
            </div>

            <div className="relative border-l-2 border-gray-200 dark:border-gray-800 ml-3 md:ml-8 space-y-8 md:space-y-12">
              {JOURNEY_STEPS.map((step, index) => (
                <div key={index} className="relative pl-6 md:pl-12">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-[#0a0a0a]"></div>
                  <div className="bg-gray-50 dark:bg-[#1a1a1a] p-5 md:p-6 rounded-xl shadow-sm">
                    <span className="inline-block px-3 py-1 bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 text-xs font-bold rounded-full mb-2">
                      {step.year}
                    </span>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">{step.title}</h4>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">{step.company}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ==================== 6. CERTIFICATIONS ==================== */}
          <div className="reveal-on-scroll">
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Certifications</h3>
              <p className="text-gray-600 dark:text-gray-400">Professional certifications and achievements</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS?.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-[#1a1a1a] p-5 md:p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-800 hover:border-cyan-500 transition-all duration-300 group flex flex-col h-full"
                  style={{
                    boxShadow: isDarkMode ? "0 4px 20px rgba(34, 211, 238, 0.1)" : undefined
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-cyan-100 dark:bg-cyan-900/30 rounded-lg text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform overflow-hidden">
                      {cert.image ? (
                        <img src={cert.image} alt={cert.issuer} className="w-6 h-6 object-contain" />
                      ) : (
                        <Award className="w-6 h-6" />
                      )}
                    </div>
                    {(cert.date || cert.issued) && (
                      <span className="text-sm text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700">
                        {cert.date || cert.issued}
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1 group-hover:text-cyan-500 transition-colors">{cert.title}</h4>
                  <p className="text-cyan-600 dark:text-cyan-400 text-sm mb-3">{cert.issuer}</p>
                  {cert.description && <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{cert.description}</p>}
                  
                  {/* Skills/Tags if present */}
                  {(cert.skills || cert.tags) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {(cert.skills || cert.tags).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs rounded border border-gray-200 dark:border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {(cert.status || cert.url || cert.link) && (
                    <div className="pt-4 mt-auto border-t border-gray-200 dark:border-gray-700 flex flex-wrap items-center justify-between gap-3">
                      {cert.status && (
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                          {cert.status}
                        </span>
                      )}
                      {(cert.url || cert.link) && (
                        <a 
                          href={cert.url || cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-medium text-cyan-600 dark:text-cyan-400 hover:underline"
                        >
                          Verify <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DetailedAbout;
