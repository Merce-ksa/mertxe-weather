import { ReactNode, createContext, useState } from 'react'
import forecastFactory from '../types/factories/forecastFactory'
import weatherFactory from '../types/factories/weatherFactory'
import Weather from '../types/weather'
import { WeatherForecast } from '../types/forecast'
import axios from 'axios'
import BASE_URL from '../constants/url'
import { APPId } from '../services/APIConfig'

export interface WeatherContextType {
  weather: Weather | null
  forecast: WeatherForecast | null
  getWeatherByCoords: (coordinates: number[], units: string) => void
  getForecastByCoords: (coordinates: number[], units: string) => void
  getWeatherByCityName: (cityName: string, units: string) => void
  getForecastByCityName: (cityName: string, units: string) => void
}

export const WeatherContext = createContext<WeatherContextType>({} as WeatherContextType)

export function WeatherProvider ({children}: { children: ReactNode }) {
  const [weather, setWeather] = useState<Weather | null>(null)
  const [forecast, setForecast] = useState<WeatherForecast | null>(null)

  const getWeatherByCoords = async (coordinates: number[], units: string) => {
    try {
      const [latitude, longitude] = coordinates

      const { data } = await axios.get(`${BASE_URL}/weather?lat=${latitude}&lon=${longitude}&lang=sp&units=${units}&appid=${APPId}`)
      
      const weatherFormatter = weatherFactory(data)
      setWeather(weatherFormatter)

    } catch (error) {
      console.error(error)
    }
  }

  const getWeatherByCityName = async (cityName: string, units: string) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/weather?q=${cityName}&units=${units}&appid=${APPId}`)
      
      const weatherFormatter = weatherFactory(data)
      setWeather(weatherFormatter)

    } catch (error) {
      console.error(error)
    }
  }

  const getForecastByCityName = async (cityName: string, units: string) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/forecast?q=${cityName}&units=${units}&appid=${APPId}`)
      
      const forecastFormatter = forecastFactory(data)
      setForecast(forecastFormatter)

    } catch (error) {
      console.error(error)
    }
  }

  const getForecastByCoords = async (coordinates: number[], units: string) => {
    try {
      const [latitude, longitude] = coordinates

      const { data } = await axios.get(`${BASE_URL}/forecast?lat=${latitude}&lon=${longitude}&lang=sp&units=${units}&appid=${APPId}`)
      
      const forecastFormatter = forecastFactory(data)
      setForecast(forecastFormatter)

    } catch (error) {
      console.error(error)
    }
  }
  
  
  return (
    <WeatherContext.Provider value={{
      weather,
      forecast,
      getWeatherByCoords,
      getForecastByCoords,
      getWeatherByCityName,
      getForecastByCityName
    }}>
      {children}
    </WeatherContext.Provider>
  )
}