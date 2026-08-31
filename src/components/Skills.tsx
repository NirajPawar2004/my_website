import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/skills';
import { Code2, Table, Database, FileSpreadsheet, Search, BarChart3, Cpu, Layout, LineChart, BrainCircuit, TrendingUp, Zap, Layers, CheckCircle2, GitBranch, Terminal, Globe, Network, Sparkles } from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Table,
  Database,
  FileSpreadsheet,
  Search,
  BarChart3,
  Cpu,
  Layout,
  LineChart,
  BrainCircuit,
  TrendingUp,
  Zap,
  Layers,
  CheckCircle2,
  GitBranch,
  Terminal,
  Globe,
  Network,
};

export const Skills: React.FC = () => {
  const [activeCategoryKey, setActiveCategoryKey] = useState<string>('all');

  const allSkills = SKILL_CATEGORIES.flatMap((cat) => cat.skills);

  const displayedSkills = activeCategoryKey === 'all'
    ? allSkills
    : allSkills.filter((s) => s.category === activeCategoryKey);

  return (
    <section id="skills" className="py-8 md:py-10 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Skills &amp; <span className="text-gradient">Technology Stack</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
            Data Science, Business Intelligence, Machine Learning, SQL, and Python.
          </p>
        </div>

        {/* Compact Category Selector Pills */}
        <div className="flex items-center justify-center flex-wrap gap-1.5 mb-6">
          {[
            { key: 'all', label: 'All Skills' },
            { key: 'analytics', label: 'Data Analytics' },
            { key: 'visualization', label: 'Visualization & BI' },
            { key: 'ml', label: 'Machine Learning' },
            { key: 'tools', label: 'Tools & SQL' },
          ].map((cat) => {
            const isActive = activeCategoryKey === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategoryKey(cat.key)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-brand-600 shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-750'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Compact Skills Grid (6 Columns on Desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {displayedSkills.map((skill, idx) => {
            const IconComponent = (skill.icon && iconMap[skill.icon]) || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                className="glass-card glass-card-hover rounded-xl p-3 text-left relative overflow-hidden flex flex-col justify-between border border-slate-200/80 dark:border-slate-800/80 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="p-2 rounded-lg bg-brand-500/10 text-brand-500 group-hover:scale-105 transition-transform">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 border border-brand-500/20 truncate max-w-[70px]">
                      {skill.badgeText}
                    </span>
                  </div>

                  <h3 className="text-xs font-bold text-slate-900 dark:text-white truncate">
                    {skill.name}
                  </h3>
                </div>

                {/* Subtle Proficiency Bar */}
                <div className="mt-2 pt-1.5 border-t border-slate-200/60 dark:border-slate-800/60">
                  <div className="w-full h-1 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-brand-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
