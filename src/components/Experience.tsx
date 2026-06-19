import { useState } from 'react';
import { motion } from 'motion/react';
import { EXPERIENCE } from '../data';
import { Briefcase, Calendar, ChevronRight, School } from 'lucide-react';

export default function Experience() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-[#050505] transition-colors relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/10 w-96 h-96 bg-[#F27D26]/3 rounded-full filter blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-4 h-4 text-[#F27D26]" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#F27D26] uppercase">
              Career Milestones
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-900 dark:text-white tracking-tight">
            Professional <span className="italic text-[#F27D26]">Journey</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#F27D26] mt-4" />
        </div>

        {/* Dynamic Dual Tab layout (Modern Tabbed Deck) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Companies List (Left) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-1 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-none no-scrollbar border-b lg:border-b-0 lg:border-l border-slate-200 dark:border-white/5">
            {EXPERIENCE.map((exp, idx) => (
              <button
                key={exp.id}
                id={`exp-tab-${idx}`}
                onClick={() => setSelectedIdx(idx)}
                className={`px-5 py-4 text-left text-xs sm:text-sm font-semibold rounded-none transition-all border outline-none cursor-pointer flex items-center gap-3 whitespace-nowrap lg:whitespace-normal w-fit lg:w-full select-none ${
                  selectedIdx === idx
                    ? 'bg-white dark:bg-[#161616] border-[#F27D26]/40 text-[#F27D26] dark:text-white lg:border-l-4 lg:border-t-0 lg:border-r-0 lg:border-b-0 -ml-px font-bold shadow-sm'
                    : 'bg-transparent border-transparent text-slate-500 hover:text-slate-800 dark:text-white/40 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                }`}
              >
                <div className={`w-2 h-2 rounded-full transition-transform ${
                  selectedIdx === idx ? 'bg-[#F27D26]' : 'bg-slate-300 dark:bg-white/20'
                }`} />
                <div className="flex flex-col text-left">
                  <span className="leading-tight font-sans tracking-tight text-slate-800 dark:text-white">{exp.company.split(' Technology')[0]}</span>
                  <span className="text-[10px] font-mono text-slate-400 dark:text-white/30 mt-1 font-normal uppercase tracking-wider">{exp.duration.split(' (')[0]}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Job Details card (Right) */}
          <div className="lg:col-span-8">
            <motion.div
              id="active-experience-details"
              key={selectedIdx}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 rounded-none bg-white dark:bg-[#161616] border border-slate-200/50 dark:border-white/10 shadow-md relative group hover:border-[#F27D26]/20 transition-all duration-300"
            >
              {/* Floating metadata badge */}
              <div className="absolute top-6 right-6 hidden md:flex items-center gap-1.5 px-3 py-1 bg-slate-50 dark:bg-[#050505] border border-slate-150 dark:border-white/5 text-slate-500 dark:text-white/40 font-mono text-[9px] uppercase tracking-wider">
                <Calendar className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>{EXPERIENCE[selectedIdx].duration}</span>
              </div>

              {/* Title & Metadata */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#F27D26]">
                  {EXPERIENCE[selectedIdx].company}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-slate-900 dark:text-white leading-tight">
                  {EXPERIENCE[selectedIdx].role}
                </h3>
                {/* Mobile Calendar indicator */}
                <div className="flex md:hidden items-center gap-1.5 text-[9px] font-mono text-slate-405 uppercase tracking-wider pt-1">
                  <Calendar className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>{EXPERIENCE[selectedIdx].duration}</span>
                </div>
              </div>

              {/* Bullet Accomplishments panel */}
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-3"
              >
                {EXPERIENCE[selectedIdx].bullets.map((bullet, bIdx) => (
                  <motion.li
                    key={bIdx}
                    variants={itemVariants}
                    className="flex items-start gap-3.5 text-xs sm:text-sm text-slate-600 dark:text-white/70 leading-relaxed font-light"
                  >
                    <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full bg-[#F27D26]/10 text-[#F27D26] flex items-center justify-center">
                      <ChevronRight className="w-3 h-3" />
                    </div>
                    <span>{bullet}</span>
                  </motion.li>
                ))}
              </motion.ul>

            </motion.div>
          </div>

        </div>

        {/* Previous Experience Mini Layout Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 pt-12 border-t border-slate-200/50 dark:border-white/5">
          <div className="relative p-7 rounded-none bg-white dark:bg-[#161616] border border-slate-150 dark:border-white/10 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Previous Career Role</span>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white mt-1">Technical Team Leader / Floor Head</h4>
                <p className="text-[10px] font-semibold text-[#F27D26] font-mono tracking-wider uppercase mt-1">Royal Research (1.5 Years)</p>
              </div>
              <div className="p-2 rounded-none bg-[#F27D26]/5 text-[#F27D26]">
                <Briefcase className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-white/50 leading-relaxed font-light">
              Managed technical developer teams efficiently, leading cross-functional project execution and day-to-day coordination. Supervised quick delivery operations and pipeline workflows.
            </p>
          </div>

          <div className="relative p-7 rounded-none bg-white dark:bg-[#161616] border border-slate-150 dark:border-white/10 flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-slate-400">Academic Traineeship</span>
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white mt-1">Technical Team Leader</h4>
                <p className="text-[10px] font-semibold text-[#F27D26] font-mono tracking-wider uppercase mt-1">Student Life (5 Months)</p>
              </div>
              <div className="p-2 rounded-none bg-[#F27D26]/5 text-[#F27D26]">
                <School className="w-4 h-4" />
              </div>
            </div>
            <p className="text-xs text-slate-500 dark:text-white/50 leading-relaxed font-light">
              Managed developer activities, resource assignments, and technical pathways. Coordinated timely software releases and created strict quality compliance checklists.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
