import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Card from '.'
import Weather from '../../types/weather'
import WEATHER from '../../mocks/weatherMock'

function customRender(initialProps: Weather) {
  return render(
    <Card
      city = {initialProps.city}
      lat = {initialProps.coordinates[0]}
      long = {initialProps.coordinates[1]}
      temperature = {initialProps.temperature}
      temperatureMin = {initialProps.temperatureMin}
      temperatureMax = {initialProps.temperatureMax}
      temperatureFeelsLike = {initialProps.temperatureFeelsLike}
      icon = {initialProps.icon}
      windSpeed = {initialProps.windSpeed}
      windDeg = {initialProps.windDeg}
      sunrise={initialProps.sunrise}
      sunset={initialProps.sunset}
    />
  )
}
  
describe('Given a Card component', ()=> {
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