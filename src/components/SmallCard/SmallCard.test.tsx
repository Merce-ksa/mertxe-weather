import { render } from '@testing-library/react'
import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'

import SmallCard, { SmallCardProps } from './SmallCard'

import WEATHER from '../../mocks/weatherMock'

function customRender(props: SmallCardProps) {
  return render(
    <SmallCard
      city = {props.city}
      temperature = {props.temperature}
      temperatureMin = {props.temperatureMin}
      temperatureMax = {props.temperatureMax}
      icon = {props.icon}
    />
  )
}

const initialProps = {
  city: WEATHER.city,
  temperature: WEATHER.temperature,
  temperatureMin: WEATHER.temperatureMin,
  temperatureMax: WEATHER.temperatureMax,
  icon: WEATHER.icon
}

describe('Given a SmallCard component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the city name to be defined', () => {
      customRender(initialProps)
        
      const cityName = screen.getByText('New York')

      expect(cityName).toBeDefined()
    })

    it('Then the temperature to be defined', () => {
      customRender(initialProps)
        
      const temperature = screen.getByText(/^20.0/)
        
      expect(temperature).toHaveTextContent(
        '20.0º'
      )
    })
  })
})