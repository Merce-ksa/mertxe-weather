import { useEffect, useState } from 'react'
import { formatDateEpochToLocalTime } from '../../helpers/formatDate'
import { TbSunrise, TbSunset } from 'react-icons/tb'

function SunriseSunsetGraphic ({sunrise, sunset}: SunriseSunsetGraphicProps) {
  const [strokeDasharray, setStrokeDasharray] = useState<string>('')
  const [transformLine, setTransformLine] = useState<string>('')

  useEffect(() => {
    const totalDayDuration = sunset - sunrise

    const currentEpoch = Math.floor(Date.now() / 1000)
    const timeSinceSunrise = currentEpoch - sunrise

    const percentageOfDay = (timeSinceSunrise / totalDayDuration) * 100
    const angleDay = 180 / 100 * percentageOfDay

    setStrokeDasharray(`180 ${angleDay - 2}`)
    setTransformLine(`translate(50 50) rotate(${angleDay + 2})`)
  }, [])

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 60" width='400'>
      <defs>
        <linearGradient id="gradient">
          <stop offset="0%" stopColor="#ff8315" />
          <stop offset="50%" stopColor="#fffe20" />
          <stop offset="80%" stopColor="#b560af" />
          <stop offset="100%" stopColor="#15105f" />
        </linearGradient>
        <radialGradient id="radialGradient">
          <stop offset="0%" stopColor="#fff" />
          <stop offset="100%" stopColor="#fffe20" />
        </radialGradient>
        <mask id="m1">
          <circle cx="50" cy="50" r="33" fill="none"
            stroke="white" strokeWidth="2" strokeDasharray="180"
            pathLength="360" strokeLinecap="round"
            transform="rotate(184 50 50)"/>
          <circle id="c1" cx="50" cy="50" r="33" fill="none"
            stroke="black" strokeWidth="4"
            strokeDasharray={strokeDasharray} pathLength="360" />
        </mask>
      </defs>
      <circle cx="50" cy="50" r="33" fill="none"
        stroke="#fff" strokeWidth="1" strokeDasharray="175 360"
        pathLength="360" strokeLinecap="round" transform="rotate(184 50 50)"/>
      <rect width="100" height="60" fill="url(#gradient)" mask="url(#m1)"/>
      <circle id="l1" cx="-33" cy="4" r='3' stroke="transparent" fill="url(#radialGradient)"
        strokeWidth="1" transform={transformLine} strokeLinecap='round' />
      <svg x="6" y="51.5">
        <TbSunrise style={{fontSize: '5px', color:'#fff'}} />
      </svg>
      <svg x="72" y="51.5">
        <TbSunset style={{fontSize: '5px', color:'#fff'}} />
      </svg>
      <text x="17" y="56" textAnchor="middle" fill="#fff" fontSize="5">
        {`${formatDateEpochToLocalTime(sunrise).split(':')[0]}:${formatDateEpochToLocalTime(sunrise).split(':')[1]}`}
      </text>
     
      <text x="83" y="56" textAnchor="middle" fill="#fff" fontSize="5">
        {`${formatDateEpochToLocalTime(sunset).split(':')[0]}:${formatDateEpochToLocalTime(sunset).split(':')[1]}`}
      </text>
    </svg>
  )
}

interface SunriseSunsetGraphicProps {
    sunrise: number
    sunset: number
}

export default SunriseSunsetGraphic