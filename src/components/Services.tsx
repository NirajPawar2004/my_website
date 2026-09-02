import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/services';
import type { ServicePackage } from '../types';
import { ServiceModal } from './ServiceModal';
import { BarChart3, PieChart, BrainCircuit, Zap, CheckCircle2, ArrowRight, Sparkles, Star, Quote, ExternalLink, ShieldCheck, UserCheck } from 'lucide-react';
import { UpworkIcon } from './UI/SocialIcons';
import { CONTACT_CONFIG } from '../config/contact';

const iconMap: Record<string, React.ElementType> = {
  BarChart3,
  PieChart,
  BrainCircuit,
  Zap,
};

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServicePackage | null>(null);

  const handleRequestService = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const serviceDropdown = document.getElementById('projectTypeSelect') as HTMLSelectElement;
      if (serviceDropdown) {
        serviceDropdown.value = serviceTitle;
      }
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="services" className="py-12 md:py-16 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Freelance Marketplace</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Client-Ready <span className="text-gradient">Services &amp; Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Tailored analytics, BI dashboards, predictive machine learning models, and automated data scripts designed to solve business problems and deliver clear ROI.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {SERVICES.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || BarChart3;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group text-left"
              >
                <div>
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-500/20 via-accent-cyan/20 to-accent-indigo/20 border border-brand-500/30 flex items-center justify-center text-brand-500 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Deliverables Preview */}
                  <div className="space-y-2 mb-6">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                      Included Deliverables:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.slice(0, 3).map((item, dIdx) => (
                        <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                    Est. {service.estimatedTimeline}
                  </span>
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 group-hover:translate-x-1 transition-all"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section Title for Upwork Client Reviews */}
        <div className="mt-14 mb-8 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#14a800]/10 text-[#14a800] text-xs font-semibold uppercase tracking-wider mb-2">
            <UpworkIcon className="w-3.5 h-3.5" />
            <span>Verified Upwork Client Reviews</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Client Endorsements &amp; <span className="text-gradient">Real Testimonials</span>
          </h3>
        </div>

        {/* Verified Upwork Client Reviews 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
          {/* Card 1: Power BI Arbitrage Dashboard Job Review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-3xl p-6 sm:p-7 border border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 via-slate-900/10 to-brand-500/5 relative overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-[#14a800]/15 text-[#14a800] border border-[#14a800]/30 flex items-center justify-center shrink-0">
                    <UpworkIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 inline-flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-emerald-500" />
                      <span>Verified Completed Job</span>
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      Power BI Dashboard – Used Car Arbitrage
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white font-mono">5.0</span>
                </div>
              </div>

              {/* Quote */}
              <div className="py-5 relative">
                <Quote className="w-7 h-7 text-emerald-500/20 absolute -top-1 -left-1 pointer-events-none" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed pl-3 border-l-2 border-emerald-500">
                  "Niraj delivered a high-quality dashboard that perfectly fits my needs. The logic for detecting 'hidden gems' and tracking price history is spot on. Fast delivery, smart suggestions, and great communication. 10/10!"
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['Reliable', 'Committed to Quality', 'Solution Oriented', 'Clear Communicator', 'Detail Oriented'].map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono text-[11px]">Feb 2026 • Upwork Client</span>
              <a
                href={CONTACT_CONFIG.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-[#14a800] hover:underline"
              >
                <span>View on Upwork</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Client Heena B. Verified Endorsement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-3xl p-6 sm:p-7 border border-brand-500/30 bg-gradient-to-br from-brand-500/5 via-slate-900/10 to-accent-indigo/5 relative overflow-hidden flex flex-col justify-between shadow-xl"
          >
            <div>
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200/80 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-500/15 text-brand-500 border border-brand-500/30 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-brand-500/15 text-brand-600 dark:text-brand-400 border border-brand-500/30 inline-flex items-center gap-1">
                      <ShieldCheck className="w-3 h-3 text-brand-500" />
                      <span>Verified Client Endorsement</span>
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                      Heena B. <span className="text-xs font-normal text-slate-400 font-mono">(Dec 2025)</span>
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 bg-white/80 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-extrabold text-slate-900 dark:text-white font-mono">5.0</span>
                </div>
              </div>

              {/* Quote */}
              <div className="py-5 relative">
                <Quote className="w-7 h-7 text-brand-500/20 absolute -top-1 -left-1 pointer-events-none" />
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 italic leading-relaxed pl-3 border-l-2 border-brand-500">
                  "Niraj is a highly skilled and reliable professional. He has delivered excellent work on our Power BI, translation, and LinkedIn research projects. He understands requirements clearly, works with strong technical and practical insight, and consistently meets deadlines. I highly recommend him and look forward to collaborating again."
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {['Power BI Projects', 'LinkedIn Research', 'Technical & Practical Insight', 'Deadline Adherence', 'Highly Recommended'].map((badge, bIdx) => (
                  <span
                    key={bIdx}
                    className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-brand-500/10 text-brand-700 dark:text-brand-300 border border-brand-500/20 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-brand-500" />
                    <span>{badge}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono text-[11px]">Dec 2025 • Verified Client</span>
              <a
                href={CONTACT_CONFIG.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-brand-600 dark:text-brand-400 hover:underline"
              >
                <span>View on Upwork</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detailed Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        onRequestService={handleRequestService}
      />
    </section>
  );
};
