import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { Layers, ArrowUpRight, Search, CheckCircle2, ChevronRight } from 'lucide-react';
import DetailsModal from './DetailsModal';

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'admin-panels', label: 'Admin Panels' },
  { id: 'web-apps', label: 'Web Applications' },
  { id: 'e-commerce', label: 'E-Commerce' },
];

export default function Projects() {
  const [filter, setFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#050505] transition-colors relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 right-1/10 w-96 h-96 bg-[#F27D26]/3 rounded-full filter blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full text-left">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Layers className="w-4 h-4 text-[#F27D26]" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#F27D26] uppercase">
              Proven Deliveries
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-900 dark:text-white tracking-tight">
            Key Professional <span className="italic text-[#F27D26]">Highlights</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#F27D26] mt-4" />
        </div>

        {/* Filters Tabs Row */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-100 dark:border-white/5 mb-10">
          {FILTERS.map((tab) => (
            <button
              key={tab.id}
              id={`filter-tab-${tab.id}`}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all border outline-none cursor-pointer ${
                filter === tab.id
                  ? 'bg-slate-950 border-slate-950 text-white dark:bg-white dark:border-white dark:text-black font-bold'
                  : 'bg-stone-50 border-slate-200 dark:bg-[#161616] dark:border-white/10 text-slate-650 hover:text-slate-900 dark:text-white/40 dark:hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Bento Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                id={`project-card-${project.id}`}
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-none bg-slate-50 dark:bg-[#161616] border border-slate-200/50 dark:border-white/10 p-7 shadow-md hover:shadow-xl transition-all hover:border-[#F27D26]/20 duration-300"
              >
                {/* Visual gradient backdrop based on project color tag */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F27D26]/5 to-transparent rounded-bl-full pointer-events-none blur-xl opacity-40 group-hover:opacity-65 transition-opacity" />

                <div className="space-y-4">
                  {/* Category tag */}
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-none bg-slate-200/50 dark:bg-white/5 text-slate-700 dark:text-white/60 border border-slate-300/40 dark:border-white/5">
                      {project.category.replace('-', ' ')}
                    </span>
                    <span className="text-[9px] font-mono text-slate-400 dark:text-white/30 uppercase tracking-widest">
                      Active Integration
                    </span>
                  </div>

                  {/* Title & info */}
                  <div className="space-y-1">
                    <h3 className="text-xl font-serif text-slate-900 dark:text-white tracking-tight group-hover:text-[#F27D26] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-light text-slate-550 dark:text-white/40">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Main specs items preview */}
                  <ul className="space-y-2 pt-2">
                    {project.points.slice(0, 2).map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-white/70 leading-relaxed font-light">
                        <CheckCircle2 className="w-4 h-4 text-[#F27D26] flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{pt}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.slice(0, 4).map((t) => (
                      <span key={t} className="px-2 py-0.5 text-[9px] bg-white dark:bg-[#050505] border border-slate-200 dark:border-white/5 text-slate-500 dark:text-white/50 tracking-wider font-mono">
                        {t}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-2 py-0.5 text-[9px] bg-slate-100 dark:bg-white/5 text-slate-400 dark:text-white/30 font-mono">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Learn more anchor action button */}
                <div className="pt-6 mt-5 border-t border-slate-150 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-400 dark:text-white/30 tracking-widest uppercase">
                    Click to view details
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-none bg-slate-950 dark:bg-white text-white dark:text-black hover:bg-[#F27D26] dark:hover:bg-[#F27D26] dark:hover:text-white text-[10px] uppercase font-bold tracking-widest transition-colors cursor-pointer"
                  >
                    View Stack
                  </button>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Big Details Overlay Modal */}
        <DetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
}
