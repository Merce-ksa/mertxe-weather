import WEATHER from "../mocks/WeatherMock"
import formatDate from "./formatDate"

describe('Given a formatDate function', () => {
    describe('When it is invoked', () => {
        it('Then should return a date in format DD/MM/YY, HH:MM:SS', () => {
            const expected = '5/3/2024, 7:19:19'
            const dateToFormat = WEATHER.sunrise
            
            expect(formatDate(dateToFormat)).toBe(expected)
        })
    })
})

