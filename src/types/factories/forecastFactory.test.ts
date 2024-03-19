
import ForecastResponse from '../ForecastResponse'
import forecastFactory from './forecastFactory'

const FORECAST_RESPONSE_MOCK: ForecastResponse = {
  'cod': '200',
  'message': 0,
  'cnt': 40,
  'list': [
    {
      'dt': 1710612000,
      'main': {
        'temp': 20.29,
        'feels_like': 19.94,
        'temp_min': 17.33,
        'temp_max': 20.29,
        'pressure': 1021,
        'sea_level': 1021,
        'grnd_level': 999,
        'humidity': 60,
        'temp_kf': 2.96
      },
      'weather': [
        {
          'id': 802,
          'main': 'Clouds',
          'description': 'scattered clouds',
          'icon': '03d'
        }
      ],
      'clouds': {
        'all': 33
      },
      'wind': {
        'speed': 2.89,
        'deg': 133,
        'gust': 3.38
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'd'
      },
      'dt_txt': '2024-03-16 18:00:00'
    },
    {
      'dt': 1710622800,
      'main': {
        'temp': 17,
        'feels_like': 16.48,
        'temp_min': 14.61,
        'temp_max': 17,
        'pressure': 1021,
        'sea_level': 1021,
        'grnd_level': 1000,
        'humidity': 66,
        'temp_kf': 2.39
      },
      'weather': [
        {
          'id': 803,
          'main': 'Clouds',
          'description': 'broken clouds',
          'icon': '04n'
        }
      ],
      'clouds': {
        'all': 66
      },
      'wind': {
        'speed': 2.91,
        'deg': 168,
        'gust': 3.07
      },
      'visibility': 10000,
      'pop': 0,
      'sys': {
        'pod': 'n'
      },
      'dt_txt': '2024-03-16 21:00:00'
    },
  ],
  'city': {
    'id': 3110044,
    'name': 'San Sebastian',
    'coord': {
      'lat': 43.3128,
      'lon': -1.975
    },
    'country': 'ES',
    'population': 185357,
    'timezone': 3600,
    'sunrise': 1710569869,
    'sunset': 1710612908
  }
}

describe('Given a forecastFactory function', () => {
  describe('When it is invoked', () => {
    it('Then should return a forecast object', () => {
      const expected = {
        city: FORECAST_RESPONSE_MOCK.city.name,
        coordinates: [FORECAST_RESPONSE_MOCK.city.coord.lat, FORECAST_RESPONSE_MOCK.city.coord.lon],
        sunrise: FORECAST_RESPONSE_MOCK.city.sunrise,
        sunset: FORECAST_RESPONSE_MOCK.city.sunset,
        forecastList: [
          {
            temperature: 20.29,
            temperatureFeelsLike: 19.94,
            icon: '03d',
            windSpeed: 2.89,
            windDeg: 133,
            precipitationProbability: 0,
            rain: null,
            snow: null,
            date: '2024-03-16 18:00:00'
          },
          {
            temperature: 17,
            temperatureFeelsLike: 16.48,
            icon: '04n',
            windSpeed: 2.91,
            windDeg: 168,
            precipitationProbability: 0,
            rain: null,
            snow: null,
            date: '2024-03-16 21:00:00'
          },
        ],
      }
            
      expect(forecastFactory(FORECAST_RESPONSE_MOCK)).toEqual(expected)
    })
  })
})