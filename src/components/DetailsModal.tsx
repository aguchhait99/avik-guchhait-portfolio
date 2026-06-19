import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, Terminal } from 'lucide-react';
import { Project } from '../types';

interface DetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function DetailsModal({ project, onClose }: DetailsModalProps) {
  // Listen for Escape key pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div id="project-details-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop glassmorphism effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#161616] border border-slate-200 dark:border-white/10 rounded-none shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col"
          >
            {/* Aspect card top header */}
            <div className={`p-6 sm:p-8 bg-gradient-to-br from-[#F27D26]/5 to-transparent border-b border-slate-100 dark:border-white/5 relative`}>
              <button
                id="modal-close-btn"
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-none bg-slate-900/10 hover:bg-slate-900/20 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-white transition-all cursor-pointer focus:outline-none"
                aria-label="Close details popup modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2 mt-2">
                <span className="text-[9px] font-mono font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-none bg-[#F27D26]/10 border border-[#F27D26]/20 text-[#F27D26]">
                  {project.category.replace('-', ' ')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-950 dark:text-white tracking-tight pt-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-650 dark:text-white/60 font-light">
                  {project.subtitle}
                </p>
              </div>
            </div>

            {/* Scrollable specs summary panel */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-left">
              {/* Technology badges */}
              <div className="space-y-2">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Tech Stack Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-mono rounded-none bg-slate-100 dark:bg-white/5 border border-slate-200/50 dark:border-white/5 text-slate-850 dark:text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullets List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                  Core Accomplishments & Work Scope
                </h4>
                <ul className="space-y-3">
                  {project.points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-white/70 leading-relaxed font-sans"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#F27D26] flex-shrink-0 mt-0.5" />
                      <span className="font-light">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Code Snippet/Terminal Mock Mockup of metrics to show 'craftsmanship' */}
              <div className="p-4 rounded-none bg-slate-950 border border-white/5 font-mono text-[10px] text-slate-350 space-y-2 shadow-inner">
                <div className="flex items-center gap-1.5 text-slate-500 pb-1 border-b border-white/5">
                  <Terminal className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>project_runtime.sh</span>
                </div>
                <div><span className="text-[#F27D26]">$</span> analytics analyze --inspect --project="{project.id}"</div>
                <div className="text-slate-500">&gt;&gt; Analyzing bundle sizes and architecture specs...</div>
                <div className="text-teal-400">&gt;&gt; Performance Rank: A+ (Core Web Vitals Optimal)</div>
                <div className="text-[#F27D26]">&gt;&gt; Code Coverage: &gt;92% | Type Strictness: Active</div>
              </div>
            </div>

            {/* Bottom Controls */}
            <div className="p-6 border-t border-slate-100 dark:border-white/10 bg-slate-50/80 dark:bg-[#161616] flex items-center justify-between gap-4">
              <div className="text-[10px] text-slate-400 dark:text-white/30 uppercase tracking-wider font-mono">
                Avik Guchhait &copy; {new Date().getFullYear()}
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-xs uppercase tracking-wider font-mono text-slate-705 dark:text-white/60 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="#contact"
                  id="modal-cta-contact"
                  onClick={(e) => {
                    onClose();
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 text-[10px] uppercase tracking-widest font-bold rounded-none bg-slate-950 dark:bg-white text-white dark:text-black hover:bg-[#F27D26] dark:hover:bg-[#F27D26] dark:hover:text-white transition-all"
                >
                  Discuss Integration
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
