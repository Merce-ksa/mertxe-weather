import { useContext } from 'react'
import { ForecastContext } from '../context/forecast'

function useForecast () {
  const forecast = useContext(ForecastContext)

  if(forecast === undefined) {
    throw Error('useContext must be used within a ForecastProvider')
  }
  
  return forecast
}

export default useForecast