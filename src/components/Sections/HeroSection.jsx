import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Code2, Terminal, Cloud, GitBranch, ExternalLink, Mail, Download } from 'lucide-react';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { useNavigate } from "react-router-dom";
import { SOCIAL_LINKS } from '../../utils/data';
import { useTheme } from '../../context/ThemeContext';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const githubUrl = SOCIAL_LINKS.find((link) => link.name === 'GitHub')?.url;
  const linkedinUrl = SOCIAL_LINKS.find((link) => link.name === 'LinkedIn')?.url;
  const mail = SOCIAL_LINKS.find((link) => link.name === 'Mail')?.url;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      // Name animation - character by character
      if (nameRef.current) {
        const chars = nameRef.current.querySelectorAll('.char');
        tl.fromTo(chars,
          { opacity: 0, y: 50, rotateX: -90 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.05, stagger: 0.03 },
          0.5
        );
      }
      
      // Title fade in
      tl.fromTo(titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.2
      );
      
      // CTA buttons pop in
      tl.fromTo(ctaRef.current?.children || [],
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 },
        1.5
      );
      
      // Floating elements
      tl.fromTo(floatingRef.current?.children || [],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
        1
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  // Mouse parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const name = "Aniket Hiraskar";

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Floating code snippets */}
      <div 
        ref={floatingRef}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        }}
      >
        {/* React Component */}
        <div className="absolute top-[15%] left-[5%] md:left-[10%] backdrop-blur-md bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 opacity-80 dark:opacity-60 hidden md:block shadow-lg dark:shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">App.jsx</span>
          </div>
          <pre className="text-xs text-cyan-600 dark:text-cyan-400 font-mono">
{`const App = () => {
  return <Hero />
}`}
          </pre>
        </div>
        
        {/* Terminal */}
        <div className="absolute top-[20%] right-[5%] md:right-[8%] backdrop-blur-md bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 opacity-80 dark:opacity-50 hidden md:block shadow-lg dark:shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <Terminal className="w-4 h-4 text-purple-600 dark:text-purple-500" />
            <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">terminal</span>
          </div>
          <pre className="text-xs text-purple-600 dark:text-purple-500 font-mono">
{`$ git commit -m "init"
$ npm run dev`}
          </pre>
        </div>
        
        {/* API Call */}
        <div className="absolute bottom-[25%] left-[5%] backdrop-blur-md bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 opacity-80 dark:opacity-50 hidden md:block shadow-lg dark:shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="w-4 h-4 text-pink-600 dark:text-pink-500" />
            <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">API</span>
          </div>
          <pre className="text-xs text-pink-600 dark:text-pink-500 font-mono">
{`GET /api/projects
200 OK`}
          </pre>
        </div>
        
        {/* Git */}
        <div className="absolute bottom-[20%] right-[10%] backdrop-blur-md bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-lg p-4 opacity-80 dark:opacity-60 hidden md:block shadow-lg dark:shadow-none">
          <div className="flex items-center gap-2 mb-2">
            <GitBranch className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-xs text-gray-600 dark:text-gray-400 font-mono">git</span>
          </div>
          <pre className="text-xs text-green-600 dark:text-green-400 font-mono">
{`main ← feature/ui
Merged`}
          </pre>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Greeting */}
        <p className="font-mono text-lg text-gray-500 dark:text-gray-400 mb-4 tracking-widest uppercase">
          Hi, I'm
        </p>
        
        {/* Name */}
        <h1 
          ref={nameRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          {name.split('').map((char, i) => (
            <span 
              key={i} 
              className={`char inline-block ${char === ' ' ? 'w-4' : ''}`}
              style={{
                color: i < 6 
                  ? (isDarkMode ? '#22d3ee' : '#0891b2') 
                  : (isDarkMode ? '#a855f7' : '#9333ea'),
                textShadow: i < 6 
                  ? (isDarkMode ? '0 0 30px rgba(34, 211, 238, 0.6)' : 'none')
                  : (isDarkMode ? '0 0 30px rgba(168, 85, 247, 0.6)' : 'none'),
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        {/* Title */}
        <p 
          ref={titleRef}
          className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8 font-light"
        >
          <span className="text-cyan-500 font-semibold">Freelancer</span>
          <span className="text-gray-400 mx-3">|</span>
          <span className="text-purple-500 font-semibold">FullStack Developer</span>
          <span className="text-gray-400 mx-3">|</span>
          <span className="text-pink-500 font-semibold">Cloud Learner</span>
        </p>
        
        {/* CTA Buttons */}
        <div ref={ctaRef} className="flex flex-wrap gap-4 justify-center mb-12">
          <button 
            onClick={() => navigate('/projects')}
            className="group relative px-8 py-4 bg-cyan-500/10 border border-cyan-500/50 text-cyan-600 dark:text-cyan-400 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-cyan-500 hover:text-white hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View Projects
              <ExternalLink className="w-4 h-4" />
            </span>
          </button>
          
          <button 
            onClick={() => navigate('/contact')}
            className="group relative px-8 py-4 bg-purple-500/10 border border-purple-500/50 text-purple-600 dark:text-purple-400 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Contact Me
              <Mail className="w-4 h-4" />
            </span>
          </button>
          
          <a 
            href="/Aniket_Hiraskar_FSD.pdf"
            download="Aniket_Hiraskar_FSD.pdf"
            className="group relative px-8 py-4 bg-pink-500/10 border border-pink-500/50 text-pink-600 dark:text-pink-400 font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:bg-pink-500 hover:text-white hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Download Resume
              <Download className="w-4 h-4" />
            </span>
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex gap-6 justify-center">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-cyan-500 transition-colors transform hover:scale-110">
            <FiGithub size={24} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-500 transition-colors transform hover:scale-110">
            <FiLinkedin size={24} />
          </a>
          <a href={mail} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-pink-500 transition-colors transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('about')}
          className="text-gray-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
