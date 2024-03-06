import { useContext } from 'react'
import { WeatherContext } from '../context/weather'

function useWeather () {
  const weather = useContext(WeatherContext)

  if(weather === undefined) {
    throw Error('useContext must be used within a WeatherProvider')
  }
  
  return weather
}

export default useWeather