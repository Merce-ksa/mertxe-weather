
import { ReactNode, createContext, useReducer } from 'react'
import axios from 'axios'
import weatherFactory from '../types/factories/weatherFactory'
import { APPId } from '../services/APIConfig'
import initialStateWeather from '../states/weatherState'
import {weatherReducer, WEATHER_ACTIONS_TYPES} from '../reducers/weatherReducer'

export const WeatherContext = createContext({})

function useWeatherReducer () {
  const [state, dispatch] = useReducer(weatherReducer, initialStateWeather)

  const getWeather = async (coordinates: number[], units: string) => {
    try {
      const [latitude, longitude] = coordinates
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=sp&units=${units}&appid=${APPId}`)
          
      const weather = weatherFactory(data)
      
      dispatch({
        type: WEATHER_ACTIONS_TYPES.GET_WEATHER,
        payload: weather
      })

    } catch (error) {
      console.error(error)
    }
  }
  
  return {state, getWeather}
}

export function WeatherProvider ({children}: { children: ReactNode }) {
  const { state, getWeather } = useWeatherReducer()
  
  return (
    <WeatherContext.Provider value={{
      weather: state,
      getWeather
    }}>
      {children}
    </WeatherContext.Provider>
  )
}