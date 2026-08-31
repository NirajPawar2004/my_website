import type { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'bank-customer-churn-prediction',
    title: 'Bank Customer Churn Prediction Model',
    category: 'Machine Learning',
    shortDescription: 'Machine learning classification model predicting bank customer churn based on credit score, age, balance, and activity with >80% test accuracy.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80',
    featured: true,
    problem: 'Retail banks suffer significant revenue losses when customers quietly close accounts. Identifying at-risk customers manually before they churn is inefficient and prone to missing key behavioral signals.',
    objective: 'Develop an end-to-end Machine Learning classification model to predict customer churn probability and identify key risk drivers using credit score, geography, gender, age, tenure, balance, and account activity.',
    datasetInfo: 'Bank Customer Churn Dataset featuring customer demographics, credit ratings, account balances, product holdings, active membership status, and historical churn outcomes.',
    processWorkflow: [
      { step: '1. Data Collection', title: 'Data Ingestion & Verification', description: 'Loaded customer account records into Python Pandas environment and inspected feature distributions.' },
      { step: '2. Data Preprocessing', title: 'Data Cleaning & Encoding', description: 'Handled missing values, scaled numerical features (CreditScore, Balance, Salary), and target-encoded categorical variables (Geography, Gender).' },
      { step: '3. Feature Selection', title: 'Correlation & Feature Importance', description: 'Analyzed feature correlations highlighting Age, Balance, and Active Membership as primary churn indicators.' },
      { step: '4. Model Engineering', title: 'Logistic Regression Classifier', description: 'Trained binary Logistic Regression classifier and tuned classification thresholds.' },
      { step: '5. Model Evaluation', title: 'Performance Metrics Audit', description: 'Evaluated model using Confusion Matrix, Accuracy (>80%), Precision, Recall, and F1-Score.' },
      { step: '6. Insights & Actions', title: 'Retention Strategy', description: 'Identified that inactive members aged 40-50 with high balance variance require targeted retention campaigns.' }
    ],
    technologies: ['Python', 'Logistic Regression', 'Scikit-Learn', 'Pandas', 'NumPy', 'Data Analysis', 'Excel'],
    results: [
      { label: 'Test Set Accuracy', value: '>80%', change: 'Validated Model', trend: 'up' },
      { label: 'Primary Metrics', value: 'Precision/Recall', change: 'Evaluated F1-Score', trend: 'up' },
      { label: 'Algorithm Used', value: 'Logistic Reg.', change: 'Binary Classification', trend: 'up' }
    ],
    keyInsights: [
      'Customer age and active membership status are the two strongest predictors of bank churn probability.',
      'Active membership reduced churn likelihood significantly, making engagement programs the highest ROI retention strategy.',
      'Customers with multi-product holdings require customized cross-selling incentives to prevent account attrition.'
    ],
    githubUrl: 'https://github.com/NirajPawar2004/Bank-Customer-Churn-Model',
    date: '2025-01',
    clientRole: 'Data Analyst & ML Developer'
  },
  {
    id: 'ecommerce-sales-analysis-powerbi',
    title: 'E-Commerce Sales Analysis Dashboard',
    category: 'Power BI',
    shortDescription: 'Original Power BI executive dashboard analyzing 5,000+ sales records, profit trends, category performance, and customer payment preferences.',
    image: './projects/ecommerce-powerbi.jpg',
    featured: false,
    problem: 'An e-commerce business lacked centralized visibility into product profit margins, monthly sales fluctuations, and payment mode preferences across multiple product categories.',
    objective: 'Transform 5,000+ sales transaction records into a sleek, interactive Power BI dashboard highlighting profit trends, category performance, top 5 revenue products, and drill-down reports.',
    datasetInfo: 'E-commerce sales database containing 5,000+ transactions with Order ID, Order Date, Customer Name, State, Category, Sub-Category, Quantity, Profit, and Payment Mode.',
    processWorkflow: [
      { step: '1. ETL & Transformation', title: 'Power Query Processing', description: 'Cleaned raw transaction dumps, corrected data types, handled nulls, and created custom date dimension tables.' },
      { step: '2. Data Modeling', title: 'Relational Modeling', description: 'Structured clean data relationships and built calculated DAX columns and measures.' },
      { step: '3. DAX Formulas', title: 'KPI & Trend Measures', description: 'Wrote DAX measures for Total Revenue, Total Profit, Quantity Sold, YoY Growth, and Top Product Rank.' },
      { step: '4. Visual Dashboard Design', title: 'UI Layout & Formatting', description: 'Designed clear executive dashboard layout with interactive slicers, profit trends, and category breakdowns.' },
      { step: '5. Analysis & Reporting', title: 'Insight Extraction', description: 'Identified top 5 revenue products and evaluated payment method distribution for operational optimization.' }
    ],
    technologies: ['Power BI', 'DAX', 'Power Query', 'Data Cleaning', 'Data Visualization', 'Statistical Analysis'],
    results: [
      { label: 'Sales Records Analyzed', value: '5,000+', change: 'Multi-category data', trend: 'up' },
      { label: 'Top Products Identified', value: 'Top 5', change: 'By Net Revenue', trend: 'up' },
      { label: 'Report Features', value: 'Drill-Downs', change: 'Interactive Filters', trend: 'up' }
    ],
    keyInsights: [
      'Top 5 products accounted for over 38% of total e-commerce revenue across all categories.',
      'Electronic and Furniture sub-categories yielded highest gross profit margins despite lower order quantities.',
      'Digital payment modes (UPI/Cards) represented over 65% of customer checkout preferences.'
    ],
    githubUrl: 'https://github.com/NirajPawar2004/Ecommerce-Sales-Analysis-using-MS-PowerBI',
    date: '2024-12',
    clientRole: 'Power BI & BI Developer'
  },
  {
    id: 'superstore-sales-excel-analysis',
    title: 'Superstore Sales Data Analysis Using Excel',
    category: 'Data Analytics',
    shortDescription: 'Original Excel analytics dashboard utilizing Pivot Tables, VLOOKUP/XLOOKUP, and dynamic KPI charts to evaluate regional retail profitability.',
    image: './projects/superstore-excel.jpg',
    featured: false,
    problem: 'Retail management needed clear visibility into regional sales distribution, shipping mode profitability, and product discount impacts across multi-state store locations.',
    objective: 'Clean raw superstore transaction logs and construct dynamic Excel dashboards with Pivot Tables, conditional formatting, and KPI trend charts.',
    datasetInfo: 'Retail superstore transaction log containing Order IDs, Customer Segments, Regions, Sales, Profits, Discounts, and Shipping Modes.',
    processWorkflow: [
      { step: '1. Data Cleaning', title: 'Data Validation & Duplicates', description: 'Cleaned raw text fields, validated numeric entries, and established formula lookups.' },
      { step: '2. Pivot Table Modeling', title: 'Multi-Dimensional Summaries', description: 'Constructed pivot tables summarizing regional sales, discount impacts, and customer segment profits.' },
      { step: '3. Visual Dashboard', title: 'Dynamic Excel Charts', description: 'Designed interactive Excel dashboard with slicers, line charts, and bar graphs.' }
    ],
    technologies: ['Microsoft Excel', 'Pivot Tables', 'VLOOKUP / XLOOKUP', 'Data Validation', 'Charts', 'EDA'],
    results: [
      { label: 'Tool Used', value: 'Excel', change: 'Advanced Analytics', trend: 'up' },
      { label: 'Features Built', value: 'Pivot & Slicers', change: 'Dynamic Reports', trend: 'up' },
      { label: 'Target', value: 'Retail KPIs', change: 'Profitability', trend: 'up' }
    ],
    keyInsights: [
      'Discounts higher than 20% severely eroded profit margins without generating proportional sales volume increase.',
      'Corporate customer segment produced 45% of net profits despite representing 30% of total order count.'
    ],
    githubUrl: 'https://github.com/NirajPawar2004/Superstore-Sales-Data-Analysis-Using-Excel',
    date: '2024-09',
    clientRole: 'Data Analyst'
  },
  {
    id: 'social-media-interaction-sql',
    title: 'Social Media Interaction Analysis | SQL',
    category: 'SQL',
    shortDescription: 'Advanced SQL analytical case study querying social media engagement, post activity, hashtag popularity, and comment trends.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    problem: 'Social media platforms generate massive volumes of user interaction data. Uncovering high-engagement content categories and active user cohorts requires complex database queries.',
    objective: 'Write optimized SQL queries using JOINs, GROUP BY, Subqueries, CTEs, and Aggregate Functions to analyze user activity, post engagement, hashtag popularity, and comment trends.',
    datasetInfo: 'Relational social media database featuring Users, Posts, Comments, Likes, Hashtags, and Post_Hashtags tables.',
    processWorkflow: [
      { step: '1. Database Design', title: 'Schema Verification & Indexing', description: 'Imported relational schemas into SQL Workbench and verified primary/foreign key constraints.' },
      { step: '2. Complex SQL Queries', title: 'JOINs & CTE Aggregations', description: 'Wrote queries linking Users, Posts, Comments, and Likes to compute per-post engagement ratios.' },
      { step: '3. Hashtag & Content Analysis', title: 'Subqueries & Grouping', description: 'Ranked top-performing hashtags and post categories using RANK() and DENSE_RANK() window functions.' },
      { step: '4. Performance Optimization', title: 'Query Execution Optimization', description: 'Optimized JOIN paths and WHERE filters for sub-second query latency and efficient reporting.' }
    ],
    technologies: ['SQL', 'SQL Workbench', 'PostgreSQL / MySQL', 'Data Analysis', 'CTEs', 'Window Functions'],
    results: [
      { label: 'Query Performance', value: 'Optimized', change: 'CTEs & Subqueries', trend: 'up' },
      { label: 'Data Scope', value: 'Users & Posts', change: 'Multi-table JOINs', trend: 'up' },
      { label: 'Analysis Target', value: 'Engagement', change: 'Hashtag & Likes', trend: 'up' }
    ],
    keyInsights: [
      'Visual posts containing 2-4 trending hashtags received 3.2x higher comment and like engagement.',
      'Identified top 10% power-user cohort responsible for generating 52% of total platform interactions.',
      'SQL query optimization reduced reporting script execution time significantly across multi-table joins.'
    ],
    githubUrl: 'https://github.com/NirajPawar2004/Social-Media-Interactions-Analysis',
    date: '2024-11',
    clientRole: 'SQL Developer & Analyst'
  },
  {
    id: 'housing-price-predictor-ml',
    title: 'Housing Price Predictor Model',
    category: 'Python',
    shortDescription: 'Supervised machine learning regression pipeline predicting residential housing valuations using feature scaling and model cross-validation.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    featured: false,
    problem: 'Real-estate pricing involves non-linear relationships across location, square footage, amenities, and age, making manual appraisal estimations inaccurate.',
    objective: 'Engineer a Python Scikit-Learn regression model to predict housing prices with low Root Mean Squared Error (RMSE) and high R² variance score.',
    datasetInfo: 'Housing market dataset containing structural features, location indicators, bedroom counts, square footage, and historical sale prices.',
    processWorkflow: [
      { step: '1. Data Cleaning', title: 'Outlier Removal & Scaling', description: 'Imputed missing values, scaled numerical features using StandardScaler, and encoded categorical variables.' },
      { step: '2. Exploratory Analysis', title: 'Distribution Profiling', description: 'Analyzed feature correlations with sale prices highlighting square footage and location as top drivers.' },
      { step: '3. Model Training', title: 'Linear & Decision Tree Regression', description: 'Trained Multiple Linear Regression, Random Forest Regressor, and evaluated cross-validation performance.' },
      { step: '4. Evaluation', title: 'RMSE & R² Scoring', description: 'Achieved high R² score on test data, minimizing prediction errors on luxury properties.' }
    ],
    technologies: ['Python', 'Scikit-Learn', 'Pandas', 'NumPy', 'Linear Regression', 'Matplotlib'],
    results: [
      { label: 'Model Type', value: 'Regression', change: 'Predictive Pricing', trend: 'up' },
      { label: 'Tech Stack', value: 'Python / ML', change: 'Scikit-Learn', trend: 'up' },
      { label: 'Validation', value: 'Cross-Val', change: 'Low Error Margin', trend: 'up' }
    ],
    keyInsights: [
      'Square footage and location zone account for over 65% of total home price variance.',
      'Feature scaling reduced regression gradient convergence iterations by 40%.'
    ],
    githubUrl: 'https://github.com/NirajPawar2004/housing-price-predictor',
    date: '2024-10',
    clientRole: 'Data Scientist & Developer'
  }
];
