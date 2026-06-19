import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'motion/react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'AI Resume', href: '#ai-resume' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background blend trigger
      setScrolled(window.scrollY > 30);

      // Simple active link detector
      const sections = NAV_ITEMS.map(item => item.href.substring(1));
      let current = 'home';
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust offset to trigger selection slightly before center of viewport
          if (rect.top <= 160) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-[#050505]/95 backdrop-blur-md shadow-sm border-b border-slate-200/40 dark:border-white/5 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo/Identity */}
        <a
          id="nav-logo"
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2 text-slate-900 dark:text-white font-display font-semibold text-lg md:text-xl tracking-tight group"
        >
          <div className="w-8 h-8 rounded-full bg-[#F27D26]/10 group-hover:bg-[#F27D26]/20 flex items-center justify-center transition-colors border border-[#F27D26]/30">
            <Code className="w-4 h-4 text-[#F27D26]" />
          </div>
          <span>
            AG<span className="text-[#F27D26] font-light">.design</span>
          </span>
        </a>

        {/* Desktop Route Connections */}
        <div className="hidden md:flex items-center gap-8">
          <ul id="desktop-nav-list" className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <li key={item.label}>
                  <a
                    id={`nav-link-${item.href.substring(1)}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="relative py-1 text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer outline-none text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="activeNavBackground"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F27D26] rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-px bg-slate-200 dark:bg-white/15" />

          {/* Socials & Theme */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a
              id="cta-resume-pill"
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-5 py-2 text-[10px] uppercase tracking-widest font-bold rounded-none bg-slate-950 dark:bg-white hover:bg-[#F27D26] dark:hover:bg-[#F27D26] text-white dark:text-black dark:hover:text-white transition-all group scale-100 hover:scale-102"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Mobile Control Indicators */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            id="mobile-menu-hamburger"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-backdrop"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/95 dark:bg-[#050505]/95 backdrop-blur-lg border-b border-slate-200 dark:border-white/10 shadow-md md:hidden z-40 overflow-hidden"
          >
            <ul id="mobile-nav-list" className="py-6 px-6 flex flex-col gap-5">
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <a
                      id={`mobile-nav-link-${item.href.substring(1)}`}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block py-1 text-xs uppercase tracking-wider font-semibold transition-colors ${
                        isActive
                          ? 'text-[#F27D26] pl-2 border-l-2 border-[#F27D26]'
                          : 'text-slate-700 hover:text-slate-950 dark:text-white/60 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                );
              })}
              <motion.li
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: NAV_ITEMS.length * 0.05 }}
                className="pt-4 border-t border-slate-100 dark:border-white/5"
              >
                <a
                  id="mobile-cta-resume-pill"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full py-3 text-center text-xs uppercase tracking-widest font-bold rounded-none bg-slate-950 dark:bg-white text-white dark:text-black hover:bg-[#F27D26] shadow-sm flex items-center justify-center gap-1 transition-all"
                >
                  Contact & Hire Me
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
