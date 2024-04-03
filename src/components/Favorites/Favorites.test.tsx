
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { WeatherContext, WeatherContextType} from '../../context/weather'
import Favorites from '.'
import COORDINATES from '../../mocks/coordinatesMock'
import WEATHER from '../../mocks/weatherMock'
import FORECAST from '../../mocks/forecastMock'

jest.mock('../../hooks/useCoordinates', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    coordinates: COORDINATES,
  })),
}))

const weather = { weather: WEATHER, forecast: FORECAST, getWeatherByCoords: jest.fn(), getWeatherByCityName: jest.fn(), getForecastByCityName: jest.fn() }

function customRender(user: WeatherContextType) {
  return render(
    <WeatherContext.Provider value={user}>
      <Favorites />
    </WeatherContext.Provider>
  )
}
  
describe('Given a weather component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the city name to be defined', () => {
      customRender(weather)
      expect(screen.getByText(WEATHER.city)).toBeInTheDocument()
    })

    it('Then the temperature to be defined', () => {
      customRender(weather)
    
      const temperature = screen.getByText(/^20.0/)
        
      expect(temperature).toHaveTextContent(
        '20.0º',
      )
    })
  })
})
