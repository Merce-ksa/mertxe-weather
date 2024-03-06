
import { createContext, useReducer } from 'react'
import axios from 'axios'
import weatherFactory from '../types/factories/weatherFactory'
import { APPId } from '../services/APIConfig'

export const WeatherContext = createContext()

const initialStateWeather = {
  city: '',
  coordinates: [],
  temperature: null,
  temperatureMax: null,
  temperatureMin: null,
  temperatureFeelsLike: null,
  windSpeed: null,
  windDeg: null,
  icon: '',
  sunrise: null,
  sunset: null

}

const WEATHER_ACTIONS_TYPES = {
  GET_WEATHER: 'GET_WEATHER'
}

const weatherReducer = (state, action) => {
  switch (action.type) {
  case WEATHER_ACTIONS_TYPES.GET_WEATHER:
    return action.payload      
  default:
    return state
  }
}


function useWeatherReducer () {
  const [state, dispatch] = useReducer(weatherReducer, initialStateWeather)

  const getWeather = async (coordinates: string[], units: string) => {
    try {
      const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0]}&lon=${coordinates[1]}&lang=sp&units=${units}&appid=${APPId}`)
          
      const weather = weatherFactory(data)
      
      dispatch({
        type: 'GET_WEATHER',
        payload: weather
      })

    } catch (error) {
      console.error(error)
    }
  }
  
  return {state, getWeather}
}

export function WeatherProvider ({children}) {
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