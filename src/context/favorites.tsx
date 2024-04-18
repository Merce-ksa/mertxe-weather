import { ReactNode, createContext, useReducer } from 'react'
import Favorite from '../types/Favorite'
import { FavoritesActionTypes } from './favorites.actions.types'
import { initialState } from './favorites.state'
import { favoritesReducer } from './favorites.reducer'

export interface FavoritesContextType {
  favorites: Favorite[]
  getStoredFavorites: () => void
  addFavorites: (favorite: Favorite) => void
  removeFavorites: (city: string) => void
}

export const FavoritesContext = createContext<FavoritesContextType>({} as FavoritesContextType)

export function FavoritesProvider ({children}: { children: ReactNode }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState)

  const getStoredFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites')
    const favorites = storedFavorites ? JSON.parse(storedFavorites) : []

    dispatch({
      type: FavoritesActionTypes.GET_STORED_FAVORITES,
      payload: favorites
    })
  }

  const addFavorites = (favorite: Favorite) => dispatch({
    type: FavoritesActionTypes.ADD_FAVORITE,
    payload: favorite
  })  

  const removeFavorites = (city: string) => dispatch({
    type: FavoritesActionTypes.REMOVE_FAVORITE,
    payload: city
  })

  return (
    <FavoritesContext.Provider value={{
      favorites: state,
      getStoredFavorites,
      addFavorites,
      removeFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}