import WEATHER from '../mocks/weatherMock'
import { formatDateEpochToLocalTime, formatDateToJSON} from './formatDate'

describe('Given a formatDateEpochToLocalTime function', () => {
  describe('When it is invoked', () => {
    it('Then should return a date in format DD/MM/YY, HH:MM:SS', () => {
      const expected = '7:19:19'
      const dateEpoch = WEATHER.sunrise
            
      expect(formatDateEpochToLocalTime(dateEpoch)).toBe(expected)
    })
  })
})

describe('Given a formatDateToJSON function', () => {
  describe('When it is invoked', () => {
    it('Then should return a date in format YYYY-MM-DD', () => {
      const dateObject = new Date()
      const YYYY = dateObject.getFullYear()
      const MM = dateObject.getMonth() + 1
      const DD = dateObject.getDate()

      const formatMM = MM.toString().length === 1 ? `0${MM}` : MM.toString()
      const expected = `${YYYY}-${formatMM}-${DD}`

      expect(formatDateToJSON(dateObject)).toBe(expected)
    })
  })
})

