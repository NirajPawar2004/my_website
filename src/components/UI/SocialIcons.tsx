import React from 'react';

export const GithubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const LinkedinIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const UpworkIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-4.407 0-5.834 3.064-6.425 4.978-.857-1.309-1.503-2.923-1.89-4.838H6.551v6.974c0 1.583-.71 2.805-2.023 2.805-1.313 0-2.023-1.222-2.023-2.805V5.18H0v6.974c0 3.396 2.115 5.51 4.528 5.51 2.414 0 4.529-2.114 4.529-5.51v-1.636c.404 1.597 1.135 3.31 2.186 4.887l-1.82 8.397h3.76l1.272-5.864c.942.548 1.99.851 3.106.851 3.568 0 6.471-2.903 6.471-6.471 0-3.567-2.903-6.47-6.471-6.47z" />
  </svg>
);

export const KaggleIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-2.227 2.118v4.471c0 .164-.055.248-.164.248H4.219c-.164 0-.248-.084-.248-.248V.248C3.971.084 4.055 0 4.219 0h3.125c.164 0 .248.084.248.248v14.161l6.984-7.5c.141-.164.305-.248.492-.248h3.326c.164 0 .254.049.27.147.016.1-.03.204-.138.312l-6.446 6.706 6.842 9.61c.092.129.117.234.076.323z" />
  </svg>
);
