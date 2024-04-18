import { waitFor } from '@testing-library/react'
import WEATHER from '../mocks/weatherMock'
import { formatDateEpochToLocalTime, formatDateToDayMonth, formatDateToJSON} from './formatDate'

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
    it('Then should return a date in format YYYY-MM-DD', async () => {
      const dateObject = new Date()
      const YYYY = dateObject.getFullYear()
      const MM = dateObject.getMonth() + 1
      const DD = dateObject.getDate()
      
      

      await waitFor(() => {
        const formatDD = DD.toString().length === 1 ? `0${DD}` : DD.toString()
        const formatMM = MM.toString().length === 1 ? `0${MM}` : MM.toString()
        const expected = `${YYYY}-${formatMM}-${formatDD}`
        expect(formatDateToJSON(dateObject)).toBe(expected)
      })

    })
  })
})

describe('Given a formatDateToDayMonth function', () => {
  describe('When it is invoked', () => {
    it('Then should return a date in format DD-MM', () => {
      const forecastDate = '2024-03-16'
      const expected = '16-03'

      expect(formatDateToDayMonth(forecastDate)).toBe(expected)
    })
  })
})

