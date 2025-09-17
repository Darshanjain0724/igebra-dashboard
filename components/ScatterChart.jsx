import { ScatterChart, Scatter, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function AttentionScatter({data}){
  const points = data.map(d => ({x: Number(d.attention)||0, y: Number(d.assessment_score)||0, name: d.student_id}))
  return (
    <div style={{height:300}}>
      <h3>Attention vs Assessment</h3>
      <ResponsiveContainer width="100%" height="85%">
        <ScatterChart>
          <XAxis dataKey="x" name="attention" />
          <YAxis dataKey="y" name="assessment" />
          <Tooltip cursor={{strokeDasharray:'3 3'}}/>
          <Scatter data={points} fill="#8884d8" />
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  )
}
