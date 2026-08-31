import type { EducationItem } from '../types';

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: 'mca-ai-degree',
    degree: 'Master of Computer Applications (MCA) - Artificial Intelligence',
    institution: 'Parul University (PIET)',
    specialization: 'Artificial Intelligence & Machine Learning',
    location: 'Vadodara, Gujarat, India',
    duration: '2025 - 2027',
    grade: 'CGPA: 8.65 / 10',
    coursework: [
      'Machine Learning & Predictive Modeling',
      'Artificial Intelligence Algorithms',
      'Advanced Database Management Systems (SQL)',
      'Data Science & Exploratory Data Analysis',
      'Statistical Computing & Python Data Stack',
      'Deep Learning & Neural Networks'
    ],
    achievements: [
      'Developing AI-based Intelligent Notification Prioritization System.',
      'Maintaining top academic standing with 8.65 CGPA.',
      'Active developer of hands-on Machine Learning & BI project portfolios.'
    ]
  },
  {
    id: 'bca-degree',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Sandip University',
    specialization: 'Computer Science & Software Development',
    location: 'Nashik, Maharashtra, India',
    duration: '2022 - 2025',
    grade: 'CGPA: 7.98 / 10',
    coursework: [
      'Object-Oriented Programming (Python, Core Java)',
      'Relational Database Management Systems (RDBMS & SQL)',
      'Web Development & Web Scraping (BeautifulSoup/Scrapy)',
      'Applied Statistics & Data Visualization',
      'Software Engineering & Requirement Gathering'
    ],
    achievements: [
      'Served as Class Representative (BCA), acting as primary liaison between students and faculty.',
      'Coordinated class academic activities, student concerns, and collaborative learning events.',
      'Graduated with First Class distinction and 7.98 CGPA.'
    ]
  },
  {
    id: 'executive-data-science-course',
    degree: 'Executive Program in Data Science & AI',
    institution: 'Skill-Arbitrage & Skill India',
    specialization: 'Data Science, Machine Learning & Analytics',
    location: 'Online',
    duration: 'Oct 2023 - Present',
    grade: 'Merit Certificate - Data Science & AI Program',
    coursework: [
      'Python (Pandas, NumPy, Scikit-learn, Seaborn)',
      'Advanced SQL (CTEs, Window Functions, Indexing)',
      'Power BI (DAX, Power Query, Storytelling)',
      'Feature Engineering & Regression/Classification Models',
      'Web Scraping & Automated ETL Pipelines'
    ],
    achievements: [
      'Awarded Merit Certificate for outstanding performance in Data Science & AI Program.',
      'Built 100K+ row dataset predictive models and interactive Power BI executive dashboards.'
    ]
  }
];
