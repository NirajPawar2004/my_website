import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS_LIST } from '../data/certifications';
import type { Certification } from '../types';
import { Award, ExternalLink, ShieldCheck, Eye } from 'lucide-react';
import { Modal } from './UI/Modal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section id="certifications" className="py-12 md:py-16 relative bg-slate-100/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Industry Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Professional <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Verified certifications in Data Science, Artificial Intelligence, Machine Learning algorithms, Data Analysis, and Python.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {CERTIFICATIONS_LIST.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between group border border-slate-200/80 dark:border-slate-800/80"
            >
              <div>
                {/* Certificate Visual Image Preview */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-52 overflow-hidden bg-slate-900 cursor-pointer group/img"
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40 group-hover/img:bg-slate-950/20 transition-colors flex items-center justify-center">
                    <span className="px-3.5 py-2 rounded-full bg-slate-900/90 text-white text-xs font-semibold backdrop-blur-md border border-slate-700 flex items-center gap-1.5 opacity-90 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all">
                      <Eye className="w-4 h-4 text-brand-400" />
                      <span>Preview Certificate</span>
                    </span>
                  </div>

                  {/* Verified Credential Tag */}
                  <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-slate-900/90 text-brand-400 border border-brand-500/30 text-[10px] font-mono font-semibold flex items-center gap-1 backdrop-blur-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ID: {cert.credentialId}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                    <span className="font-semibold text-brand-600 dark:text-brand-400">{cert.issuer}</span>
                    <span>{cert.issueDate}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug line-clamp-2">
                    {cert.title}
                  </h3>

                  {/* Original Resume Format Tagline */}
                  <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-[11px] font-mono text-slate-600 dark:text-slate-300">
                    <span className="font-semibold text-slate-900 dark:text-white">{cert.title}</span>
                    <span className="text-slate-400"> | </span>
                    <span>{cert.issuer}</span>
                    <span className="text-slate-400"> | </span>
                    <span className="text-brand-500 font-bold">{cert.credentialId}</span>
                    <span className="text-slate-400"> | </span>
                    <span>{cert.issueDate}</span>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.slice(0, 4).map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between">
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-brand-600 dark:text-brand-400 hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Show Certificate</span>
                </button>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Image Lightbox Modal */}
      {selectedCert && (
        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title={selectedCert.title}
          maxWidth="4xl"
        >
          <div className="space-y-6 text-left">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200 dark:border-slate-800 text-xs">
              <span className="font-semibold text-brand-600 dark:text-brand-400">{selectedCert.issuer}</span>
              <span className="font-mono text-slate-500">Issued: {selectedCert.issueDate} • ID: {selectedCert.credentialId}</span>
            </div>

            {/* High Res Certificate Image */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl bg-slate-950">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto object-contain max-h-[70vh] mx-auto"
              />
            </div>

            {/* Description & Verification Link */}
            <div className="space-y-3">
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {selectedCert.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap gap-1.5">
                  {selectedCert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-600 hover:bg-brand-500 transition-colors shadow-md"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Verify Credential on GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};
