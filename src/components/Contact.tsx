import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Linkedin, Github, Send, Copy, Check, FileDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export default function Contact() {
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Next.js Contract Project',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setFormStatus('submitting');
    // Simulate API request dispatch
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: 'Next.js Contract Project', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-[#050505] transition-colors relative">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/4 left-1/10 w-96 h-96 bg-[#F27D26]/3 rounded-full filter blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Heading */}
        <div className="flex flex-col mb-16 text-left">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-4 h-4 text-[#F27D26]" />
            <span className="text-[10px] font-mono font-bold tracking-widest text-[#F27D26] uppercase">
              Connection Gate
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-slate-900 dark:text-white tracking-tight">
            Consultation & <span className="italic text-[#F27D26]">Interface</span>
          </h2>
          <div className="h-[2px] w-12 bg-[#F27D26] mt-4" />
        </div>

        {/* main layout grid splits contact details & messaging form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">

          {/* Contact Details (Left Side) - col 5 */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <p className="text-base text-slate-650 dark:text-white/60 leading-relaxed font-light">
                I am actively seeking contract developer opportunities, full-time senior engineering roles, or collaboration scope on complex web applications. Let's discuss your specs!
              </p>

              {/* Grid cards of details */}
              <div className="space-y-4">
                {/* Email card */}
                <div className="p-4 rounded-none bg-slate-50 dark:bg-[#161616] border border-slate-200/50 dark:border-white/10 flex items-center justify-between group transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-none bg-[#F27D26]/10 text-[#F27D26] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Direct Email</p>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-white hover:text-[#F27D26] transition-colors">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    id="copy-email-btn"
                    onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-none bg-white hover:bg-slate-100 dark:bg-[#050505] dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 transition-colors cursor-pointer"
                    aria-label="Copy email address"
                  >
                    {copiedText === 'email' ? <Check className="w-3.5 h-3.5 text-[#F27D26] animate-scale" /> : <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-white/40" />}
                  </button>
                </div>

                {/* Phone card */}
                <div className="p-4 rounded-none bg-slate-50 dark:bg-[#161616] border border-slate-200/50 dark:border-white/10 flex items-center justify-between group transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-none bg-[#F27D26]/10 text-[#F27D26] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Call / Telegram</p>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-white hover:text-[#F27D26] transition-colors">
                        +91 {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    id="copy-phone-btn"
                    onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-none bg-white hover:bg-slate-100 dark:bg-[#050505] dark:hover:bg-white/5 border border-slate-200 dark:border-white/5 transition-colors cursor-pointer"
                    aria-label="Copy phone number"
                  >
                    {copiedText === 'phone' ? <Check className="w-3.5 h-3.5 text-[#F27D26] animate-scale" /> : <Copy className="w-3.5 h-3.5 text-slate-500 dark:text-white/40" />}
                  </button>
                </div>

                {/* Location card */}
                <div className="p-4 rounded-none bg-slate-50 dark:bg-[#161616] border border-slate-200/50 dark:border-white/10 flex items-center gap-3 group transition-all duration-300">
                  <div className="w-10 h-10 rounded-none bg-[#F27D26]/10 text-[#F27D26] flex items-center justify-center">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[9px] font-mono uppercase tracking-widest text-slate-400">Current Station</p>
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-white">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Print Friendly summary trigger block */}
            <div className="p-6 rounded-none bg-slate-50 dark:bg-[#161616] border border-dashed border-slate-250 dark:border-white/20 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-slate-800 dark:text-white">Need a paper copy?</h4>
                <p className="text-[10px] text-slate-400 dark:text-white/30 tracking-wide mt-1">Print this portfolio directly for reference.</p>
              </div>
              <a
                id="print-portfolio-btn"
                href="/assets/Avik_Guchhait_Resume.pdf"
                download="Avik_Guchhait_Resume.pdf"
                className="px-4 py-2.5 text-[9px] font-mono font-bold uppercase tracking-widest rounded-none border border-slate-250 bg-white hover:bg-slate-100 text-slate-800 dark:border-white/5 dark:bg-[#050505] dark:text-white/70 dark:hover:bg-white/5 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileDown className="w-3.5 h-3.5 text-[#F27D26]" />
                <span>Print PDF</span>
              </a>
            </div>
          </div>

          {/* Connect interactive Form (Right Side) - col 7 */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-none bg-slate-50 dark:bg-[#161616] border border-slate-200/50 dark:border-white/10 shadow-md relative min-h-[400px] flex flex-col justify-between overflow-hidden">
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center p-8 space-y-4 my-auto h-full"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#F27D26]/10 text-[#F27D26] flex items-center justify-center">
                      <Send className="w-8 h-8" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-xl font-serif text-slate-900 dark:text-white">Message Dispatched!</h3>
                      <p className="text-xs text-slate-500 dark:text-white/50 max-w-sm font-light leading-relaxed">
                        Thank you for reaching out. Your message has been dispatched to Avik's digital desk. I will be in contact shortly!
                      </p>
                    </div>
                    <button
                      id="reset-form-btn"
                      onClick={() => setFormStatus('idle')}
                      className="px-5 py-2.5 text-[10px] uppercase font-bold tracking-widest rounded-none bg-slate-950 dark:bg-white hover:bg-[#F27D26] dark:hover:bg-[#F27D26] dark:hover:text-white text-white dark:text-black transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="input-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Header text */}
                    <div className="pb-2 border-b border-slate-200/50 dark:border-white/5">
                      <h3 className="text-[10px] font-bold font-mono uppercase tracking-widest text-slate-800 dark:text-white/60">
                        Dispatch direct encrypted ping
                      </h3>
                    </div>

                    {/* Form Layout Split */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-450 dark:text-white/40 font-bold uppercase tracking-widest" htmlFor="input-name">
                          Your Name *
                        </label>
                        <input
                          id="input-name"
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm rounded-none bg-white dark:bg-[#050505] border border-slate-200 dark:border-white/5 focus:outline-none focus:border-[#F27D26]/40 text-slate-800 dark:text-white transition-all font-light"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-[9px] font-mono text-slate-450 dark:text-white/40 font-bold uppercase tracking-widest" htmlFor="input-email">
                          Email Address *
                        </label>
                        <input
                          id="input-email"
                          type="email"
                          required
                          placeholder="client@enterprise.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 text-xs sm:text-sm rounded-none bg-white dark:bg-[#050505] border border-slate-200 dark:border-white/5 focus:outline-none focus:border-[#F27D26]/40 text-slate-800 dark:text-white transition-all font-light"
                        />
                      </div>
                    </div>

                    {/* Subject selects */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-450 dark:text-white/40 font-bold uppercase tracking-widest" htmlFor="input-subject">
                        Topic of Consultation
                      </label>
                      <select
                        id="input-subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm rounded-none bg-white dark:bg-[#050505] border border-slate-200 dark:border-white/5 focus:outline-none focus:border-[#F27D26]/40 text-slate-705 dark:text-white/60 transition-all font-light cursor-pointer"
                      >
                        <option value="Next.js Contract Project">Strategic Next.js Application Engineering</option>
                        <option value="React Administration Panel">Custom React Administration Portal / Dashboard</option>
                        <option value="Full-Time Frontend Role">Senior Frontend Engineer Hiring Scope</option>
                        <option value="Just connecting">General Technical Conversation</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono text-slate-450 dark:text-white/40 font-bold uppercase tracking-widest" htmlFor="input-message">
                        Message Body *
                      </label>
                      <textarea
                        id="input-message"
                        required
                        rows={4}
                        placeholder="Detail your parameters, project trajectories, or interview invitation scope..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 text-xs sm:text-sm rounded-none bg-white dark:bg-[#050505] border border-slate-200 dark:border-white/5 focus:outline-none focus:border-[#F27D26]/40 text-slate-800 dark:text-white transition-all font-light resize-none font-sans"
                      />
                    </div>

                    {/* Submit layout */}
                    <div className="pt-2">
                      <button
                        id="contact-form-submit-btn"
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full py-4 rounded-none bg-slate-950 dark:bg-white text-white dark:text-black hover:bg-[#F27D26] dark:hover:bg-[#F27D26] dark:hover:text-white font-bold text-xs tracking-widest uppercase shadow-md flex items-center justify-center gap-2 group cursor-pointer select-none transition-all disabled:opacity-50"
                      >
                        <span>{formStatus === 'submitting' ? 'Transmitting Data...' : 'Transmit Connection Message'}</span>
                        <Send className={`w-4 h-4 transition-transform ${formStatus === 'submitting' ? 'animate-pulse' : ''}`} />
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
