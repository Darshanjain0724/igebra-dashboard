import { useMemo, useState } from 'react'

export default function StudentsTable({data}){
  const [filter, setFilter] = useState('')
  const [sortKey, setSortKey] = useState('assessment_score')
  const [dir, setDir] = useState('desc')

  const filtered = useMemo(()=> {
    const f = filter.toLowerCase().trim()
    return data.filter(d => !f || (d.name && d.name.toLowerCase().includes(f)) || (d.student_id && d.student_id.toLowerCase().includes(f)))
  }, [data, filter])

  const sorted = useMemo(()=> {
    const s = [...filtered].sort((a,b)=> {
      const av = Number(a[sortKey])||0; const bv = Number(b[sortKey])||0
      return dir === 'asc' ? av - bv : bv - av
    })
    return s
  }, [filtered, sortKey, dir])

  return (
    <div>
      <h3>Students</h3>
      <input className="search" placeholder="Search by name or id..." value={filter} onChange={(e)=> setFilter(e.target.value)} />
      <div style={{display:'flex', gap:8, marginBottom:8}}>
        <label>Sort by:</label>
        <select value={sortKey} onChange={(e)=> setSortKey(e.target.value)}>
          <option value="assessment_score">Assessment</option>
          <option value="comprehension">Comprehension</option>
          <option value="attention">Attention</option>
          <option value="focus">Focus</option>
          <option value="retention">Retention</option>
        </select>
        <button onClick={()=> setDir(dir==='asc'?'desc':'asc')}>{dir==='asc'?'↑':'↓'}</button>
      </div>

      <div style={{maxHeight:360, overflow:'auto'}}>
        <table>
          <thead>
            <tr>
              <th>ID</th><th>Name</th><th>Class</th><th>Comprehension</th><th>Attention</th><th>Focus</th><th>Retention</th><th>Assessment</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map(r=> (
              <tr key={r.student_id}>
                <td>{r.student_id}</td>
                <td>{r.name}</td>
                <td>{r.class}</td>
                <td>{r.comprehension}</td>
                <td>{r.attention}</td>
                <td>{r.focus}</td>
                <td>{r.retention}</td>
                <td>{r.assessment_score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
