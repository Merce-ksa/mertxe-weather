import { BsWind } from 'react-icons/bs'
import { PiArrowRightBold } from 'react-icons/pi'
import { TbTemperatureMinus, TbTemperaturePlus, TbTemperature, TbSunHigh } from 'react-icons/tb'
import { WiBarometer, WiHumidity } from 'react-icons/wi'
import IconText from '../IconText'
import Forecast from '../Forecast'
import SunriseSunsetGraphic from '../SunriseSunsetGraphic/SunriseSunsetGraphic'
import PressureGraphic from '../PressureGraphic/PressureGraphic'
import { WeatherForecastItem } from '../../types/forecast'
import './Weather.css'
import useLightDarkTheme from '../../hooks/useLightDarkTheme'
import puntosCardinalesDark from '../../assets/puntos-cardinales-dark.png'
import puntosCardinalesLight from '../../assets/puntos-cardinales-light.png'

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
  const {isDarkTheme} = useLightDarkTheme()
  
  const backgroundWind = isDarkTheme ? `url(${puntosCardinalesDark})` : `url(${puntosCardinalesLight})`
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
          <SunriseSunsetGraphic sunrise={sunrise} sunset={sunset}/>
        </div>
        <div className='weather-pressure weather-item'>
          <IconText icon={<WiBarometer />} info={'Presión'} isTitle={true} />
          <PressureGraphic pressure={pressure} />
        </div>
        <div className='weather-humidity weather-item'>
          <IconText icon={<WiHumidity />} info={'Humedad'} isTitle={true} />
          <p className='weather-text'>{`${humidity.toFixed(1)} %`}</p>
        </div>
        <div className='weather-wind-wrapper weather-item'>
          <IconText icon={<BsWind />} info={'Viento'} isTitle={true} />
          <div className='weather-wind'>
            <p className='weather-text'>{`${windSpeed.toFixed(1)} km/h`}</p>
            <p className='forecast-wind-rotate' style={{backgroundImage: backgroundWind}}>
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