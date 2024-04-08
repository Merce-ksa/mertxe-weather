import { useEffect, useState } from 'react'

import IconText from '../IconText'
import { formatDateEpochToLocalTime } from '../../helpers/formatDate'

import { TbTemperatureMinus, TbTemperaturePlus, TbTemperature, TbSunHigh, TbSunrise, TbSunset } from 'react-icons/tb'
import { WiBarometer, WiHumidity } from 'react-icons/wi'
import { BsWind } from 'react-icons/bs'
import { PiArrowRightBold } from 'react-icons/pi'

import './Weather.css'
import { WeatherForecastItem } from '../../types/forecast'
import Forecast from '../Forecast'

function Weather ({
  forecast,
  temperatureFeelsLike,
  windDeg,
  windSpeed,
  humidity,
  pressure,
  temperatureMin,
  temperatureMax,
  sunrise,
  sunset,
}: WeatherProps) {
  const [strokeDasharray, setStrokeDasharray] = useState<string>('')
  const [transformLine, setTransformLine] = useState<string>('')

  const [strokeDasharrayPressure, setStrokeDasharrayPressure] = useState<string>('')
  const [transformPres, setTransformPres] = useState<string>('')

  useEffect(() => {
    const totalDayDuration = sunset - sunrise

    const currentEpoch = Math.floor(Date.now() / 1000)
    const timeSinceSunrise = currentEpoch - sunrise

    const percentageOfDay = (timeSinceSunrise / totalDayDuration) * 100

    const angle = 180 / 100 * percentageOfDay
    setStrokeDasharray(`180 ${angle - 2}`)
    setTransformLine(`translate(50 50) rotate(${angle + 2})`)

    const MIN_PRESSURE = 973
    const MAX_PRESSURE = 1053
    const totalPressure = MAX_PRESSURE - MIN_PRESSURE
    const pressureSinceMinValue = pressure - MIN_PRESSURE

    const precentageOfPressure = (pressureSinceMinValue / totalPressure) * 100
    const anglePressure = 180 / 100 * precentageOfPressure

    setStrokeDasharrayPressure(`180 ${anglePressure}`)
    setTransformPres(`translate(50 50) rotate(${anglePressure})`)
  }, [])

  return (
    <>
      <div className='weather-container'>
        <div className='weather-forecast'>
          <Forecast forecastList={forecast} />
        </div>
        <div className='weather-temp-feels-like weather-item'>
          <IconText icon={<TbTemperature />} info={'Sensación'} isTitle={true} />
          <p className='weather-text'>{`${temperatureFeelsLike.toFixed(1)} ºC`}</p>
        </div>
        <div className='weather-temp-max weather-item'>
          <IconText icon={<TbTemperaturePlus />} info={'Temp. máxima'} isTitle={true} />
          <p className='weather-text'>{`${temperatureMax.toFixed(1)} ºC`}</p>
        </div>
        <div className='weather-temp-min weather-item'>
          <IconText icon={<TbTemperatureMinus />} info={'Temp. mínima'} isTitle={true} />
          <p className='weather-text'>{`${temperatureMin.toFixed(1)} ºC`}</p>
        </div>
        <div className='weather-sunrise-sunset weather-item'>
          <IconText icon={<TbSunHigh />} info={'Amanecer y atardecer'} isTitle={true} />
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
        </div>
        <div className='weather-pressure weather-item'>
          <IconText icon={<WiBarometer />} info={'Presión'} isTitle={true} />
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
        </div>
        <div className='weather-humidity weather-item'>
          <IconText icon={<WiHumidity />} info={'Humedad'} isTitle={true} />
          <p className='weather-text'>{`${humidity.toFixed(1)} %`}</p>
        </div>
        <div className='weather-wind-wrapper weather-item'>
          <IconText icon={<BsWind />} info={'Viento'} isTitle={true} />
          <div className='weather-wind'>
            <p className='weather-text'>{`${windSpeed.toFixed(1)} km/h`}</p>
            <p className='forecast-wind-rotate'>
              <PiArrowRightBold style={{ transform: `rotate(-${windDeg}deg)`, transformOrigin: 'center' }} className='arrow-wind'/>
            </p>
          </div>
        </div>
      </div>
    </>
  )
} 

export interface WeatherProps {
    forecast: { [date: string]: WeatherForecastItem[] }
    temperatureFeelsLike: number
    windDeg: number
    windSpeed: number
    humidity: number
    pressure: number
    temperatureMin: number
    temperatureMax: number
    sunrise: number
    sunset: number
}

export default Weather