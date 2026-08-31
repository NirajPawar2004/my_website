import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/projects';
import type { Project, ProjectCategory } from '../types';
import { FeaturedProject } from './FeaturedProject';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles } from 'lucide-react';

const categories: ProjectCategory[] = [
  'All',
  'Data Analytics',
  'Power BI',
  'Machine Learning',
  'Python',
  'SQL',
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-12 md:py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Case Studies & Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Featured <span className="text-gradient">Data & AI Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Real-world case studies detailing business problems, dataset preprocessing, exploratory analysis, predictive ML models, and Power BI dashboards.
          </p>
        </div>

        {/* Featured Project Spotlight */}
        <FeaturedProject onOpenCaseStudy={(proj) => setSelectedProject(proj)} />

        {/* Category Filter Bar */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-brand-600 to-accent-indigo shadow-md shadow-brand-500/20'
                    : 'text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <span>{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={(proj) => setSelectedProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 text-slate-500 dark:text-slate-400">
            No projects found in this category.
          </div>
        )}
      </div>

      {/* Case Study Detailed Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
