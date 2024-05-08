import useWeather from '../../hooks/useWeather'
import Favorite from '../../types/Favorite'
import SmallCard from '../SmallCard'
import UNITS from '../../constants/units'
import './Favorites.css'

function Favorites ({ favorites }: FavoritesProps) {
  const { getForecastByCityName, getWeatherByCityName } = useWeather()
  
  const handleSubmit = (city: string ) => {
    getForecastByCityName(city, UNITS.METRIC)
    getWeatherByCityName(city, UNITS.METRIC)
  }

  return (
    favorites && (
      <div className='favorites-container'>
        <h1 className='title'>MyWeather</h1>
        <ul className='favorites-list'>
          {favorites && favorites.map((favorite: Favorite, index: number) => (
            <li 
              key={`${favorite.city}-${index}`}
              onClick={() => handleSubmit(favorite.city)}
              className='favorites-list-item'
              data-testid={`favorite-item-${favorite.city}`}
            >
              <SmallCard
                city = {favorite.city}
                temperature = {favorite.temperature}
                temperatureMin = {favorite.temperatureMin}
                temperatureMax = {favorite.temperatureMax}
                icon = {favorite.weatherIcon}
              />
            </li>
          ))}
        </ul>
        
      </div>
    )
  )
}

export interface FavoritesProps {
  favorites: Favorite[]
} 

export default Favorites
