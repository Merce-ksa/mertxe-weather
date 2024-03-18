import WEATHER from '../mocks/weatherMock'
import formatUrlImage from './formatUrlImage'

describe('Given a formatUrlImage function', () => {
  describe('When it is invoked', () => {
    it('Then should return a url', () => {
      const expected = 'https://openweathermap.org/img/wn/11d@4x.png'
      const dateToFormat = WEATHER.icon
            
      expect(formatUrlImage(dateToFormat)).toBe(expected)
    })
  })
})