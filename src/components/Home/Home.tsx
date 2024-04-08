
import { useEffect, useState } from 'react'
import useWeather from '../../hooks/useWeather'
import { SuggestionsProvider } from '../../context/suggestions'
import CurrentWeather from '../CurrentWeather'
import Weather from '../Weather'
import Favorites from '../Favorites'
import Search from '../Search'
import Switch from '../Switch'
import { FaRegStar, FaStar } from 'react-icons/fa'
import Favorite from '../../types/Favorite'
import useFavorites from '../../hooks/useFavorites'
import './Home.css'

function Home () {
  const [themeDark, setThemeDark] = useState<boolean>(false)
  const { weather, forecast } = useWeather()
  const { favorites, isFavorite, setIsFavorite, setFavorites } = useFavorites()

  useEffect(() => {
    document.body.setAttribute('data-theme', themeDark ? 'dark': 'light')
  }, [themeDark])

  const handleChangeFavorite = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    if(!weather) return

    const index = favorites.findIndex((favorite: Favorite) => favorite.city === weather.city)

    if(index === -1) {
      const newFavorites = {
        city: weather.city,
        temperature: weather.temperature,
        temperatureMax: weather.temperatureMax,
        temperatureMin: weather.temperatureMin,
        weatherIcon: weather.icon
      }
      setFavorites([...favorites, newFavorites])
    } else {
      const updatedFavorites = [...favorites.slice(0, index), ...favorites.slice(index + 1)]
      setFavorites(updatedFavorites)
    }

    localStorage.setItem('favorites', JSON.stringify(favorites))
    setIsFavorite(!isFavorite)
  }

  const mountedStyle = {
    animation: 'inVisibility 0.4s ease-in'
  }

  const unmountedStyle = {
    animation: 'outVisibility 0.4s ease-out',
    animationFillMode: 'forwards'
  }

  return (
    <div>
      <div className='aside-main-container'>
        <aside className='aside-container'>
          <Favorites favorites={favorites} />
        </aside>
        <main>
          <div className='header-container'>
            <SuggestionsProvider>
              <Search />
            </SuggestionsProvider>
            <Switch themeDark={themeDark} setThemeDark={setThemeDark}/>
          </div>
          {weather && (
            <div className='main-wrapper'>
              <button name='favorite-button' className='favorite-button' type="button" onClick={(event) => handleChangeFavorite(event)}>
                {isFavorite ? 
                  <FaStar className='favorite-icon' style={isFavorite ? mountedStyle : unmountedStyle} /> 
                  : 
                  <FaRegStar className='favorite-icon' style={isFavorite ? unmountedStyle : mountedStyle} />
                }
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