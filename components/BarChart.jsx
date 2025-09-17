import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function SkillBar({data}){
  // compute avg assessment_score by comprehension decile
  const buckets = Array.from({length:10}, (_,i)=> ({bin: `${i*10}-${i*10+9}`, count:0, sum:0}))
  data.forEach(d => {
    const c = Math.min(9, Math.floor((Number(d.comprehension)||0)/10))
    buckets[c].count += 1
    buckets[c].sum += Number(d.assessment_score)||0
  })
  const mapped = buckets.map(b => ({bin:b.bin, avg_score: b.count? +(b.sum/b.count).toFixed(2):0}))
  return (
    <div style={{height:300}}>
      <h3>Avg assessment by comprehension bin</h3>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={mapped}>
          <XAxis dataKey="bin" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="avg_score" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
