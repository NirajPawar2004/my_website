import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../data/services';
import type { ServicePackage } from '../types';
import { ServiceModal } from './ServiceModal';
import { BarChart3, PieChart, BrainCircuit, Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

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
            Client-Ready <span className="text-gradient">Services & Solutions</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Tailored analytics, BI dashboards, predictive machine learning models, and automated data scripts designed to solve business problems and deliver clear ROI.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
