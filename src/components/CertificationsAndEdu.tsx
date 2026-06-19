import { Award, Milestone } from 'lucide-react';
import { CERTIFICATIONS } from '../data';
import { motion } from 'motion/react';

export default function CertificationsAndEdu() {
  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-[#050505] transition-colors relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-left">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-4 h-4 text-[#F27D26]" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#F27D26] uppercase">
              Verifications & Training
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-900 dark:text-white tracking-tight">
            Credentials & <span className="italic text-[#F27D26]">Insights</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#F27D26] mt-4" />
        </div>

        {/* Training Cards Deck */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              id={`cert-card-${cert.id}`}
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-7 rounded-none bg-white dark:bg-[#161616] border border-slate-150 dark:border-white/10 shadow-sm hover:shadow-md hover:border-[#F27D26]/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon Box */}
                <div className="w-9 h-9 rounded-none bg-[#F27D26]/10 flex items-center justify-center text-[#F27D26]">
                  <Award className="w-4 h-4" />
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white leading-snug group-hover:text-[#F27D26] transition-colors">
                    {cert.title}
                  </h4>
                  <p className="text-xs font-light text-slate-500 dark:text-white/40">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[9px] font-mono uppercase tracking-wider text-slate-400 dark:text-white/30">
                <div className="flex items-center gap-1">
                  <Milestone className="w-3.5 h-3.5 text-[#F27D26]" />
                  <span>Verified Credentials</span>
                </div>
                <span>India</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
