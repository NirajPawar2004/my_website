import type { ProcessStep } from '../types';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: 'Understand & Scope',
    subtitle: 'Clarifying Requirements',
    description: 'We align on business goals, target KPIs, dataset availability, project deliverables, and concrete success metrics.',
    icon: 'Target',
    deliverables: ['Project Brief & KPI Alignment', 'Data Access Verification', 'Timeline Commitment']
  },
  {
    number: 2,
    title: 'Analyze & Clean',
    subtitle: 'Wrangling & Discovery',
    description: 'I inspect raw datasets, clean anomalies, handle missing values, run exploratory statistical analysis, and validate data integrity.',
    icon: 'Search',
    deliverables: ['Cleaned Dataset Exports', 'EDA Insights Summary', 'Data Modeling Schema']
  },
  {
    number: 3,
    title: 'Build & Model',
    subtitle: 'Engineering Solutions',
    description: 'I construct custom DAX measures for Power BI dashboards, train machine learning algorithms, or write automated Python scripts.',
    icon: 'Cpu',
    deliverables: ['Draft Power BI Dashboard / ML Model', 'Feature Engineering Report', 'Working Script / Code']
  },
  {
    number: 4,
    title: 'Validate & Refine',
    subtitle: 'Rigorous QA & Audit',
    description: 'We review initial outputs together. I perform metric verification, user feedback adjustments, stress testing, and visual polishing.',
    icon: 'ShieldCheck',
    deliverables: ['Model Performance Diagnostics', 'User Feedback Revisions', 'Executive Presentation Polish']
  },
  {
    number: 5,
    title: 'Deliver & Empower',
    subtitle: 'Handover & Support',
    description: 'I deliver final project files (.pbix, Python scripts, documentation), setup automated refresh schedules, and provide post-delivery guidance.',
    icon: 'Rocket',
    deliverables: ['Final Production Deliverables', 'Clean Documentation & Video Walkthrough', 'Ongoing Support Window']
  }
];
