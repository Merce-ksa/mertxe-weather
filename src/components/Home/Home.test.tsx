
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import { WeatherContext, WeatherContextType} from '../../context/weather'
import Home from '.'
import COORDINATES from '../../mocks/coordinatesMock'
import WEATHER from '../../mocks/WeatherMock'

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
      const user = { weather: WEATHER, getWeather: jest.fn() }
      customRender(user)
      expect(screen.getByText(WEATHER.city)).toBeInTheDocument()
    })

    it('Then the temperature to be defined', () => {
      const user = { weather: WEATHER, getWeather: jest.fn() }
      customRender(user)
      expect(screen.getByText(WEATHER.city)).toBeInTheDocument()
    
      const temperature = screen.getByText(`${WEATHER.temperature.toString()} C`)
      
      expect(temperature).toBeInTheDocument()
    })
  })
})
