import React from 'react';
import { Modal } from './UI/Modal';
import type { ServicePackage } from '../types';
import { CheckCircle, Clock, Target, ArrowRight, Sparkles } from 'lucide-react';

interface ServiceModalProps {
  service: ServicePackage | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onRequestService,
}) => {
  if (!service) return null;

  const handleRequestClick = () => {
    onClose();
    onRequestService(service.title);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={service.title} maxWidth="3xl">
      <div className="space-y-6 text-left">
        {/* Category & Timeline Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-200 dark:border-slate-800">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/10 text-brand-600 dark:text-brand-400">
            {service.category}
          </span>
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-brand-500" />
            <span>Timeline: {service.estimatedTimeline}</span>
          </div>
        </div>

        {/* Full Description */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Overview
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            {service.fullDescription}
          </p>
        </div>

        {/* Target Audience */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-white">
            <Target className="w-4 h-4 text-brand-500" />
            <span>Ideal For</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            {service.targetAudience}
          </p>
        </div>

        {/* Deliverables List */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-500" />
            <span>Key Deliverables</span>
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-xl bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300"
              >
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Stack Badges */}
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            Technologies & Tools
          </h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
          <button
            onClick={handleRequestClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-brand-600 to-accent-indigo hover:from-brand-500 hover:to-accent-indigo/90 shadow-md shadow-brand-500/20 transition-all duration-200"
          >
            <span>Request This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Modal>
  );
};
