
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

export default Weather