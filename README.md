# Cognitive Skills & Student Performance Dashboard (Next.js)

## What is included
- Next.js app (pages) with charts (Recharts) and a searchable student table.
- API route `/api/data` that serves `public/students_synthetic.csv` as JSON using PapaParse.
- The `public/students_synthetic.csv` dataset is included (synthetic).

## Run locally
1. `cd nextjs-dashboard`
2. `npm install`
3. `npm run dev`
4. Open `http://localhost:3000`

## Deploy to Vercel
- Create a GitHub repo, push this folder, then import into Vercel (Next.js auto-detected).

## Notes
- This is a skeleton. You can improve styles, add authentication, or precompute aggregates in the API for performance.
