import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts'
import { useState } from 'react'

export default function RadarProfile({data}){
  const [selected, setSelected] = useState(data[0].student_id)
  const student = data.find(d=> d.student_id === selected) || data[0]
  const chartData = [
    {skill:'comprehension', value: Number(student.comprehension)||0},
    {skill:'attention', value: Number(student.attention)||0},
    {skill:'focus', value: Number(student.focus)||0},
    {skill:'retention', value: Number(student.retention)||0},
  ]
  return (
    <div style={{display:'flex', gap:16, alignItems:'center'}}>
      <div style={{flex:1}}>
        <h3>Student radar profile</h3>
        <select value={selected} onChange={(e)=> setSelected(e.target.value)} style={{padding:8, marginBottom:8}}>
          {data.map(d=> <option key={d.student_id} value={d.student_id}>{d.student_id} - {d.name}</option>)}
        </select>
        <div style={{height:320}}>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={chartData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="skill" />
              <PolarRadiusAxis angle={30} domain={[0,100]} />
              <Radar name={student.student_id} dataKey="value" fill="#82ca9d" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div style={{width:260}} className="card">
        <h4>Details</h4>
        <div><strong>ID:</strong> {student.student_id}</div>
        <div><strong>Name:</strong> {student.name}</div>
        <div><strong>Class:</strong> {student.class}</div>
        <div><strong>Assessment:</strong> {student.assessment_score}</div>
      </div>
    </div>
  )
}
