import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Cpu, BarChart3, Sparkles, CheckCircle2 } from 'lucide-react';

export const HeroVisual: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'data' | 'ml' | 'bi'>('all');

  const skillGroups = [
    {
      category: 'SQL & Database Querying',
      icon: Database,
      color: 'text-brand-500',
      bg: 'bg-brand-500/10 border-brand-500/20',
      skills: ['SQL', 'JOINS', 'CTEs', 'Window Functions', 'Subqueries', 'Query Optimization']
    },
    {
      category: 'Python Data Science Stack',
      icon: Code,
      color: 'text-emerald-500',
      bg: 'bg-emerald-500/10 border-emerald-500/20',
      skills: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Seaborn', 'Matplotlib', 'Scrapy']
    },
    {
      category: 'BI & Advanced Excel',
      icon: BarChart3,
      color: 'text-accent-purple',
      bg: 'bg-accent-purple/10 border-accent-purple/20',
      skills: ['Power BI', 'DAX Measures', 'Power Query ETL', 'Pivot Tables', 'VLOOKUP', 'KPI Dashboards']
    },
    {
      category: 'Machine Learning Algorithms',
      icon: Cpu,
      color: 'text-amber-500',
      bg: 'bg-amber-500/10 border-amber-500/20',
      skills: ['Logistic Regression', 'KNN', 'SVM', 'Decision Trees', 'Feature Engineering', 'EDA']
    }
  ];

  const filteredGroups = activeCategory === 'all' 
    ? skillGroups 
    : skillGroups.filter(g => {
        if (activeCategory === 'data') return g.category.includes('SQL') || g.category.includes('Python');
        if (activeCategory === 'ml') return g.category.includes('Machine Learning');
        if (activeCategory === 'bi') return g.category.includes('BI');
        return true;
      });

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Background Ambient Glows */}
      <div className="absolute -top-8 -left-8 w-56 h-56 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-8 -right-8 w-56 h-56 bg-accent-purple/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Glass Widget Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-card rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-xl relative z-10 overflow-hidden"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/60 dark:border-slate-800/60">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-1 text-[11px] font-mono font-semibold text-brand-600 dark:text-brand-400 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-500" />
              <span>Skills &amp; Tech Keywords</span>
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-0.5 bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg text-[10px] font-medium">
            {[
              { id: 'all', label: 'All' },
              { id: 'data', label: 'SQL/Py' },
              { id: 'bi', label: 'BI' },
              { id: 'ml', label: 'ML' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  activeCategory === tab.id
                    ? 'bg-white dark:bg-slate-700 text-brand-600 dark:text-brand-300 font-bold shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups List */}
        <div className="space-y-2 text-left">
          {filteredGroups.map((group, idx) => {
            const GroupIcon = group.icon;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="p-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-850/80 border border-slate-200/60 dark:border-slate-800/60 space-y-1.5"
              >
                <div className="flex items-center gap-1.5">
                  <div className={`p-1 rounded-md ${group.bg}`}>
                    <GroupIcon className={`w-3.5 h-3.5 ${group.color}`} />
                  </div>
                  <h4 className="text-[11px] font-bold text-slate-900 dark:text-white">
                    {group.category}
                  </h4>
                </div>

                {/* Skill Tag Pills */}
                <div className="flex flex-wrap gap-1">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/80 shadow-2xs flex items-center gap-1"
                    >
                      <CheckCircle2 className={`w-2.5 h-2.5 ${group.color}`} />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Status Line */}
        <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Verified Core Stack</span>
          </span>
          <span className="text-brand-500 font-semibold">25+ Tech Keywords</span>
        </div>
      </motion.div>
    </div>
  );
};
