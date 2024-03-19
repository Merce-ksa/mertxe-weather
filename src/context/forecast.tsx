import { ReactNode, createContext, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../constants/url'
import { APPId } from '../services/APIConfig'
import { WeatherForecast } from '../types/forecast'
import forecastFactory from '../types/factories/forecastFactory'

export interface ForecastContextType {
  forecast: WeatherForecast | null
  getForecastByCityName: (cityName: string, units: string) => void
}

export const ForecastContext = createContext<ForecastContextType>({} as ForecastContextType)

export function ForecastProvider ({children}: { children: ReactNode }) {
  const [forecast, setForecast] = useState<WeatherForecast | null>(null)

  const getForecastByCityName = async (cityName: string, units: string) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/forecast?q=${cityName}&units=${units}&appid=${APPId}`)
      
      const forecastFormatter = forecastFactory(data)
      setForecast(forecastFormatter)

    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <ForecastContext.Provider value={{
      forecast,
      getForecastByCityName
    }}>
      {children}
    </ForecastContext.Provider>
  )
}