import fs from 'fs'
import path from 'path'
import Papa from 'papaparse'

export default function handler(req, res) {
  const csvPath = path.join(process.cwd(), 'public', 'students_synthetic.csv')
  const csv = fs.readFileSync(csvPath, 'utf8')
  const { data } = Papa.parse(csv, { header: true, dynamicTyping: true })
  res.status(200).json(data)
}
