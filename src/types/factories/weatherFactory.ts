import WeatherResponse from '../WeatherResponse'
import Weather from '../weather'

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
