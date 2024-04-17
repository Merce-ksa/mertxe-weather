import { ReactNode, createContext, useState } from 'react'
import Favorite from '../types/Favorite'
export interface FavoritesContextType {
  favorites: Favorite[]
  getStoredFavorites: () => void
  addFavorites: ({city, temperature, temperatureMax, temperatureMin, weatherIcon}: Favorite) => void
  removeFavorites: (city: string) => void
}

export const FavoritesContext = createContext<FavoritesContextType>({} as FavoritesContextType)

export function FavoritesProvider ({children}: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Favorite[]>([])

  const getStoredFavorites = () => {
    const storedFavorites = localStorage.getItem('favorites')
    const favoritesFormatted = storedFavorites ? JSON.parse(storedFavorites) : []
    setFavorites(favoritesFormatted)
  }

  const addFavorites = ({city, temperature, temperatureMax, temperatureMin, weatherIcon}: Favorite) => {
    const newFavorites = {
      city,
      temperature,
      temperatureMax,
      temperatureMin,
      weatherIcon
    }

    setFavorites(prevState => [...prevState, newFavorites])
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }
  
  const removeFavorites = (city: string) => {
    setFavorites(prevState => prevState.filter(favorite => favorite.city !== city))
    localStorage.setItem('favorites', JSON.stringify(favorites))
  }

  return (
    <FavoritesContext.Provider value={{
      favorites,
      getStoredFavorites,
      addFavorites,
      removeFavorites
    }}>
      {children}
    </FavoritesContext.Provider>
  )
}