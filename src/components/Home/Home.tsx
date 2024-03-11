import useCoordinates from '../../hooks/useCoordinates'
import './Home.css'
import useWeather from '../../hooks/useWeather'
import { useEffect } from 'react'
import UNITS from '../../constants/units'
import Card from '../Card'

function Home () {
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
      <>
        <h1 className='title'>MyWeather</h1>
        <Card
          city = {weather.city}
          lat = {weather.coordinates[0]}
          long = {weather.coordinates[1]}
          temperature = {weather.temperature}
          temperatureMin = {weather.temperatureMin}
          temperatureMax = {weather.temperatureMax}
          temperatureFeelsLike = {weather.temperatureFeelsLike}
          icon = {weather.icon}
          windSpeed = {weather.windSpeed}
          windDeg = {weather.windDeg}
          sunrise={weather.sunrise}
          sunset={weather.sunset}
        />
      </>
    )
  )
}

export default Home
