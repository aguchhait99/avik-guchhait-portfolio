import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 20 },
    },
  };

  const bubbleVariants = {
    animate1: {
      y: [0, -20, 0],
      x: [0, 10, 0],
      scale: [1, 1.05, 1],
      transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
    },
    animate2: {
      y: [0, 25, 0],
      x: [0, -15, 0],
      scale: [1, 1.1, 1],
      transition: { duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-slate-50 dark:bg-[#050505] transition-colors"
    >
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-[#F27D26]/5 dark:bg-[#F27D26]/3 rounded-full filter blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/2 rounded-full filter blur-[120px] pointer-events-none" />
        {/* Decorative Grid Line System */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(242,125,38,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(242,125,38,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      </div>

      {/* Floating abstract physics blobs to look state-of-the-art */}
      <motion.div 
        variants={bubbleVariants}
        animate="animate1"
        className="absolute top-1/3 left-1/4 w-8 h-8 rounded-full border border-[#F27D26]/20 dark:border-[#F27D26]/10 hidden md:block"
      />
      <motion.div 
        variants={bubbleVariants}
        animate="animate2"
        className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-full border border-white/10 dark:border-white/5 hidden md:block"
      />

      {/* Hero Outer Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Main Pitch (Left) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8"
        >
          {/* Subtle Tag pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F27D26]/10 border border-[#F27D26]/20 w-fit self-start"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#F27D26]" />
            <span className="text-[10px] font-semibold text-[#F27D26] font-mono tracking-widest uppercase">
              Portfolio &mdash; Active Developer
            </span>
          </motion.div>

          {/* Heading */}
          <div className="space-y-2.5">
            <motion.p
              variants={itemVariants}
              className="text-xs font-semibold font-mono text-[#F27D26] tracking-widest uppercase"
            >
              Application & Next.js Developer
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-7xl lg:text-8xl font-sans font-light text-slate-900 dark:text-white tracking-tighter leading-[0.95] mb-4 uppercase"
            >
              AVIK<br />
              <span className="italic font-serif text-[#F27D26] font-normal lowercase tracking-normal">Guchhait</span>
            </motion.h1>
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-xl font-mono text-slate-500 dark:text-white/50 tracking-wider uppercase font-medium"
            >
              {PERSONAL_INFO.title}
            </motion.h2>
          </div>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 dark:text-white/60 max-w-xl font-light leading-relaxed"
          >
            {PERSONAL_INFO.subTitle}. Currently engineering high-performance admin dashboards, e-commerce suites, and modular monorepos at Webskitters.
          </motion.p>

          {/* Location details row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 items-center text-xs text-slate-500 dark:text-white/40"
          >
            <div className="flex items-center gap-1.5 font-mono">
              <MapPin className="w-4 h-4 text-[#F27D26]" />
              <span>{PERSONAL_INFO.location}</span>
            </div>
            <div className="hidden sm:block h-3.5 w-px bg-slate-300 dark:bg-white/10" />
            <div className="flex items-center gap-1.5 font-mono bg-slate-100 dark:bg-white/5 px-2.5 py-1 rounded border border-slate-200/50 dark:border-white/5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F27D26] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F27D26]"></span>
              </span>
              <span>Open to Consultations</span>
            </div>
          </motion.div>

          {/* Quick Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center pt-2"
          >
            <button
              id="hero-go-projects-btn"
              onClick={() => handleScrollTo('projects')}
              className="px-8 py-3.5 bg-slate-950 text-white dark:bg-white dark:text-black hover:bg-[#F27D26] dark:hover:bg-[#F27D26] dark:hover:text-white text-[12px] uppercase tracking-widest font-bold hover:shadow-lg transition-colors cursor-pointer"
            >
              Selected Projects
            </button>
            <button
              id="hero-go-contact-btn"
              onClick={() => handleScrollTo('contact')}
              className="px-8 py-3.5 border border-slate-350 dark:border-white/20 text-slate-800 dark:text-white text-[12px] uppercase tracking-widest font-bold hover:bg-slate-150/40 dark:hover:bg-white/5 transition-colors cursor-pointer"
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Icons row */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 pt-4"
          >
            <a
              id="hero-social-github"
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-white/60 hover:text-[#F27D26] dark:hover:text-[#F27D26] hover:border-[#F27D26] dark:hover:border-[#F27D26] transition-all shadow-sm"
              aria-label="GitHub Profile Link"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="hero-social-linkedin"
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-white/60 hover:text-[#F27D26] dark:hover:text-[#F27D26] hover:border-[#F27D26] dark:hover:border-[#F27D26] transition-all shadow-sm"
              aria-label="LinkedIn Profile Link"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="hero-social-email"
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-white/60 hover:text-[#F27D26] dark:hover:text-[#F27D26] hover:border-[#F27D26] dark:hover:border-[#F27D26] transition-all shadow-sm"
              aria-label="Mail Direct Connection Link"
            >
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Dynamic Abstract Card (Right Side of Hero) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:col-span-5 hidden lg:flex flex-col justify-center"
        >
          <div className="relative group p-1 w-full max-w-sm mx-auto">
            {/* Ambient behind neon glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F27D26] to-slate-800 rounded-3xl blur-md opacity-20 group-hover:opacity-35 transition duration-1000" />
            
            <div className="relative bg-white dark:bg-[#161616] border border-slate-200/80 dark:border-white/10 rounded-2xl p-7 shadow-xl text-left">
              {/* Terminal Title Bar */}
              <div className="flex items-center gap-1.5 mb-6 pb-4 border-b border-slate-100 dark:border-white/5">
                <div className="w-3 h-3 rounded-full bg-white/10" />
                <div className="w-3 h-3 rounded-full bg-white/20" />
                <div className="w-3 h-3 rounded-full bg-[#F27D26]/40" />
                <span className="ml-2 font-mono text-[10px] text-slate-400 dark:text-white/30 uppercase tracking-widest font-semibold">terminal.json</span>
              </div>

              {/* Mock code block representing developer persona */}
              <div className="space-y-4 font-mono text-xs leading-relaxed text-slate-700 dark:text-white/70">
                <div>
                  <span className="text-[#F27D26] font-medium">const</span>{' '}
                  <span className="text-blue-500 dark:text-white">engineer</span> = &#123;
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-white/40">name</span>:{' '}
                  <span className="text-[#F27D26]">"{PERSONAL_INFO.name}"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-white/40">core</span>:{' '}
                  <span className="text-[#F27D26]">"React / Next.js Suite"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-white/40">stack</span>: [
                  <span className="text-amber-500 dark:text-[#F27D26]/70">"Zustand"</span>,{' '}
                  <span className="text-amber-500 dark:text-[#F27D26]/70">"Turborepo"</span>
                  ],
                </div>
                <div className="pl-4">
                  <span className="text-slate-500 dark:text-white/40">experience</span>:{' '}
                  <span className="text-teal-600 dark:text-teal-400">"2+ Years"</span>
                </div>
                <div>&#125;;</div>

                {/* Metric list */}
                <div className="pt-4 border-t border-slate-150 dark:border-white/5 mt-4 flex items-center justify-between text-xs text-slate-450 dark:text-white/40">
                  <div>
                    <div className="font-bold text-slate-800 dark:text-white font-serif text-lg leading-tight">24+ Months</div>
                    <div className="text-[9px] uppercase tracking-wider">Active Agency Exp</div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-slate-800 dark:text-white font-serif text-lg leading-tight">4 Key</div>
                    <div className="text-[9px] uppercase tracking-wider">Major Systems</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bounce Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-slate-450 cursor-pointer hidden sm:block">
        <button
          onClick={() => handleScrollTo('about')}
          className="flex flex-col items-center gap-1 text-slate-400 hover:text-[#F27D26] transition-colors bg-transparent border-none cursor-pointer outline-none"
        >
          <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Scroll Down</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce mt-1 text-[#F27D26]" />
        </button>
      </div>
    </section>
  );
}
