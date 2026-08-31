import type { SocialLink } from '../types';
import { CONTACT_CONFIG } from '../config/contact';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    url: CONTACT_CONFIG.github,
    icon: 'Github',
    handle: '@NirajPawar2004',
  },
  {
    name: 'LinkedIn',
    url: CONTACT_CONFIG.linkedin,
    icon: 'Linkedin',
    handle: 'in/nirajpawar2004',
  },
  {
    name: 'Kaggle',
    url: CONTACT_CONFIG.kaggle,
    icon: 'Kaggle',
    handle: '@nirajpawar2004',
  },
  {
    name: 'Upwork',
    url: CONTACT_CONFIG.upwork,
    icon: 'Upwork',
    handle: 'Niraj Pawar (Freelancer)',
  },
  {
    name: 'Email',
    url: `mailto:${CONTACT_CONFIG.email}`,
    icon: 'Mail',
    handle: CONTACT_CONFIG.email,
  },
];
