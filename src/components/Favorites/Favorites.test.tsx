
import {render, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom'
import Favorites from '.'
import { FavoritesProps } from './Favorites'
import FAVORITES_MOCK from '../../mocks/favoritesMock'
function customRender({ favorites }: FavoritesProps) {
  return render(
    <Favorites favorites = {favorites} />
  )
}

const initialProps = {
  favorites: FAVORITES_MOCK
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

    it('Then the all locations to be defined', () => {
      const {container} = customRender(initialProps)
        
      const favoritesClassName = container.querySelectorAll('.favorites-smallCard-container')
      const totalFavorites = initialProps.favorites.length
      
      expect(favoritesClassName).toHaveLength(totalFavorites)
    })
  })
})
