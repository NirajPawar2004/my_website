import type { ServicePackage } from '../types';

export const SERVICES: ServicePackage[] = [
  {
    id: 'data-analytics',
    title: 'Data Analysis & EDA',
    category: 'Analytics',
    icon: 'BarChart3',
    shortDescription: 'Transform raw, messy datasets into structured, actionable business intelligence and exploratory insights.',
    fullDescription: 'I assist businesses and teams in unearthing hidden trends, anomaly patterns, and commercial opportunities within complex datasets. Using advanced Python (Pandas/NumPy), SQL queries, and rigorous exploratory data analysis (EDA), I turn raw numbers into clear strategic narratives.',
    deliverables: [
      'Comprehensive EDA Reports (Jupyter Notebook / PDF)',
      'Data Cleaning & Anomaly Imputation Pipelines',
      'Statistical Correlation & Trend Diagnostics',
      'Executive Summary & Key Findings Slide Deck',
      'Cleaned & Standardized SQL / CSV Export Files'
    ],
    technologies: ['Python', 'SQL', 'Pandas', 'NumPy', 'SciPy', 'Excel (PowerQuery)', 'Jupyter'],
    targetAudience: 'Startups, E-commerce Sellers, SaaS Teams, and Business Managers seeking data clarity.',
    estimatedTimeline: '3 - 7 Business Days'
  },
  {
    id: 'power-bi-bi',
    title: 'Business Intelligence & Power BI',
    category: 'Business Intelligence',
    icon: 'PieChart',
    shortDescription: 'Interactive, executive-ready Power BI dashboards that track critical KPIs and drive confident decision-making.',
    fullDescription: 'Stop scrolling through flat spreadsheets. I design sleek, interactive Power BI & Tableau dashboards with custom DAX calculations, relational data modeling (Star Schema), automated scheduled refresh setups, and role-based views for management and operational teams.',
    deliverables: [
      'Interactive Power BI / Tableau (.pbix) Dashboards',
      'Star-Schema Data Modeling & Relationship Optimization',
      'Custom DAX Measures, KPIs & Time-Intelligence Calculations',
      'Automated Data Refresh & Gateway Setup Guide',
      'Mobile-Optimized Dashboard Views'
    ],
    technologies: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'Tableau', 'Excel DAX'],
    targetAudience: 'Executives, Operations Managers, Sales Directors needing real-time KPI visibility.',
    estimatedTimeline: '5 - 10 Business Days'
  },
  {
    id: 'machine-learning',
    title: 'Machine Learning & AI Modeling',
    category: 'Machine Learning',
    icon: 'BrainCircuit',
    shortDescription: 'Custom predictive ML models that forecast churn, estimate metrics, and automate classification tasks.',
    fullDescription: 'Leverage predictive machine learning models tailored to your specific business problem. From customer churn classification and credit risk scoring to demand forecasting using XGBoost and Scikit-Learn, I build, evaluate, and fine-tune models designed for real-world deployment.',
    deliverables: [
      'Trained Machine Learning Model (.pkl / .joblib)',
      'Feature Engineering & Model Performance Evaluation Report',
      'Confusion Matrix, ROC-AUC, F1-Score & Precision Diagnostics',
      'Streamlit / Gradio Interactive Web Demo Application',
      'REST API Wrapper (FastAPI / Flask) for model deployment'
    ],
    technologies: ['Scikit-Learn', 'XGBoost', 'LightGBM', 'Python', 'Streamlit', 'FastAPI', 'Matplotlib/Seaborn'],
    targetAudience: 'Fintech, Retailers, Product Managers, and Companies needing predictive intelligence.',
    estimatedTimeline: '7 - 14 Business Days'
  },
  {
    id: 'data-automation',
    title: 'Data Automation & Python Scripts',
    category: 'Automation',
    icon: 'Zap',
    shortDescription: 'Automate tedious Excel workflows, web scraping, data ingestion, and scheduled reporting pipelines.',
    fullDescription: 'Save dozens of manual hours every week. I engineer lightweight, reliable Python scripts and scheduled workflows that extract data from APIs or web pages, clean raw files, generate formatted Excel/PDF reports, and deliver automated notifications.',
    deliverables: [
      'Custom Automated Python ETL / Scraping Scripts',
      'Automated Excel VBA / OpenPyXL Report Generators',
      'API Integration & Webhook Data Ingestion Pipelines',
      'Scheduled Task Setup (Windows Task Scheduler / Cron)',
      'Clean Code Documentation & Deployment Guide'
    ],
    technologies: ['Python', 'OpenPyXL', 'BeautifulSoup', 'Selenium', 'Requests API', 'Pandas', 'Cron/VBA'],
    targetAudience: 'Small Businesses, Marketing Agencies, and Operations Teams trapped in manual data entry.',
    estimatedTimeline: '2 - 5 Business Days'
  }
];
