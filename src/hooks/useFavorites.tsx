import { useContext } from 'react'
import { FavoritesContext } from '../context/favorites'

function useFavorites () {
  const favorites = useContext(FavoritesContext)

  if (favorites === undefined) {
    throw new Error('useCart must be used within a FavoritesProvider')
  }
  return favorites
}

export default useFavorites