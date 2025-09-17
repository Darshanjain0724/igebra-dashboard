📊 Igebra.ai – Cognitive Skills & Student Performance Dashboard

This project provides an interactive Next.js dashboard for analyzing student cognitive skills and performance.

🚀 Features

Overview Stats → Avg scores, skills summary

Charts

📊 Bar chart → Cognitive skill vs. assessment score

🔵 Scatter plot → Attention vs. performance

🕸️ Radar chart → Student skill profile

Student Table → Searchable + sortable

Insights Section → Key findings about correlations & learning personas

Synthetic Dataset → Generated with fields:
student_id, name, class, comprehension, attention, focus, retention, assessment_score, engagement_time

🛠️ Tech Stack

Next.js 14 – React framework

Tailwind CSS – Styling

Recharts – Interactive data visualization

API Routes – Serve synthetic student dataset

📂 Project Structure
.
├── pages/
│   ├── index.js         # Dashboard UI
│   ├── api/data.js      # Synthetic student dataset
├── components/
│   ├── BarChart.js
│   ├── ScatterChart.js
│   ├── RadarChart.js
│   └── StudentTable.js
├── styles/
│   └── globals.css      # Tailwind CSS
├── public/
│   └── ... (static files if any)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── README.md
└── .gitignore

⚡ Local Setup

Clone the repo & install dependencies:

git clone https://github.com/Darshanjain0724/igebra-dashboard.git
cd igebra-dashboard
npm install
npm run dev


Now open → http://localhost:3000
 🎉

🌍 Deployment

This project is deployed on Vercel.

Live link → https://igebra-dashboard.vercel.app

🔑 Key Findings

Attention & Focus are strongly correlated with higher assessment scores.

Engagement Time influences retention but not always direct performance.

Students can be clustered into learning personas:

🧠 High Performers → strong across all skills

⚡ Focused Learners → high attention but medium scores

🎯 At-Risk → low attention + low retention

📌 Deliverables

✔️ Jupyter Notebook (ML + Analysis)
✔️ Next.js Dashboard (this repo)
✔️ GitHub Repo Link (submission)
✔️ Vercel Deployment Link (submission)
✔️ README (this file ✅)

✨ Built with ❤️ for the Igebra.ai Assignment
