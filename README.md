# Modern Freelancing & Data / AI Project Portfolio

A production-ready personal portfolio website for a **Data Analyst, AI/ML Specialist, Power BI Developer, and Freelancer** deployable to **GitHub Pages (`username.github.io`)**.

![DataVision Portfolio Preview](public/favicon.svg)

---

## 🌟 Core Highlights

- **SaaS-Grade Layered Design**: Dark-first glassmorphic aesthetic with custom color tokens, smooth transitions, ambient glows, and responsive layout scaling.
- **Interactive Hero Visual**: Live right-hand widget showcasing real-time BI chart previews, predictive ML model precision metrics (ROC-AUC 92.4%), and DAX/SQL code snippet copy features.
- **Client Services Marketplace**: 4 dedicated freelance service packages (*Data Analysis & EDA*, *Business Intelligence & Power BI*, *Machine Learning Modeling*, *Data Automation & Python Scripts*) with deep-dive service drawer modals.
- **Dynamic Projects & Case Study System**:
  - Filter bar (`All`, `Data Analytics`, `Power BI`, `Machine Learning`, `Python`, `SQL`) with instant Framer Motion layout transitions.
  - Large **Featured Project Spotlight** (*Bank Customer Churn Prediction & Retention Analytics*).
  - Detailed **7-Step Case Study Overlays** (Problem → Objective → Dataset → Step-by-Step Methodology → KPI Results → Key Insights → Code/Demo links).
- **Categorized Skills**: Technical proficiency indicators across Data Analytics, Business Intelligence, Machine Learning algorithms, and Developer Infrastructure.
- **Work Process ("How I Work")**: 5-step client collaboration methodology pipeline (Understand → Analyze → Build → Validate → Deliver).
- **High-Conversion Contact Intake**: Project inquiry form with budget range dropdown, real-time validation, isolated config in `src/config/contact.ts`, 1-click email copy button, and confetti micro-delights.
- **Dark / Light Mode**: Persistent theme switcher reading `localStorage` and system preferences.
- **GitHub Pages Ready**: Configured Vite build (`base: './'`), SPA fallback `404.html`, and automated `.github/workflows/deploy.yml` deployment workflow.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite 5
- **Styling**: Tailwind CSS v3 + Custom Design System Tokens
- **Animations**: Framer Motion (Page reveals, filter transitions, modal overlays, reduced-motion compliant)
- **Icons**: Lucide React + Custom SVG Icons
- **Effects**: Canvas-Confetti
- **Deployment**: GitHub Pages (Static site hosting)

---

## 📂 Project Architecture

```text
d:/Portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages Deployment Workflow
├── public/
│   ├── favicon.svg             # Favicon asset
│   ├── robots.txt              # Search engine crawler permissions
│   ├── sitemap.xml             # XML Sitemap
│   └── 404.html                # SPA redirect fallback for GitHub Pages
├── src/
│   ├── components/
│   │   ├── UI/
│   │   │   ├── Badge.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── SocialIcons.tsx
│   │   │   ├── ThemeToggle.tsx
│   │   │   └── Toast.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── FeaturedProject.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── HeroVisual.tsx
│   │   ├── Navbar.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Projects.tsx
│   │   ├── ServiceModal.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   └── WorkProcess.tsx
│   ├── config/
│   │   └── contact.ts          # Central contact & form provider configuration
│   ├── context/
│   │   └── ThemeContext.tsx    # Dark/Light theme manager
│   ├── data/                   # Structured, editable content files
│   │   ├── education.ts
│   │   ├── experience.ts
│   │   ├── process.ts
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── skills.ts
│   │   └── socials.ts
│   ├── hooks/
│   │   └── useScrollSpy.ts     # Active section detector for navigation
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces
│   ├── App.tsx
│   ├── index.css               # Tailwind directives & glassmorphism styles
│   └── main.tsx
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts              # Configured base: './' for GitHub Pages
└── README.md
```

---

## 🚀 Quick Start & Development Commands

### Prerequisites
Make sure you have Node.js (v18+) and npm installed on your system.

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173/` in your browser to view live hot-reload preview.

### 3. Build for Production
```bash
npm run build
```
Generates optimized static assets in the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## ⚙️ How to Customize Your Personal Details

All personal content is stored in decoupled data files. **No UI components need to be modified** when updating your personal info.

1. **Personal & Contact Details**: Edit `src/config/contact.ts` to set your name, email, location, GitHub, LinkedIn, Upwork, and Web3Forms access key.
2. **Portfolio Projects**: Edit `src/data/projects.ts` to add or modify project case studies, metrics, workflow steps, screenshots, and links.
3. **Services Offered**: Edit `src/data/services.ts` to customize deliverables, target audience, and timelines.
4. **Skills & Stack**: Edit `src/data/skills.ts` to adjust proficiency levels and technologies.
5. **Education & Experience**: Edit `src/data/education.ts` and `src/data/experience.ts`.

---

## 🌐 Deploying to GitHub Pages (`username.github.io`)

### Option A: Automatic GitHub Actions Deployment (Recommended)

1. Create a GitHub repository named `USERNAME.github.io` (or any project repo name).
2. Push this project code to the `main` branch.
3. On GitHub, navigate to **Settings** > **Pages**.
4. Under **Source**, select **GitHub Actions**.
5. The included workflow `.github/workflows/deploy.yml` will automatically build and publish your website whenever you push code updates!

### Option B: Manual Build & Push
```bash
npm run build
```
Copy the contents of `dist/` into your `gh-pages` branch or deployment hosting service.

---

## 📄 License

Distributed under the MIT License. Feel free to use and customize for your personal portfolio!
