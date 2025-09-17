import useSWR from 'swr'
import fetcher from '../lib/fetcher'
import OverviewStats from '../components/OverviewStats'
import SkillBar from '../components/BarChart'
import AttentionScatter from '../components/ScatterChart'
import RadarProfile from '../components/RadarChart'
import StudentsTable from '../components/StudentsTable'

export default function Home(){
  const { data, error } = useSWR('/api/data', fetcher)
  if (error) return <div className='container'>Failed to load data</div>
  if (!data) return <div className='container'>Loading...</div>

  return (
    <div className='container'>
      <h1 style={{marginBottom:8}}>Cognitive Skills & Student Performance Dashboard</h1>
      <div className='card' style={{marginBottom:16}}>
        <OverviewStats data={data} />
      </div>

      <div className='grid' style={{marginBottom:16}}>
        <div className='card'><SkillBar data={data} /></div>
        <div className='card'><AttentionScatter data={data} /></div>
      </div>

      <div className='card' style={{marginBottom:16}}>
        <RadarProfile data={data} />
      </div>

      <div className='card'>
        <StudentsTable data={data} />
      </div>
    </div>
  )
}
