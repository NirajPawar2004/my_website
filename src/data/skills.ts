import type { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Data Analytics & SQL',
    categoryKey: 'analytics',
    skills: [
      {
        name: 'SQL (Advanced)',
        proficiency: 95,
        icon: 'Database',
        category: 'analytics',
        shortDesc: 'Joins, Aggregations, Window Functions, CTEs, Query Optimization, Subqueries, Views & Indexing.',
        badgeText: 'Expert'
      },
      {
        name: 'Python (Data Science Stack)',
        proficiency: 92,
        icon: 'Code2',
        category: 'analytics',
        shortDesc: 'Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn for ETL, EDA, and statistical modeling.',
        badgeText: 'Advanced'
      },
      {
        name: 'Microsoft Excel',
        proficiency: 94,
        icon: 'FileSpreadsheet',
        category: 'analytics',
        shortDesc: 'Advanced Formulas, VLOOKUP/XLOOKUP, Pivot Tables, Data Validation, Dynamic Charts & Dashboards.',
        badgeText: 'Expert'
      },
      {
        name: 'Exploratory Data Analysis (EDA)',
        proficiency: 95,
        icon: 'Search',
        category: 'analytics',
        shortDesc: 'Data Cleaning & Transformation, Outlier Detection, Correlation Analysis, Pattern Recognition.',
        badgeText: 'Master'
      }
    ]
  },
  {
    title: 'Business Intelligence & Visualization',
    categoryKey: 'visualization',
    skills: [
      {
        name: 'Power BI',
        proficiency: 92,
        icon: 'BarChart3',
        category: 'visualization',
        shortDesc: 'Interactive Executive Dashboards, Data Modeling, DAX Time Intelligence, Power Query M-code.',
        badgeText: 'Expert'
      },
      {
        name: 'DAX & Power Query',
        proficiency: 90,
        icon: 'Cpu',
        category: 'visualization',
        shortDesc: 'Calculated measures, columns, data transformation pipelines, and relational data modeling.',
        badgeText: 'Advanced'
      },
      {
        name: 'Data Visualization & Storytelling',
        proficiency: 92,
        icon: 'LineChart',
        category: 'visualization',
        shortDesc: 'Designing clear visual hierarchies, KPI callouts, trend analysis graphs, and stakeholder reports.',
        badgeText: 'Advanced'
      }
    ]
  },
  {
    title: 'Machine Learning & AI',
    categoryKey: 'ml',
    skills: [
      {
        name: 'Scikit-Learn & ML Algorithms',
        proficiency: 88,
        icon: 'BrainCircuit',
        category: 'ml',
        shortDesc: 'Supervised & Unsupervised Learning: Logistic Regression, Linear Regression, SVM, KNN, Clustering.',
        badgeText: 'Advanced'
      },
      {
        name: 'Feature Engineering & Selection',
        proficiency: 90,
        icon: 'Layers',
        category: 'ml',
        shortDesc: 'Data Preprocessing, Feature Scaling, Encoding, Outlier Handling, and Dimensionality Analysis.',
        badgeText: 'Advanced'
      },
      {
        name: 'Model Evaluation Metrics',
        proficiency: 92,
        icon: 'CheckCircle2',
        category: 'ml',
        shortDesc: 'Confusion Matrix, Accuracy, Precision, Recall, F1-Score, and Performance Diagnostics.',
        badgeText: 'Expert'
      }
    ]
  },
  {
    title: 'Tools & Automation Stack',
    categoryKey: 'tools',
    skills: [
      {
        name: 'Web Scraping (BeautifulSoup / Scrapy)',
        proficiency: 90,
        icon: 'Network',
        category: 'tools',
        shortDesc: 'Automated data extraction scripts using Scrapy, BeautifulSoup, and Requests APIs.',
        badgeText: 'Advanced'
      },
      {
        name: 'Git & GitHub',
        proficiency: 88,
        icon: 'GitBranch',
        category: 'tools',
        shortDesc: 'Version control, repository management, project documentation, and collaborative workflows.',
        badgeText: 'Advanced'
      },
      {
        name: 'Jupyter & VS Code',
        proficiency: 95,
        icon: 'Terminal',
        category: 'tools',
        shortDesc: 'Notebook debugging, data exploration environments, and script development.',
        badgeText: 'Expert'
      }
    ]
  }
];
