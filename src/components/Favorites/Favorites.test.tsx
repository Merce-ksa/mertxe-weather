
import {render, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import Favorites from '.'
import { FavoritesProps } from './Favorites'

function customRender({ favorites }: FavoritesProps) {
  return render(
    <Favorites favorites = {favorites} />
  )
}

const initialProps = {
  favorites: [
    {
      city: 'Madrid',
      temperature: 12.21,
      temperatureMax: 14.53,
      temperatureMin: 10.68,
      weatherIcon: '01d'
    },
    {
      city: 'Málaga',
      temperature: 15.64,
      temperatureMax: 20.39,
      temperatureMin: 12.94,
      weatherIcon: '01d'
    }
  ]
}
  
describe('Given a Favorites component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the city name to be defined', async () => {
      const { findByText } = customRender(initialProps)

      await waitFor(() => expect(findByText('Madrid')).toBeDefined())
    })

    it('Then the temperature to be defined', async () => {
      const { findByText } = customRender(initialProps)

      await waitFor(() => expect(findByText(/^12.21/)).toBeDefined())
    })
  })
})
