export default function OverviewStats({data}){
  const n = data.length
  const avg = (key) => (data.reduce((s,d)=> s + (Number(d[key])||0),0)/n).toFixed(2)
  return (
    <div style={{display:'flex', gap:16, alignItems:'center'}}>
      <div><strong>Students:</strong> {n}</div>
      <div><strong>Avg assessment:</strong> {avg('assessment_score')}</div>
      <div><strong>Avg comprehension:</strong> {avg('comprehension')}</div>
      <div><strong>Avg attention:</strong> {avg('attention')}</div>
      <div style={{marginLeft:'auto'}}><em>Data: synthetic</em></div>
    </div>
  )
}
