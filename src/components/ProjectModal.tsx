import React from 'react';
import { Modal } from './UI/Modal';
import type { Project } from '../types';
import { ExternalLink, Database, ShieldAlert, Target, Sparkles, CheckCircle2, Workflow } from 'lucide-react';
import { GithubIcon } from './UI/SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} maxWidth="4xl">
      <div className="space-y-8 text-left">
        {/* Header Metadata */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500/10 text-brand-600 dark:text-brand-400">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-slate-400">
              {project.date}
            </span>
            {project.clientRole && (
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 border-l border-slate-300 dark:border-slate-700 pl-2">
                Role: {project.clientRole}
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>

        {/* Project Image Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-72">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs font-medium text-slate-200 line-clamp-2">
              {project.shortDescription}
            </p>
          </div>
        </div>

        {/* Problem & Objective Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-red-500/5 dark:bg-red-500/10 border border-red-500/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4" />
              <span>The Problem</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
              <Target className="w-4 h-4" />
              <span>Objective & Goal</span>
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {project.objective}
            </p>
          </div>
        </div>

        {/* Dataset Specification */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            <Database className="w-4 h-4 text-brand-500" />
            <span>Dataset & Data Sources</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-mono">
            {project.datasetInfo}
          </p>
        </div>

        {/* 7-Step Workflow Process Timeline */}
        <div className="space-y-4">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Workflow className="w-4 h-4 text-brand-500" />
            <span>Step-by-Step Methodology Workflow</span>
          </h4>

          <div className="space-y-3">
            {project.processWorkflow.map((step, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 flex items-start gap-3"
              >
                <div className="w-7 h-7 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900 dark:text-white">
                    {step.step}: {step.title}
                  </h5>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KPI Metric Results */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Key Results & Metrics
          </h4>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.results.map((res, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-brand-500/5 dark:bg-brand-500/10 border border-brand-500/20 text-center"
              >
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono">
                  {res.label}
                </span>
                <span className="text-xl font-extrabold text-slate-900 dark:text-white font-mono my-1 block">
                  {res.value}
                </span>
                {res.change && (
                  <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                    {res.change}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Key Business Insights */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>Key Discoveries & Strategic Insights</span>
          </h4>
          <div className="space-y-2">
            {project.keyInsights.map((insight, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-xs text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{insight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Badges */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
