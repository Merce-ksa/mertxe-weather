import { ReactNode, createContext, useState } from 'react'
import weatherFactory from '../types/factories/weatherFactory'
import Weather from '../types/weather'
import axios from 'axios'
import BASE_URL from '../constants/url'
import { APPId } from '../services/APIConfig'

interface WeatherContextType {
  weather: Weather | null
  getWeather: (coordinates: number[], units: string) => void
}

export const WeatherContext = createContext<WeatherContextType>({} as WeatherContextType)

export function WeatherProvider ({children}: { children: ReactNode }) {
  const [weather, setWeather] = useState<Weather | null>(null)

  const getWeather = async (coordinates: number[], units: string) => {
    try {
      const [latitude, longitude] = coordinates

      const { data } = await axios.get(`${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&lang=sp&units=${units}&appid=${APPId}`)
      
      const weatherFormatter = weatherFactory(data)
      setWeather(weatherFormatter)

    } catch (error) {
      console.error(error)
    }
  }
  
  return (
    <WeatherContext.Provider value={{
      weather,
      getWeather
    }}>
      {children}
    </WeatherContext.Provider>
  )
}