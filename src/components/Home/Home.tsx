
import useWeather from '../../hooks/useWeather'
import useForecast from '../../hooks/useForecast'

import Favorites from '../Favorites'
import CurrentWeather from '../CurrentWeather'
import Weather from '../Weather'
import './Home.css'

function Home () {
  const { weather } = useWeather()
  const { forecast } = useForecast()

  return (
    <div>
      <div className='aside-main-container'>
        <aside className='aside-container'>
          <Favorites />
        </aside>
        <main>
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