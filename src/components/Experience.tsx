import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE_LIST } from '../data/experience';
import { Calendar, CheckCircle2, Building2 } from 'lucide-react';

export const Experience: React.FC = () => {
  const workExperience = EXPERIENCE_LIST.filter((exp) => exp.type === 'Internship' || exp.type === 'Freelance');

  return (
    <section id="experience" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Internship & <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Hands-on data analytics, SQL query optimization, automated web scraping pipelines, and Power BI dashboards.
          </p>
        </div>

        {/* Experience Timeline Grid */}
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          {workExperience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative border border-slate-200/80 dark:border-slate-800/80"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                      {exp.type}
                    </span>
                    {exp.location && (
                      <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
                        • {exp.location}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-brand-500" />
                    <span>{exp.duration}</span>
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  Key Accomplishments & Deliverables:
                </span>
                <div className="space-y-1.5">
                  {exp.highlights.map((high, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-200/60 dark:border-slate-800/60">
                {exp.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
