import { useEffect, useState } from 'react'
import useWeather from './useWeather'
import Favorite from '../types/Favorite'

function useFavorites () {
  const [favorites, setFavorites] = useState<Favorite[]>([])
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { weather } = useWeather()

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    
    const favoritesFormatted = storedFavorites ? JSON.parse(storedFavorites) : []
    setFavorites(favoritesFormatted)
  }, [])
    
  useEffect(() => {
    if(weather) {
      const index = favorites.findIndex((favorite: Favorite) => favorite.city === weather.city)
      index === -1 ? setIsFavorite(false) : setIsFavorite(true)
    }
  }, [weather])

  return {isFavorite, favorites, setIsFavorite}
}

export default useFavorites