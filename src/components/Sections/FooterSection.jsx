import React from "react";
import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO, TECH_STACK } from "../../utils/data";
import { useTheme } from "../../context/ThemeContext";

const FooterSection = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100/50 dark:bg-gray-900/50 backdrop-blur-md text-gray-900 dark:text-white pt-16 pb-8 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 text-2xl font-bold">
              <Code2 className="text-cyan-400" />
              <span>anii-dev</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Full Stack Developer specializing in creating performant, scalable web applications with modern technologies.
            </p>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white dark:bg-gray-800 p-2 rounded-lg hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-white transition-colors duration-200 shadow-sm"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Skills", path: "/#skills" },
                { name: "Projects", path: "/#projects" },
                { name: "Contact", path: "/#contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2 inline-block">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Full Stack Solutions",
                "API Development",
                "Database Design",
                "UI/UX Implementation",
              ].map((service, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-400 flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-300 dark:border-gray-700 pb-2 inline-block">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {TECH_STACK.slice(0, 12).map((tech, index) => (
                <span
                  key={index}
                  className="bg-white dark:bg-gray-800 px-3 py-1 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shadow-sm border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CONTACT_INFO.map((info, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-full mr-4 text-cyan-500 dark:text-cyan-400 shadow-sm">
                  <info.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{info.label}</p>
                  <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Aniket Hiraskar. All rights reserved.</p>
          <p className="mt-2">
            Designed and built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
