📓 Jupyter Notebook – Cognitive Skills & Student Performance






📊 Dataset

Synthetic dataset with fields:
student_id, name, class, comprehension, attention, focus, retention, assessment_score, engagement_time

🔎 Analysis

Summary statistics & distributions

Correlation heatmap → skills vs. performance

Key Insight: Attention & Focus are strongest predictors

🤖 Machine Learning Model

Model: Linear Regression

Target: assessment_score

Loss Function: MSE

Result: Predicts scores with good accuracy

👥 Clustering – Learning Personas

Algorithm: KMeans (k=3)

Personas:

🧠 High Performers

⚡ Focused Learners

🎯 At-Risk Students

📈 Visualizations

Heatmap (correlations)

Scatter (attention vs. performance)

Cluster plot (personas)

🚀 Next Steps

Integrate with dashboard

Add real-time data pipeline

🌐 Next.js Dashboard – Igebra.ai



<img width="1024" height="1024" alt="Gemini_Generated_Image_poj1cjpoj1cjpoj1" src="https://github.com/user-attachments/assets/8497b679-cadc-47a9-bcc5-c05b3af642a6" />





🚀 Features

Overview Stats

📊 Bar chart → Skill vs. Score

🔵 Scatter plot → Attention vs. Performance

🕸️ Radar chart → Student profile

Student Table → Searchable & sortable

Insights Section → Findings + Personas

📂 Structure
pages/
 ├── index.js
 ├── api/data.js
components/
 ├── BarChart.js
 ├── ScatterChart.js
 ├── RadarChart.js
 ├── StudentTable.js
styles/
 └── globals.css

⚡ Local Setup
git clone https://github.com/Darshanjain0724/igebra-dashboard.git
cd igebra-dashboard
npm install
npm run dev


Visit → http://localhost:3000

🌍 Deployment

Deployed on Vercel 🚀
🔗 Live: https://igebra-dashboard.vercel.app

🔑 Key Findings

Attention & Focus → major impact on scores

Engagement Time → boosts retention

Learning Personas: High Performers, Focused Learners, At-Risk Students

✨ Built with ❤️ for the Igebra.ai Assignment
