import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

import WEATHER from '../../mocks/weatherMock'
import FORECAST from '../../mocks/forecastMock'
import Weather, { WeatherProps } from './Weather'

jest.mock('../../assets/puntos-cardinales-dark.png')
jest.mock('../../assets/puntos-cardinales-light.png')

function customRender(props: WeatherProps) {
  return render(
    <Weather
      forecast = {props.forecast}
      temperatureFeelsLike = {props.temperatureFeelsLike}
      windDeg = {props.windDeg}
      windSpeed = {props.windSpeed}
      humidity = {props.humidity}
      pressure = {props.pressure}
      temperatureMin = {props.temperatureMin}
      temperatureMax = {props.temperatureMax}
      sunrise = {props.sunrise}
      sunset = {props.sunset}
    />
  )
}

const initialProps = {
  forecast: FORECAST.forecastList,
  temperatureFeelsLike: WEATHER.temperatureFeelsLike,
  windDeg: WEATHER.windDeg,
  windSpeed: WEATHER.windSpeed,
  humidity: WEATHER.humidity,
  pressure: WEATHER.pressure,
  temperatureMin: WEATHER.temperatureMin,
  temperatureMax: WEATHER.temperatureMax,
  sunrise: WEATHER.sunrise,
  sunset: WEATHER.sunset
}
  
describe('Given a Weather component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the temperature feels like to be defined', () => {
      const { getByText } = customRender(initialProps)
      const temperatureMin = getByText(/^15/)
      expect(temperatureMin).toHaveTextContent( '15')
    })

    it('Then the pressure to be defined', () => {
      const { getByText } = customRender(initialProps)
      
      const pressure = getByText(/^10.0/)
        
      expect(pressure).toHaveTextContent(
        '10.0',
      )
    })
  })
})