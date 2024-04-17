import { useEffect, useState } from 'react'
import useWeather from './useWeather'
import Favorite from '../types/Favorite'

function useFavoriteButton () {
  const [favorites] = useState<Favorite[]>([])
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const { weather } = useWeather()
    
  useEffect(() => {
    if(weather) {
      const index = favorites.findIndex((favorite: Favorite) => favorite.city === weather.city)
      index === -1 ? setIsFavorite(false) : setIsFavorite(true)
    }
  }, [weather])

  return {isFavorite, setIsFavorite}
}

export default useFavoriteButton