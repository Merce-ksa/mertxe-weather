import WEATHER from '../mocks/weatherMock'
import formatDate from './formatDate'

describe('Given a formatDate function', () => {
  describe('When it is invoked', () => {
    it('Then should return a date in format DD/MM/YY, HH:MM:SS', () => {
      const expected = '7:19:19'
      const dateToFormat = WEATHER.sunrise
            
      expect(formatDate(dateToFormat)).toBe(expected)
    })
  })
})

