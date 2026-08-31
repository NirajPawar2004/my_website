import React from 'react';
import { PROJECTS } from '../data/projects';
import type { Project } from '../types';
import { Sparkles, CheckCircle, ArrowRight, ShieldAlert } from 'lucide-react';
import { GithubIcon } from './UI/SocialIcons';

interface FeaturedProjectProps {
  onOpenCaseStudy: (project: Project) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({ onOpenCaseStudy }) => {
  const featured = PROJECTS.find((p) => p.featured) || PROJECTS[0];

  return (
    <div className="mb-20">
      <div className="glass-card rounded-3xl p-8 lg:p-12 border border-brand-500/30 relative overflow-hidden bg-gradient-to-br from-brand-500/5 via-slate-900/40 to-accent-indigo/5">
        {/* Top Badge */}
        <div className="flex items-center gap-2 mb-6">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30 flex items-center gap-1.5 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Case Study</span>
          </span>
          <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
            {featured.category}
          </span>
        </div>

        {/* Split Screen Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Visual Mockup & Metrics */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl group">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              {/* Floating KPI overlay */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3">
                {featured.results.slice(0, 2).map((res, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700">
                    <span className="block text-[10px] text-slate-400 uppercase font-mono">{res.label}</span>
                    <span className="text-lg font-extrabold text-white font-mono">{res.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Problem, Solution & CTAs */}
          <div className="lg:col-span-6 space-y-5 text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
              {featured.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {featured.shortDescription}
            </p>

            {/* Problem & Solution Mini Card */}
            <div className="space-y-3 p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs">
              <div className="flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">Problem:</strong>
                  <span className="text-slate-600 dark:text-slate-300">{featured.problem}</span>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 dark:text-white block font-semibold">Solution & Result:</strong>
                  <span className="text-slate-600 dark:text-slate-300">{featured.objective}</span>
                </div>
              </div>
            </div>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2">
              {featured.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-full text-xs font-mono bg-brand-500/10 text-brand-700 dark:text-brand-300 border border-brand-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenCaseStudy(featured)}
                className="flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-brand-600 to-accent-indigo hover:from-brand-500 hover:to-accent-indigo/90 shadow-md shadow-brand-500/20 transition-all hover:scale-105"
              >
                <span>Read Interactive Case Study</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {featured.githubUrl && (
                <a
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-3 rounded-full text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
