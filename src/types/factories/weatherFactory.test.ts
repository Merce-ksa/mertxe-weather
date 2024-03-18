import WEATHER_RESPONSE_MOCK from '../../mocks/weatherResponseMock'
import weatherFactory from './weatherFactory'

describe('Given a weatherFactory function', () => {
  describe('When it is invoked', () => {
    it('Then should return a weather object', () => {
      const expected = {
        city: WEATHER_RESPONSE_MOCK.name,
        coordinates: [WEATHER_RESPONSE_MOCK.coord.lat, WEATHER_RESPONSE_MOCK.coord.lon],
        temperature: WEATHER_RESPONSE_MOCK.main.temp,
        temperatureMax: WEATHER_RESPONSE_MOCK.main.temp_max,
        temperatureMin: WEATHER_RESPONSE_MOCK.main.temp_min,
        temperatureFeelsLike: WEATHER_RESPONSE_MOCK.main.feels_like,
        windSpeed: WEATHER_RESPONSE_MOCK.wind.speed,
        windDeg: WEATHER_RESPONSE_MOCK.wind.deg,
        icon: WEATHER_RESPONSE_MOCK.weather[0].icon,
        sunrise: WEATHER_RESPONSE_MOCK.sys.sunrise,
        sunset: WEATHER_RESPONSE_MOCK.sys.sunset
      }
      const weatherResponse = WEATHER_RESPONSE_MOCK
            
      expect(weatherFactory(weatherResponse)).toEqual(expected)
    })
  })
})