import WeatherResponse from '../WeatherResponse'

export default function weatherFactory(
  weatherResponse: WeatherResponse
): Weather {
  return {
    city: weatherResponse.name,
    coordinates: [weatherResponse.coord.lat, weatherResponse.coord.lon],
    temperature: weatherResponse.main.temp,
    temperatureMax: weatherResponse.main.temp_max,
    temperatureMin: weatherResponse.main.temp_min,
    temperatureFeelsLike: weatherResponse.main.feels_like,
    windSpeed: weatherResponse.wind.speed,
    windDeg: weatherResponse.wind.deg,
    icon: weatherResponse.weather[0].icon,
    sunrise: weatherResponse.sys.sunrise,
    sunset: weatherResponse.sys.sunset
  }
}

interface Weather {
    city: string
    coordinates: number[]
    temperature: number
    temperatureMin: number
    temperatureMax: number
    temperatureFeelsLike: number
    windSpeed: number
    windDeg: number
    icon: string
    sunrise: number
    sunset: number
}