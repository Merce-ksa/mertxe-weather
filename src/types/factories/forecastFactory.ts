import ForecastResponse from '../ForecastResponse'
import { WeatherForecast, WeatherForecastItem } from '../forecast'

export default function forecastFactory(
  forecastResponse: ForecastResponse
): WeatherForecast {
  const forecastList = forecastResponse.list.map(item => {
    const { main, weather, wind, rain, snow } = item
    return {
      temperature: main.temp,
      temperatureFeelsLike: main.feels_like,
      windSpeed: wind.speed,
      windDeg: wind.deg,
      icon: weather[0].icon,
      precipitationProbability: item.pop,
      rain: rain && rain['3h'] || null,
      snow: snow && snow['3h'] || null,
      date: item.dt_txt
    }
  })
  
  const groupedForecasts: { [date: string]: WeatherForecastItem[] } = {}

  forecastList.forEach(item => {
    const date = item.date.split(' ')[0]
    if (!groupedForecasts[date]) {
      groupedForecasts[date] = []
    }
    groupedForecasts[date].push(item)
  })

  return {
    city: forecastResponse.city.name,
    coordinates: [forecastResponse.city.coord.lat, forecastResponse.city.coord.lon],
    sunrise: forecastResponse.city.sunrise,
    sunset: forecastResponse.city.sunset,
    forecastList: groupedForecasts
  }
}