import { useEffect } from 'react'
import useCoordinates from '../../hooks/useCoordinates'
import useWeather from '../../hooks/useWeather'
import SmallCard from '../SmallCard'
import UNITS from '../../constants/units'
import './Favorites.css'

function Favorites () {
  const { coordinates } = useCoordinates()
  const { weather, getWeatherByCoords, getWeatherByCityName } = useWeather()

  useEffect(() => {
    if (coordinates.length) {
      getWeatherByCoords(coordinates, UNITS.METRIC)
    } else {
      getWeatherByCityName('Barcelona', UNITS.METRIC)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates])
  
  return (
    weather && (
      <div className='favorites-container'>
        <h1 className='title'>MyWeather</h1>
        <SmallCard
          city = {weather.city}
          temperature = {weather.temperature}
          temperatureMin = {weather.temperatureMin}
          temperatureMax = {weather.temperatureMax}
          icon = {weather.icon}
        />
      </div>
    )
  )
}

export default Favorites
