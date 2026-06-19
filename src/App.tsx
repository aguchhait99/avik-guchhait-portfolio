import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CertificationsAndEdu from './components/CertificationsAndEdu';
import ResumeBuilder from './components/ResumeBuilder';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import { ArrowUp, Code2, Github, Linkedin, Mail } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { PERSONAL_INFO } from './data';

export default function App() {
  // Use scroll progress for dynamic top loading bar (satisfies "modern interactive minimalist")
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress as any, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScrollVisibility = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScrollVisibility);
    return () => window.removeEventListener('scroll', handleScrollVisibility);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div id="portfolio-app-root" className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors selection:bg-[#F27D26] selection:text-white relative">
      {/* Dynamic Scroll Top Loading Bar */}
      <motion.div
        id="scroll-tracker"
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F27D26] to-amber-500 origin-left z-[100]"
      />

      {/* Floating Elements / Accessories */}
      <CustomCursor />

      {/* Primary Sticky Header */}
      <Navbar />

      {/* Main Structural Core Sections */}
      <main className="relative">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <CertificationsAndEdu />
        <ResumeBuilder />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <footer id="app-footer" className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-900 transition-colors py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Identity */}
          <div className="flex items-center gap-2 text-slate-900 dark:text-white font-display font-semibold select-none">
            <div className="w-7 h-7 rounded-full bg-[#F27D26]/10 flex items-center justify-center border border-[#F27D26]/25">
              <Code2 className="w-4 h-4 text-[#F27D26]" />
            </div>
            <span className="text-sm">
              Avik Guchhait <span className="text-[#F27D26] font-bold">&copy; {new Date().getFullYear()}</span>
            </span>
          </div>

          {/* Prompt statement */}
          <p className="text-xs text-slate-400 dark:text-white/30 font-mono text-center md:text-left">
            Minimalist custom layout. Zero templates. Built with React & Tailwind.
          </p>

          {/* Social connections */}
          <div className="flex items-center gap-4">
            <a
              id="footer-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-[#F27D26] dark:text-white/40 dark:hover:text-[#F27D26] transition-colors"
              aria-label="GitHub Access Link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 hover:text-[#F27D26] dark:text-white/40 dark:hover:text-[#F27D26] transition-colors"
              aria-label="LinkedIn Profile Connection Link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-slate-500 hover:text-[#F27D26] dark:text-white/40 dark:hover:text-[#F27D26] transition-colors"
              aria-label="Direct dispatch Email link"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Action Scroll Top Arrow Button */}
      {showScrollTop && (
        <motion.button
          id="scroll-to-top-btn"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={handleScrollTop}
          className="fixed bottom-6 right-6 p-3 rounded-none bg-slate-900 border border-slate-750 dark:bg-[#F27D26] text-white dark:text-white shadow-lg hover:bg-[#F27D26] hover:text-white dark:hover:bg-[#F27D26]/90 transition-colors z-40 cursor-pointer focus:outline-none"
          whileHover={{ y: -3 }}
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-4.5 h-4.5" />
        </motion.button>
      )}
    </div>
  );
}
