import {formatDateEpochToLocalTime} from '../../helpers/formatDate'
import formatUrlImage from '../../helpers/formatUrlImage'
import IconInfo from '../IconInfo'
import './Card.css'
import { TbTemperaturePlus, TbTemperatureMinus, TbSunrise, TbSunset } from 'react-icons/tb'
import { WiWindDeg } from 'react-icons/wi'

function Card ({city, lat, long, temperature, temperatureMin, temperatureMax, temperatureFeelsLike, icon, sunrise, sunset, windSpeed, windDeg}: CardProps) {
 
  return (
    <div className="card-container">
      <div>
        <h3 className='cityName'>{city}</h3>
        <p className='coordinates'>{`${lat}, ${long}`}</p>
      </div>
      <div className="icon-weather">
        <img src={formatUrlImage(icon)} alt="icon resum weather" />
        <div>
          <p className="temperature">{`${temperature.toFixed(1)} ºC`}</p>
          <p className='temp-feels-like'>{`Feels ${temperatureFeelsLike.toFixed(1)} ºC`}</p>
        </div>
      </div>
      <div className='more-info'>
        <div>
          <IconInfo icon={<TbTemperaturePlus />} info={`${temperatureMax} ºC`} />
          <IconInfo icon={<TbTemperatureMinus />} info={`${temperatureMin} ºC`} />
        </div>
        <div>
          <IconInfo icon={<TbSunrise />} info={formatDateEpochToLocalTime(sunrise)} />
          <IconInfo icon={<TbSunset />} info={formatDateEpochToLocalTime(sunset)} />
        </div>
        <div>
          <IconInfo icon={<WiWindDeg style={{ transform: `rotate(${windDeg}deg)` }} />} info={`${windSpeed} km/h`} />
        </div>
      </div>
    </div>
    
  )
}

interface CardProps {
    city: string
    lat: number
    long: number
    temperature: number
    temperatureMin: number
    temperatureMax: number
    temperatureFeelsLike: number
    icon: string
    windSpeed: number
    windDeg: number
    sunrise: number
    sunset: number
}

export default Card