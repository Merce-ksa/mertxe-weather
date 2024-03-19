import { ReactNode, createContext, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../constants/url'
import { APPId, TOKEN } from '../services/APIConfig'
import { WeatherForecast } from '../types/forecast'
import forecastFactory from '../types/factories/forecastFactory'
import SuggestionsCityNames from '../types/SuggestionsCityNames'

export interface ForecastContextType {
  suggestionsCityNames: SuggestionsCityNames[]
  getSuggestionsCityNames: (suggestion: string) => void
  forecast: WeatherForecast | null
  getForecastByCityName: (cityName: string, units: string) => void
}

export const ForecastContext = createContext<ForecastContextType>({} as ForecastContextType)

export function ForecastProvider ({children}: { children: ReactNode }) {
  const [forecast, setForecast] = useState<WeatherForecast | null>(null)
  const [suggestionsCityNames, setSuggestionsCityNames] = useState<SuggestionsCityNames[]>([])

  const getSuggestionsCityNames = async (query: string) => {
    try {
      const { data } = await axios.get(`https://geocode-api.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?text=${query}&f=json&token=${TOKEN}`)

      setSuggestionsCityNames(data.suggestions)

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
  
  return (
    <ForecastContext.Provider value={{
      suggestionsCityNames,
      getSuggestionsCityNames,
      forecast,
      getForecastByCityName
    }}>
      {children}
    </ForecastContext.Provider>
  )
}