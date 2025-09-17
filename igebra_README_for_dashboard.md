# Igebra.ai — Cognitive Skills & Student Performance Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org) [![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwindcss)](https://tailwindcss.com) [![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?logo=vercel)](https://vercel.com)

> **Live demo:** REPLACE_WITH_YOUR_VERCEL_URL  
> **Repository:** REPLACE_WITH_YOUR_GITHUB_URL

---

## 📌 Project overview
A lightweight Next.js dashboard that visualizes synthetic student cognitive skills and predicts assessment scores using a simple ML pipeline. The dashboard includes overview stats, bar/scatter/radar charts, a searchable/sortable student table, and an insights section (correlations + learning personas).

This repo contains the dashboard (frontend + API route) only. The ML notebook & model are provided alongside as a separate deliverable (see `notebook/` or linked repo).

---

## ⚙️ Features
- Overview statistics (avg scores and skill means)
- Bar chart: avg assessment by comprehension bins
- Scatter plot: attention vs assessment
- Radar chart: per-student skill profile
- Student table: searchable, sortable
- API route: `/api/data` serves synthetic dataset + aggregates (no external DB required)

---

## 📁 Project structure
```
.
├── pages/
│   ├── index.js         # Dashboard UI
│   ├── api/data.js      # Synthetic student dataset & aggregates
├── components/
│   ├── OverviewStats.jsx
│   ├── BarChart.jsx
│   ├── ScatterChart.jsx
│   ├── RadarChart.jsx
│   └── StudentsTable.jsx
├── public/
│   └── students_synthetic.csv
├── styles/
│   └── globals.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── .gitignore
```

---

## 🚀 Quickstart (local)
Make sure Node.js (>=16) and npm are installed.

```bash
# clone & run
git clone REPLACE_WITH_YOUR_GITHUB_URL
cd igebra-dashboard
npm install
npm run dev
```

Open http://localhost:3000

---

## 🔧 Deploy to Vercel (steps)
1. Sign in to https://vercel.com using your GitHub account.
2. Click **New Project**, choose the repository `igebra-dashboard` and click **Import**.
3. Vercel auto-detects Next.js — just click **Deploy**.
4. After build, copy the **Production** URL and replace the `REPLACE_WITH_YOUR_VERCEL_URL` at the top of this README.

> If you need environment variables, add them on Vercel: Project → Settings → Environment Variables. See `.env.example` for examples.

---

## 📊 Notes on the data & ML
- The synthetic dataset columns: `student_id, name, class, comprehension, attention, focus, retention, engagement_time, assessment_score`.
- ML notebook (separate deliverable): trains a simple regression model to predict `assessment_score`, evaluates RMSE / R², and produces KMeans clusters for learning personas.

---

## ✅ Checklist for submission
- [ ] Jupyter Notebook (analysis + ML)
- [ ] Next.js dashboard (this repo)
- [ ] GitHub repo link
- [ ] Vercel deployment link (public)

---

## 📸 Screenshots / GIFs
Add 1–3 screenshots under `public/screenshots/` and reference them in this README:
```md
![Homepage screenshot](public/screenshots/home.png)
```

---

## 🧾 License & Contact
MIT License — feel free to reuse with attribution.  
Author: Darshan Jain — contact via GitHub profile.

---

*Replace placeholders above with your actual GitHub and Vercel URLs before final submission.*
