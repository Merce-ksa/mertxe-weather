import formatUrlImage from '../../helpers/formatUrlImage'
import './CurrentWeather.css'


function CurrentWeather ({
  city,
  coordinates,
  temperature,
  icon }: CurrentWeatherProps) {
 
  return (
    <>
      <div className='current-weather-container'>
        <div className='current-weather-city-info'>
          <h3 className='current-weather-city-name'>{city}</h3>
          <p className='current-weather-coordinates'>{`${coordinates[0]}, ${coordinates[1]}`}</p>
        </div>
        <div className='current-weather-summary'>
          <img src={formatUrlImage(icon)} alt="icon resum weather" />
          <p className="current-weather-temperature">{`${temperature.toFixed(1)} ºC`}</p>
        </div>
      </div>
    </>
    
  )
}

interface CurrentWeatherProps {
    city: string
    coordinates: number[]
    temperature: number
    icon: string
}

export default CurrentWeather