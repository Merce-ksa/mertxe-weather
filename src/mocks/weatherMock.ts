import Weather from '../types/weather'

const WEATHER_MOCK: Weather = {
  coord: {
    lon: 2.159,
    lat: 41.3888
  },
  weather: [
    {
      id: 801,
      main: 'Clouds',
      description: 'few clouds',
      icon: '02d'
    }
  ],
  base: 'stations',
  main: {
    temp: 17.37,
    feels_like: 16.29,
    temp_min: 15.7,
    temp_max: 18.99,
    pressure: 1019,
    humidity: 43
  },
  visibility: 10000,
  wind: {
    speed: 6.17,
    deg: 260
  },
  clouds: {
    all: 20
  },
  dt: 1709653141,
  sys: {
    type: 2,
    id: 2003688,
    country: 'ES',
    sunrise: 1709619559,
    sunset: 1709660793
  },
  timezone: 3600,
  id: 3128760,
  name: 'Barcelona',
  cod: 200
}

export default WEATHER_MOCK