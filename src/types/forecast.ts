export interface WeatherForecast {
  city: string
  coordinates: number[]
  sunrise: number
  sunset: number
  forecastList: { [date: string]: WeatherForecastItem[] }
}

export interface WeatherForecastItem {
  temperature: number
  temperatureFeelsLike: number
  icon: string
  windSpeed: number
  windDeg: number
  precipitationProbability: number
  rain: number | null
  snow: number | null
  date: string
}