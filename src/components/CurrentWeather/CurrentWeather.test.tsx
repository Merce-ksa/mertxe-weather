import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import CurrentWeather from '.'
import Weather from '../../types/weather'
import WEATHER from '../../mocks/weatherMock'

function customRender(initialProps: Weather) {
  return render(
    <CurrentWeather
      city = {initialProps.city}
      coordinates = {initialProps.coordinates}
      temperature = {initialProps.temperature}
      icon = {initialProps.icon}
    />
  )
}
  
describe('Given a CurrentWeather component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the city name to be defined', () => {
      customRender(WEATHER)
      expect(screen.getByText(WEATHER.city)).toBeInTheDocument()
    })

    it('Then the temperature to be defined', () => {
      customRender(WEATHER)
      
      const temperature = screen.getByText(/^20.0/)
        
      expect(temperature).toHaveTextContent(
        '20.0 ºC',
      )
    })
  })
})