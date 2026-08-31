import React from 'react';
import { motion } from 'framer-motion';
import type { Project } from '../types';
import { ExternalLink, ArrowRight, BarChart2 } from 'lucide-react';
import { GithubIcon } from './UI/SocialIcons';

interface ProjectCardProps {
  project: Project;
  onOpenCaseStudy: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group border border-slate-200/80 dark:border-slate-800/80 text-left"
    >
      <div>
        {/* Card Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
          
          {/* Category Tag */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-950/80 text-brand-400 border border-brand-500/30 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* KPI Badge overlay */}
          {project.results[0] && (
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 backdrop-blur-md flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <BarChart2 className="w-3.5 h-3.5" />
              <span>{project.results[0].label}: {project.results[0].value}</span>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white line-clamp-1 group-hover:text-brand-500 transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
        <button
          onClick={() => onOpenCaseStudy(project)}
          className="flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
        >
          <span>Read Case Study</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="GitHub Repo"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
