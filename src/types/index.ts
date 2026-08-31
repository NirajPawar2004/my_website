export type ProjectCategory = 'All' | 'Data Analytics' | 'Power BI' | 'Machine Learning' | 'Python' | 'SQL';

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface MetricResult {
  label: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface Project {
  id: string;
  title: string;
  category: 'Data Analytics' | 'Power BI' | 'Machine Learning' | 'Python' | 'SQL';
  shortDescription: string;
  image: string;
  featured?: boolean;
  problem: string;
  objective: string;
  datasetInfo: string;
  processWorkflow: WorkflowStep[];
  technologies: string[];
  results: MetricResult[];
  keyInsights: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudyDocUrl?: string;
  date: string;
  clientRole?: string;
}

export interface ServicePackage {
  id: string;
  title: string;
  category: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  technologies: string[];
  targetAudience: string;
  estimatedTimeline: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: 'analytics' | 'visualization' | 'ml' | 'tools';
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  proficiency: number;
  icon?: string;
  category: 'analytics' | 'visualization' | 'ml' | 'tools';
  shortDesc: string;
  badgeText: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  specialization: string;
  location: string;
  duration: string;
  grade?: string;
  coursework: string[];
  achievements: string[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  type: 'Freelance' | 'Internship' | 'Academic Project' | 'Certification' | 'Hackathon';
  duration: string;
  location?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  credentialLink?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  image: string;
  verifyUrl: string;
  skills: string[];
  description: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
  handle: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  projectType: string;
  budgetRange: string;
  message: string;
}
