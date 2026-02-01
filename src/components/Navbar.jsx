import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "Resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/about") {
      setActiveSection("about");
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    setActiveSection(sectionId);

    if (sectionId === "about") {
      navigate("/about");
      return;
    }

    if (sectionId === "skills") {
      navigate("/skills");
      return;
    }

    if (sectionId === "projects") {
      navigate("/projects");
      return;
    }

    if (sectionId === "Resume") {
      navigate("/resume");
      return;
    }

    if (sectionId === "contact") {
      navigate("/contact");
      return;
    }

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                 ${scrolled 
                   ? "bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-md shadow-lg" 
                   : "bg-transparent"}
                 `}
    >
      {/* Gradient Border Bottom */}
      {/* <div className={`absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-opacity duration-300 ${scrolled ? "opacity-100" : "opacity-0"}`} /> */}

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          layoutId="main-logo"
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          onClick={() => scrollToSection("home")}
          className="flex items-center gap-2 cursor-pointer
                     text-gray-900 dark:text-white"
        >
          <Code2 className="text-cyan-400" />
          <span className="font-semibold tracking-wide">
            anii-dev
          </span>
        </motion.div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8 
                        text-gray-700 dark:text-gray-300">
          {navItems.map((item, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(item.id)}
              className={`hover:text-cyan-400 transition border-b-2 ${activeSection === item.id ? "text-cyan-400 border-cyan-400" : "border-transparent"}`}
            >
              {item.label}
            </button>
          ))}

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-20 left-0 right-0 mx-4 rounded-2xl
                       bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md
                       border border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden"
          >
            {/* Gradient Top Border for Mobile Menu */}
            {/* <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" /> */}

            <div className="flex flex-col p-6 gap-6 
                            text-gray-900 dark:text-white">

              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}

              <button
                onClick={() => setIsMenuOpen(false)}
                className="self-end text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <X size={22} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
