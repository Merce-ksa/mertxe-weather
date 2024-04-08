import Favorite from '../../types/Favorite'
import SmallCard from '../SmallCard'
import './Favorites.css'

function Favorites ({ favorites }: FavoritesProps) {
  return (
    favorites && (
      <div className='favorites-container'>
        <h1 className='title'>MyWeather</h1>
        {favorites && favorites.map((favorite: Favorite, index: number) => (
          <div key={`${favorite.city}-${index}`} className='favorites-smallCard-container'>
            <SmallCard
              city = {favorite.city}
              temperature = {favorite.temperature}
              temperatureMin = {favorite.temperatureMin}
              temperatureMax = {favorite.temperatureMax}
              icon = {favorite.weatherIcon}
            />
          </div>
        ))}
      </div>
    )
  )
}

export interface FavoritesProps {
  favorites: Favorite[]
} 

export default Favorites
