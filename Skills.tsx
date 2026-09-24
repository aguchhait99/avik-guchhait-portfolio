import { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO, SKILL_CATEGORIES, OTHER_SKILLS } from '../data';
import { Terminal, Award, CheckCircle2, User, Cpu } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="py-24 bg-white dark:bg-[#050505] transition-colors relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-2/3 w-80 h-80 bg-[#F27D26]/3 rounded-full filter blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-4 h-4 text-[#F27D26]" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#F27D26] uppercase">
              Profile & Technologies
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-900 dark:text-white tracking-tight">
            Summary & <span className="italic text-[#F27D26]">Capabilities</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#F27D26] mt-4" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Bio Brief Card & Education (Left Side) - Column Span 5 */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={cardVariants}
              className="p-8 rounded-none bg-slate-50 dark:bg-[#161616] border border-slate-200/50 dark:border-white/10 shadow-md relative group hover:border-[#F27D26]/30 transition-all duration-300"
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-slate-950 dark:bg-white text-white dark:text-black font-mono text-[9px] tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                <User className="w-3 h-3 text-[#F27D26]" />
                Who Am I
              </div>
              <p className="text-slate-600 dark:text-white/70 text-sm sm:text-base leading-relaxed font-light pt-2">
                {PERSONAL_INFO.brief}
              </p>
            </motion.div>

            {/* Education Summary Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={cardVariants}
              className="p-8 rounded-none bg-slate-50 dark:bg-[#161616] border border-slate-200/50 dark:border-white/10 shadow-md relative group hover:border-[#F27D26]/30 transition-all duration-300"
            >
              <div className="absolute -top-3 left-6 px-3 py-1 bg-slate-950 dark:bg-white text-white dark:text-black font-mono text-[9px] tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                <Award className="w-3 h-3 text-[#F27D26]" />
                Formal Education
              </div>
              <div className="pt-2 space-y-4">
                <div>
                  <h4 className="text-base font-semibold text-slate-800 dark:text-white font-serif">
                    {PERSONAL_INFO.education.degree}
                  </h4>
                  <p className="text-[10px] font-semibold text-[#F27D26] font-mono uppercase tracking-wider mt-1">
                    {PERSONAL_INFO.education.spec}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-650 dark:text-white/60">
                    {PERSONAL_INFO.education.school}
                  </p>
                  <p className="text-[10px] font-mono text-slate-400 dark:text-white/30 tracking-wider">
                    Graduation Class of {PERSONAL_INFO.education.year}
                  </p>
                </div>
                <div className="flex flex-col gap-2 pt-3 border-t border-slate-200/50 dark:border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono font-medium text-slate-700 dark:text-white/60">
                    <span>Performance Matrix (DGPA)</span>
                    <span className="text-[#F27D26] font-bold">{PERSONAL_INFO.education.score}</span>
                  </div>
                  <p className="text-[10px] text-slate-500 dark:text-white/40 leading-relaxed italic">
                    {PERSONAL_INFO.education.secondary}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Skills Canvas (Right Side) - Column Span 7 */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Navigational Category Selector */}
            <div className="flex flex-wrap gap-2 pb-1 border-b border-slate-100 dark:border-white/5 overflow-visible">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.title}
                  id={`skill-cat-tab-${idx}`}
                  onClick={() => setActiveTab(idx)}
                  className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all border outline-none cursor-pointer ${
                    activeTab === idx
                      ? 'bg-slate-900 border-slate-900 text-white dark:bg-white dark:border-white dark:text-slate-950 shadow-sm'
                      : 'bg-[#090909]/5 border-slate-200 dark:bg-[#161616] dark:border-white/10 text-slate-600 hover:text-slate-900 dark:text-white/40 dark:hover:text-white'
                  }`}
                >
                  {cat.title.split(' & ')[0]} {/* Shorter label for mobile aesthetic */}
                </button>
              ))}
            </div>

            {/* Categorized Skills bars card */}
            <motion.div
              layout
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="p-8 rounded-none bg-slate-50 dark:bg-[#161616] border border-slate-200/50 dark:border-white/10 shadow-md space-y-6"
            >
              <div className="flex items-center gap-2 pb-3 mb-2 border-b border-slate-200/55 dark:border-white/5">
                <Terminal className="w-4 h-4 text-[#F27D26]" />
                <span className="text-xs font-semibold font-mono text-slate-800 dark:text-white/80 uppercase tracking-wider">
                  {SKILL_CATEGORIES[activeTab].title}
                </span>
              </div>

              {/* Progress metrics bars */}
              <div className="space-y-5">
                {SKILL_CATEGORIES[activeTab].skills.map((skill, sIdx) => {
                  const percentWidth = `${skill.level * 20}%`;
                  // Represent mapping string descriptors
                  const labels = ['Novice', 'Intermediate', 'Competent', 'Highly Proficient', 'Expert'];
                  const desc = labels[Math.round(skill.level) - 1];

                  return (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-800 dark:text-white/90 font-sans">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] uppercase font-semibold text-[#F27D26] tracking-wider">
                          {desc}
                        </span>
                      </div>
                      <div className="relative h-[6px] w-full bg-slate-200 dark:bg-white/5 rounded-none overflow-hidden">
                        {/* Progress filling with standard layout projection */}
                        <motion.div
                          id={`skill-bar-${skill.name.toLowerCase().replace(/\s/g, '-')}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: percentWidth }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.1, ease: 'easeOut' }}
                          className="absolute h-full left-0 bg-[#F27D26] rounded-none"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Other Professional Disciplines Inline Tags Row */}
            <div className="space-y-3.5 mt-2">
              <h5 className="text-[10px] font-semibold font-mono text-slate-500 dark:text-white/40 uppercase tracking-[0.2em] pl-1">
                Other core disciplines
              </h5>
              <div className="flex flex-wrap gap-2 pl-0.5">
                {OTHER_SKILLS.map((item, idx) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.04 }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-white/70 rounded-none text-xs font-light border border-slate-200/50 dark:border-white/5 hover:border-[#F27D26]/40 hover:text-[#F27D26] dark:hover:text-white transition-all duration-300"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#F27D26]" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
