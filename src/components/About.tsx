import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, BrainCircuit, PieChart, Briefcase, Award, Sparkles, MapPin, Mail, Phone, GraduationCap } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';

const pillarCards = [
  {
    icon: BarChart3,
    title: 'Data Analytics & EDA',
    badge: 'SQL & Python',
    description: 'Analyzing 100K+ row datasets, performing exploratory data analysis, data cleaning, and extracting actionable business intelligence.',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-500',
  },
  {
    icon: BrainCircuit,
    title: 'Machine Learning',
    badge: 'Predictive Modeling',
    description: 'Building machine learning classification models (Logistic Regression, KNN, SVM, XGBoost) achieving >80% precision on real-world data.',
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-500',
  },
  {
    icon: PieChart,
    title: 'Business Intelligence',
    badge: 'Power BI & DAX',
    description: 'Creating interactive executive Power BI dashboards, DAX measures, tracking KPIs, and improving business processes by 20%.',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-500',
  },
  {
    icon: Briefcase,
    title: 'Web Scraping & Automation',
    badge: 'Scrapy & Python',
    description: 'Automating competitive product data scraping workflows with Scrapy and Python to streamline ETL reporting pipelines.',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-500',
  },
];

const stats = [
  { label: 'Rows Analyzed', value: '100K+', icon: BarChart3 },
  { label: 'Process Improvement', value: '+20%', icon: Award },
  { label: 'MCA - AI CGPA', value: '8.65', icon: GraduationCap },
  { label: 'Model Precision', value: '>80%', icon: BrainCircuit },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Transforming Complex Data Into <span className="text-gradient">Actionable Insights</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Detail-oriented BCA graduate (CGPA 7.98) currently pursuing MCA in Artificial Intelligence (CGPA 8.65) at Parul University. Certified in Data Science & AI with hands-on experience analyzing large-scale datasets.
          </p>
        </div>

        {/* Profile Card & Bio Spotlight */}
        <div className="glass-card rounded-3xl p-8 sm:p-10 mb-16 border border-slate-200/80 dark:border-slate-800/80 bg-gradient-to-br from-brand-500/5 via-transparent to-accent-indigo/5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            {/* Left Avatar Photo */}
            <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center">
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-3xl overflow-hidden p-1.5 bg-gradient-to-br from-brand-500 via-accent-cyan to-accent-indigo shadow-2xl">
                <img
                  src={CONTACT_CONFIG.profilePhoto}
                  alt={CONTACT_CONFIG.name}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {CONTACT_CONFIG.name}
                </h3>
                <p className="text-xs font-mono text-brand-600 dark:text-brand-400">
                  {CONTACT_CONFIG.title}
                </p>
                <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-brand-500" />
                  <span>{CONTACT_CONFIG.location}</span>
                </div>
              </div>
            </div>

            {/* Right Bio Story */}
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Passionate Data Analyst & AI Engineer
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                I specialize in SQL, Python (Pandas, NumPy, Scikit-learn), Power BI, and Microsoft Excel. Having completed virtual data science internships and rigorous certifications, I build interactive dashboards, track KPIs, and extract actionable insights that optimize workflows and drive data-backed decision making.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Currently, I am developing intelligent solutions including a **Bank Customer Churn Prediction System** and an **AI-based Intelligent Notification Prioritization System**.
              </p>

              {/* Quick Info Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-white/70 dark:bg-slate-800/70">
                  <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                  <span className="truncate">{CONTACT_CONFIG.email}</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 p-2.5 rounded-xl bg-white/70 dark:bg-slate-800/70">
                  <Phone className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{CONTACT_CONFIG.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Layered Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 text-left">
          {pillarCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-br ${card.color} border`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                    {card.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl glass-card border border-slate-200/80 dark:border-slate-800/80 text-center"
              >
                <StatIcon className="w-5 h-5 text-brand-500 mx-auto mb-1.5" />
                <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
