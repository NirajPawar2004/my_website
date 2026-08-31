import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Send } from 'lucide-react';
import { HeroVisual } from './HeroVisual';
import { Toast } from './UI/Toast';
import { CONTACT_CONFIG } from '../config/contact';
import { GithubIcon, LinkedinIcon, UpworkIcon, KaggleIcon } from './UI/SocialIcons';
import confetti from 'canvas-confetti';

export const Hero: React.FC = () => {
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const handleDownloadResume = () => {
    triggerConfetti();
    setToastMessage('Resume download initiated! Opening Niraj Pawar official PDF Resume.');
    setShowToast(true);
    const link = document.createElement('a');
    link.href = CONTACT_CONFIG.resumeUrl;
    link.target = '_blank';
    link.download = 'Niraj_Pawar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative pt-24 pb-8 md:pt-28 md:pb-10 overflow-hidden">
      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        type="success"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Column: Headline & Intro */}
          <div className="lg:col-span-7 space-y-4 text-left">
            {/* Live Availability Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Freelance &amp; Full-time Roles</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                Turning Data Into <span className="text-gradient">Decisions</span>, Insights Into Impact.
              </h1>
            </motion.div>

            {/* Persona & Sub-headline Tags */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-brand-600 dark:text-brand-400 font-mono tracking-wide"
            >
              <span>Data Analyst</span>
              <span className="text-slate-400">•</span>
              <span>AI &amp; ML Enthusiast</span>
              <span className="text-slate-400">•</span>
              <span>Power BI Developer</span>
              <span className="text-slate-400">•</span>
              <span>Freelancer</span>
            </motion.div>

            {/* Value Proposition Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              I solve business problems using Data Analytics, Machine Learning, Power BI Dashboards, and Python Automation. I transform complex, messy datasets into clear strategic ROI for startups, businesses, and executive teams.
            </motion.p>

            {/* Action Buttons: Hire Me | View Projects | Resume */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-brand-600 to-accent-indigo hover:from-brand-500 hover:to-accent-indigo/90 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Hire Me</span>
              </button>

              <button
                onClick={() => scrollToSection('projects')}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all duration-300 hover:scale-105 active:scale-95 group"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={handleDownloadResume}
                className="flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 bg-slate-100 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/80 transition-all"
                title="Download Resume"
              >
                <Download className="w-4 h-4 text-brand-500" />
                <span>Resume</span>
              </button>
            </motion.div>

            {/* Social Links Bar */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-3 pt-3 border-t border-slate-200/60 dark:border-slate-800/60 text-xs"
            >
              <span className="font-semibold text-slate-500 dark:text-slate-400 font-mono">Connect:</span>
              <div className="flex items-center gap-2">
                {[
                  { href: CONTACT_CONFIG.github, icon: GithubIcon, label: 'GitHub' },
                  { href: CONTACT_CONFIG.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
                  { href: CONTACT_CONFIG.upwork, icon: UpworkIcon, label: 'Upwork' },
                  { href: CONTACT_CONFIG.kaggle, icon: KaggleIcon, label: 'Kaggle' },
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl text-slate-600 dark:text-slate-400 hover:text-brand-600 dark:hover:text-brand-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
                      aria-label={social.label}
                      title={social.label}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Skills & Tech Showcase Widget */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
};
