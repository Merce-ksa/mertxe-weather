import {WeatherForecast} from '../types/forecast'

const FORECAST_MOCK: WeatherForecast = {
  city: 'San Sebastian',
  coordinates: [
    43.3128,
    -1.975
  ],
  sunrise: 1710569869,
  sunset: 1710612908,
  forecastList: {
    '2024-03-16': [
      {
        temperature: 20.29,
        temperatureFeelsLike: 19.94,
        windSpeed: 2.89,
        windDeg: 133,
        icon: '03d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-16 18:00:00'
      },
      {
        temperature: 17,
        temperatureFeelsLike: 16.48,
        windSpeed: 2.91,
        windDeg: 168,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-16 21:00:00'
      }
    ],
    '2024-03-17': [
      {
        temperature: 14.33,
        temperatureFeelsLike: 13.65,
        windSpeed: 3.33,
        windDeg: 175,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-17 00:00:00'
      },
      {
        temperature: 14.48,
        temperatureFeelsLike: 13.89,
        windSpeed: 2.18,
        windDeg: 198,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-17 03:00:00'
      },
      {
        temperature: 13.1,
        temperatureFeelsLike: 12.55,
        windSpeed: 1.64,
        windDeg: 183,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-17 06:00:00'
      },
      {
        temperature: 17.08,
        temperatureFeelsLike: 16.67,
        windSpeed: 0.07,
        windDeg: 262,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-17 09:00:00'
      },
      {
        temperature: 20.36,
        temperatureFeelsLike: 19.99,
        windSpeed: 1.3,
        windDeg: 28,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-17 12:00:00'
      },
      {
        temperature: 20.44,
        temperatureFeelsLike: 20.08,
        windSpeed: 0.97,
        windDeg: 29,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-17 15:00:00'
      },
      {
        temperature: 17.12,
        temperatureFeelsLike: 16.9,
        windSpeed: 1.69,
        windDeg: 140,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-17 18:00:00'
      },
      {
        temperature: 15.44,
        temperatureFeelsLike: 15.1,
        windSpeed: 1.76,
        windDeg: 249,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-17 21:00:00'
      }
    ],
    '2024-03-18': [
      {
        temperature: 14.39,
        temperatureFeelsLike: 14.23,
        windSpeed: 0.9,
        windDeg: 193,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-18 00:00:00'
      },
      {
        temperature: 14.36,
        temperatureFeelsLike: 14.1,
        windSpeed: 0.41,
        windDeg: 89,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-18 03:00:00'
      },
      {
        temperature: 13.25,
        temperatureFeelsLike: 13.11,
        windSpeed: 1.1,
        windDeg: 302,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-18 06:00:00'
      },
      {
        temperature: 13.9,
        temperatureFeelsLike: 13.77,
        windSpeed: 0.71,
        windDeg: 269,
        icon: '10d',
        precipitationProbability: 0.2,
        rain: 0.12,
        snow: null,
        date: '2024-03-18 09:00:00'
      },
      {
        temperature: 16.38,
        temperatureFeelsLike: 16.11,
        windSpeed: 1.62,
        windDeg: 353,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-18 12:00:00'
      },
      {
        temperature: 16.13,
        temperatureFeelsLike: 15.86,
        windSpeed: 2.15,
        windDeg: 12,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-18 15:00:00'
      },
      {
        temperature: 13.41,
        temperatureFeelsLike: 13.18,
        windSpeed: 1.6,
        windDeg: 16,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-18 18:00:00'
      },
      {
        temperature: 11.95,
        temperatureFeelsLike: 11.68,
        windSpeed: 0.23,
        windDeg: 299,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-18 21:00:00'
      }
    ],
    '2024-03-19': [
      {
        temperature: 12.39,
        temperatureFeelsLike: 12.06,
        windSpeed: 0.26,
        windDeg: 157,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-19 00:00:00'
      },
      {
        temperature: 11.37,
        temperatureFeelsLike: 11.04,
        windSpeed: 0.62,
        windDeg: 247,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-19 03:00:00'
      },
      {
        temperature: 10.68,
        temperatureFeelsLike: 10.28,
        windSpeed: 1.47,
        windDeg: 158,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-19 06:00:00'
      },
      {
        temperature: 14.9,
        temperatureFeelsLike: 14.48,
        windSpeed: 1.31,
        windDeg: 3,
        icon: '02d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-19 09:00:00'
      },
      {
        temperature: 17.75,
        temperatureFeelsLike: 17.36,
        windSpeed: 2.1,
        windDeg: 21,
        icon: '03d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-19 12:00:00'
      },
      {
        temperature: 18.36,
        temperatureFeelsLike: 18.03,
        windSpeed: 2.5,
        windDeg: 36,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-19 15:00:00'
      },
      {
        temperature: 14.89,
        temperatureFeelsLike: 14.73,
        windSpeed: 1.62,
        windDeg: 79,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-19 18:00:00'
      },
      {
        temperature: 14.19,
        temperatureFeelsLike: 13.94,
        windSpeed: 2.08,
        windDeg: 139,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-19 21:00:00'
      }
    ],
    '2024-03-20': [
      {
        temperature: 13.81,
        temperatureFeelsLike: 13.39,
        windSpeed: 2.27,
        windDeg: 156,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-20 00:00:00'
      },
      {
        temperature: 13.87,
        temperatureFeelsLike: 13.43,
        windSpeed: 2.28,
        windDeg: 161,
        icon: '04n',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-20 03:00:00'
      },
      {
        temperature: 12.97,
        temperatureFeelsLike: 12.7,
        windSpeed: 2.42,
        windDeg: 186,
        icon: '10n',
        precipitationProbability: 0.97,
        rain: 1.09,
        snow: null,
        date: '2024-03-20 06:00:00'
      },
      {
        temperature: 16.41,
        temperatureFeelsLike: 16.25,
        windSpeed: 1.84,
        windDeg: 271,
        icon: '10d',
        precipitationProbability: 0.96,
        rain: 0.49,
        snow: null,
        date: '2024-03-20 09:00:00'
      },
      {
        temperature: 14.2,
        temperatureFeelsLike: 14.08,
        windSpeed: 4.4,
        windDeg: 307,
        icon: '10d',
        precipitationProbability: 0.91,
        rain: 0.28,
        snow: null,
        date: '2024-03-20 12:00:00'
      },
      {
        temperature: 12.87,
        temperatureFeelsLike: 12.48,
        windSpeed: 1.15,
        windDeg: 304,
        icon: '10d',
        precipitationProbability: 0.43,
        rain: 0.25,
        snow: null,
        date: '2024-03-20 15:00:00'
      },
      {
        temperature: 12.5,
        temperatureFeelsLike: 12.26,
        windSpeed: 0.96,
        windDeg: 211,
        icon: '10d',
        precipitationProbability: 1,
        rain: 1.06,
        snow: null,
        date: '2024-03-20 18:00:00'
      },
      {
        temperature: 11.61,
        temperatureFeelsLike: 11.36,
        windSpeed: 2.09,
        windDeg: 301,
        icon: '10n',
        precipitationProbability: 1,
        rain: 2.5,
        snow: null,
        date: '2024-03-20 21:00:00'
      }
    ],
    '2024-03-21': [
      {
        temperature: 11.38,
        temperatureFeelsLike: 11.13,
        windSpeed: 0.68,
        windDeg: 243,
        icon: '10n',
        precipitationProbability: 1,
        rain: 3.99,
        snow: null,
        date: '2024-03-21 00:00:00'
      },
      {
        temperature: 11.17,
        temperatureFeelsLike: 10.88,
        windSpeed: 0.69,
        windDeg: 298,
        icon: '10n',
        precipitationProbability: 1,
        rain: 2.12,
        snow: null,
        date: '2024-03-21 03:00:00'
      },
      {
        temperature: 11.13,
        temperatureFeelsLike: 10.83,
        windSpeed: 0.7,
        windDeg: 81,
        icon: '04n',
        precipitationProbability: 0.8,
        rain: null,
        snow: null,
        date: '2024-03-21 06:00:00'
      },
      {
        temperature: 12.22,
        temperatureFeelsLike: 11.98,
        windSpeed: 0.2,
        windDeg: 354,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-21 09:00:00'
      },
      {
        temperature: 13.13,
        temperatureFeelsLike: 12.95,
        windSpeed: 0.62,
        windDeg: 141,
        icon: '10d',
        precipitationProbability: 0.42,
        rain: 0.63,
        snow: null,
        date: '2024-03-21 12:00:00'
      },
      {
        temperature: 15.91,
        temperatureFeelsLike: 15.7,
        windSpeed: 1.78,
        windDeg: 19,
        icon: '04d',
        precipitationProbability: 0,
        rain: null,
        snow: null,
        date: '2024-03-21 15:00:00'
      }
    ]
  }
}
  
export default FORECAST_MOCK