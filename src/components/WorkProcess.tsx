import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS_STEPS } from '../data/process';
import { Target, Search, Cpu, ShieldCheck, Rocket, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Target,
  Search,
  Cpu,
  ShieldCheck,
  Rocket,
};

export const WorkProcess: React.FC = () => {
  return (
    <section id="process" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology & Quality</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            How I Work: <span className="text-gradient">5-Step Process</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            A structured, client-focused workflow designed to ensure clear project scoping, rigorous data validation, and seamless project delivery.
          </p>
        </div>

        {/* 5-Step Horizontal / Vertical Timeline Pipeline */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const IconComponent = iconMap[step.icon] || Target;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-6 flex flex-col justify-between text-left relative overflow-hidden group"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-extrabold font-mono text-brand-500/40 group-hover:text-brand-500 transition-colors">
                      0{step.number}
                    </span>
                    <div className="p-3 rounded-2xl bg-brand-500/10 text-brand-500 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <span className="text-[10px] font-mono text-brand-600 dark:text-brand-400 uppercase tracking-wider font-semibold block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 space-y-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    Deliverables:
                  </span>
                  {step.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3 h-3 text-emerald-500 shrink-0" />
                      <span className="truncate">{del}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
