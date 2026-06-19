import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Default to dark mode for a professional, sleek dev portfolio
    const stored = localStorage.getItem('portfolio-theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = stored === 'light' ? 'light' : 'dark';
    setTheme(initialTheme);
    
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <motion.button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      className="relative p-2.5 rounded-full bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700/80 border border-slate-200/50 dark:border-slate-700/40 text-slate-800 dark:text-slate-100 transition-colors shadow-sm outline-none cursor-pointer focus:ring-2 focus:ring-[#F27D26]"
      aria-label="Toggle structural theme"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0, scale: theme === 'dark' ? 0 : 1 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="w-5 h-5 text-amber-500" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : -180, scale: theme === 'dark' ? 1 : 0 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        <Moon className="w-5 h-5 text-indigo-400" />
      </motion.div>
    </motion.button>
  );
}
