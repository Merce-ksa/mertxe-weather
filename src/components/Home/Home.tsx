
import { useEffect, useState } from 'react'
import useWeather from '../../hooks/useWeather'
import { SuggestionsProvider } from '../../context/suggestions'

import CurrentWeather from '../CurrentWeather'
import Weather from '../Weather'
import Favorites from '../Favorites'
import Search from '../Search'
import Switch from '../Switch'
import './Home.css'

function Home () {
  const [themeDark, setThemeDark] = useState<boolean>(false)
  const { weather, forecast } = useWeather()

  useEffect(() => {
    document.body.setAttribute('data-theme', themeDark ? 'dark': 'light')
  }, [themeDark])
  

  return (
    <div>
      <div className='aside-main-container'>
        <aside className='aside-container'>
          <Favorites />
        </aside>
        <main>
          <div className='header-container'>
            <SuggestionsProvider>
              <Search />
            </SuggestionsProvider>
            <Switch themeDark={themeDark} setThemeDark={setThemeDark}/>
          </div>
          {weather && (
            <>
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
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default Home