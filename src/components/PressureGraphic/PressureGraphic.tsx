import { useEffect, useState } from 'react'
import { MAX_PRESSURE, MIN_PRESSURE } from '../../constants/values'

function PressureGraphic ({ pressure }: PressureGraphicProps) {
  const [strokeDasharrayPressure, setStrokeDasharrayPressure] = useState<string>('')
  const [transformPres, setTransformPres] = useState<string>('')
    
  useEffect(() => {
    const totalPressure = MAX_PRESSURE - MIN_PRESSURE
    const pressureSinceMinValue = pressure - MIN_PRESSURE
    
    const precentageOfPressure = (pressureSinceMinValue / totalPressure) * 100
    const anglePressure = 180 / 100 * precentageOfPressure
    
    setStrokeDasharrayPressure(`180 ${anglePressure}`)
    setTransformPres(`translate(50 50) rotate(${anglePressure})`)
  }, [])
      
  return(
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" width='400'>
      <defs>
        <linearGradient id="gradientPress">
          <stop offset="0%" stopColor="#B8F1C6" />
          <stop offset="100%" stopColor="#EBF8A1" />
        </linearGradient>
        <mask id="mask1">
          <circle cx="50" cy="50" r="33" fill="none"
            stroke="white" strokeWidth="1" strokeDasharray="180"
            pathLength="360" strokeLinecap="round"
            transform="rotate(184 50 50)"/>
          <circle id="c1" cx="50" cy="50" r="33" fill="none"
            stroke="black" strokeWidth="1"
            strokeDasharray={strokeDasharrayPressure} pathLength="360" />
        </mask>
      </defs>
      <circle cx="50" cy="50" r="33" fill="none"
        stroke="#fff" strokeWidth="1" strokeDasharray="175 360"
        pathLength="360" strokeLinecap="round" transform="rotate(184 50 50)"/>
      <rect width="100" height="60" fill="url(#gradientPress)" mask="url(#mask1)"/>
      <line id="linePressure" strokeLinecap="round" x1="-30" y1="0" x2="-36" y2="0" stroke="#fff"
        strokeWidth="1.3" transform={transformPres} />
      <text id="t1" x="50" y="40" textAnchor="middle" fill="#EBF8A1"
        fontFamily="sans-serif">{pressure}</text>
      <text id="t1" x="50" y="45" textAnchor="middle" fill="#EBF8A1"
        fontFamily="sans-serif" fontSize='4'>hPa</text>
      <text x="17" y="57" textAnchor="middle" fill="#fff"
        fontFamily="sans-serif" fontSize="5">Baja</text>
      <text x="83" y="57" textAnchor="middle" fill="#fff"
        fontFamily="sans-serif" fontSize="5">Alta</text>
    </svg>
  )
}

interface PressureGraphicProps {
    pressure: number
}

export default PressureGraphic