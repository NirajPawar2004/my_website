import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_LIST } from '../data/education';
import { GraduationCap, Calendar, Award, BookOpen, Sparkles } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-12 md:py-16 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Education & <span className="text-gradient">Specialization</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Academic qualifications in Computer Applications, Artificial Intelligence, and Data Analytics.
          </p>
        </div>

        {/* Timeline List */}
        <div className="max-w-4xl mx-auto space-y-8 text-left">
          {EDUCATION_LIST.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative border border-slate-200/80 dark:border-slate-800/80"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-brand-600 dark:text-brand-400 font-semibold text-xs uppercase font-mono">
                    <GraduationCap className="w-4 h-4" />
                    <span>{edu.specialization}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
                    {edu.institution}
                  </p>
                </div>

                <div className="space-y-1 text-right">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/20">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{edu.duration}</span>
                  </span>
                  {edu.grade && (
                    <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 block mt-1">
                      {edu.grade}
                    </div>
                  )}
                </div>
              </div>

              {/* Coursework Tags */}
              <div className="space-y-2 my-4">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-brand-500" />
                  <span>Key Coursework</span>
                </span>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements List */}
              {edu.achievements.length > 0 && (
                <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/60 space-y-1.5">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>Academic Achievements</span>
                  </span>
                  <ul className="space-y-1">
                    {edu.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <span className="text-brand-500 font-bold">•</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
