import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Users } from 'lucide-react';
import { CONTACT_CONFIG } from '../config/contact';
import { GithubIcon, LinkedinIcon, UpworkIcon, KaggleIcon } from './UI/SocialIcons';

export const Footer: React.FC = () => {
  const [uniqueVisitorCount, setUniqueVisitorCount] = useState<number | null>(0);

  useEffect(() => {
    const trackUniqueVisitor = async () => {
      try {
        const STORAGE_KEY = 'niraj_unique_visitor_v0';
        const hasVisited = localStorage.getItem(STORAGE_KEY);
        
        // CounterAPI unique namespace starting at 0
        const namespace = 'nirajpawar_portfolio_v0';
        const key = 'unique_count';
        
        let endpoint = `https://api.counterapi.dev/v1/${namespace}/${key}`;
        
        if (!hasVisited) {
          // Increment unique visitor count
          endpoint = `https://api.counterapi.dev/v1/${namespace}/${key}/up`;
          localStorage.setItem(STORAGE_KEY, new Date().toISOString());
        }
        
        const response = await fetch(endpoint);
        const data = await response.json();
        
        if (data && typeof data.count === 'number') {
          setUniqueVisitorCount(data.count);
        } else {
          setUniqueVisitorCount(hasVisited ? 1 : 0);
        }
      } catch (err) {
        setUniqueVisitorCount(0);
      }
    };

    trackUniqueVisitor();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800 text-left">
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative group">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-500 via-accent-cyan to-accent-indigo p-0.5 shadow-md">
                  <img
                    src="./profile.jpg"
                    alt="Niraj Pawar Profile"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-2 ring-slate-900 animate-pulse" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white flex items-center gap-1">
                Niraj <span className="text-gradient">Pawar</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Turning Data Into Decisions, Insights Into Impact. Specializing in Data Analytics, Machine Learning algorithms, Power BI Dashboards, and Python Automation scripts for client ROI.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Freelance Projects</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {['about', 'services', 'projects', 'skills', 'process', 'education', 'experience', 'certifications', 'contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className="capitalize text-slate-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social & Back to Top */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Connect &amp; Follow
            </h4>
            <div className="flex items-center gap-2">
              {[
                { href: CONTACT_CONFIG.github, icon: GithubIcon, label: 'GitHub' },
                { href: CONTACT_CONFIG.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
                { href: CONTACT_CONFIG.kaggle, icon: KaggleIcon, label: 'Kaggle' },
                { href: CONTACT_CONFIG.upwork, icon: UpworkIcon, label: 'Upwork' },
                { href: `mailto:${CONTACT_CONFIG.email}`, icon: Mail, label: 'Email' },
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors mt-2"
            >
              <ArrowUp className="w-4 h-4 text-brand-400" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Copyright & Unique Visitor Counter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Niraj Pawar. All rights reserved.</p>

          {/* Unique Visitor Count Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700/80 text-slate-300 shadow-sm">
            <Users className="w-3.5 h-3.5 text-brand-400" />
            <span>Unique Visitors:</span>
            <span className="font-bold text-white font-mono bg-brand-500/20 px-2 py-0.5 rounded-md text-brand-300 border border-brand-500/30">
              {uniqueVisitorCount !== null ? uniqueVisitorCount.toLocaleString() : '0'}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
