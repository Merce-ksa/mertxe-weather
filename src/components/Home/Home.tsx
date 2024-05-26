import { useEffect } from 'react'
import useWeather from '../../hooks/useWeather'
import useFavorites from '../../hooks/useFavorites'
import useFavoriteButton from '../../hooks/useFavoriteButton'
import { SuggestionsProvider } from '../../context/suggestions'
import CurrentWeather from '../CurrentWeather'
import Weather from '../Weather'
import Favorites from '../Favorites'
import Search from '../Search'
import Switch from '../Switch'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Favorite from '../../types/Favorite'
import './Home.css'
import AnimatedButton from '../AnimatedButton'

function Home () {
  const { weather, forecast } = useWeather()
  const { favorites, getStoredFavorites, addFavorites, updateFavorite, removeFavorites } = useFavorites() 
  const { isFavorite, setIsFavorite } = useFavoriteButton()

  useEffect(() => {
    getStoredFavorites()
  }, [])

  useEffect(() => {
    if(!weather) return
    const index = favorites.findIndex((favorite: Favorite) => favorite.city === weather.city)
    
    index !== -1 ? setIsFavorite(true) : setIsFavorite(false)
    index !== -1 && favorites[index].temperature !== weather.temperature &&
      updateFavorite({ 
        city: weather.city,
        temperature: weather.temperature, 
        temperatureMax: weather.temperatureMax, 
        temperatureMin: weather.temperatureMin, 
        weatherIcon: weather.icon })
  }, [weather])

  const handleChangeFavorite = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    if(!weather) return
    const index = favorites.findIndex((favorite: Favorite) => favorite.city === weather.city)
    index === -1 ? addFavorites({
      city: weather.city,
      temperature: weather.temperature,
      temperatureMax: weather.temperatureMax,
      temperatureMin: weather.temperatureMin,
      weatherIcon: weather.icon }) 
      :
      removeFavorites(favorites[index].city) 

    setIsFavorite(!isFavorite)
  }

  return (
    <div>
      <div className='home-container'>
        <aside className='aside-container'>
          <Favorites favorites={favorites} />
        </aside>
        <main className='main-container'>
          <div className='header-container'>
            <SuggestionsProvider>
              <Search />
            </SuggestionsProvider>
            <Switch />
          </div>
          {weather && (
            <div className='main-wrapper'>
              <button 
                name='favorite-button' 
                className='favorite-button' 
                type="button" 
                onClick={(event) => handleChangeFavorite(event)} 
                role='favorite-button'
                data-testid='favorite-button'
              >
                <AnimatedButton 
                  isTruthy={isFavorite} 
                  IconIsTruthy={FaStar} 
                  IconIsFalsy={FaRegStar} 
                />
              </button>
              <CurrentWeather 
                city={weather.city}
                temperature={weather.temperature}
                coordinates={weather.coordinates}
                icon={weather.icon} />
              {forecast && (
                <Weather
                  forecast={ forecast.forecastList}
                  temperatureFeelsLike={ weather.temperatureFeelsLike }
                  windDeg={ weather.windDeg } 
                  windSpeed={ weather.windSpeed } 
                  humidity={ weather.humidity } 
                  pressure={ weather.pressure } 
                  temperatureMin={ weather.temperatureMin } 
                  temperatureMax={ weather.temperatureMax } 
                  sunrise={ weather.sunrise } 
                  sunset={ weather.sunset }
                />
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Home