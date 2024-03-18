
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { WeatherContext, WeatherContextType} from '../../context/weather'
import Home from '.'
import COORDINATES from '../../mocks/coordinatesMock'
import WEATHER from '../../mocks/weatherMock'

jest.mock('../../hooks/useCoordinates', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    coordinates: COORDINATES,
  })),
}))

function customRender(user: WeatherContextType) {
  return render(
    <WeatherContext.Provider value={user}>
      <Home />
    </WeatherContext.Provider>
  )
}
  
describe('Given a weather component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the city name to be defined', () => {
      const weather = { weather: WEATHER, getWeatherByCoords: jest.fn(), getWeatherByCityName: jest.fn() }
      customRender(weather)
      expect(screen.getByText(WEATHER.city)).toBeInTheDocument()
    })

    it('Then the temperature to be defined', () => {
      const weather = { weather: WEATHER, getWeatherByCoords: jest.fn(), getWeatherByCityName: jest.fn() }
      customRender(weather)
    
      const temperature = screen.getByText('20.0 ºC')
      
      expect(temperature).toBeInTheDocument()
    })
  })
})
