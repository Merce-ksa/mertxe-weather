import { useEffect } from 'react'
import Home from './components/Home'
import { getPermissionsLocation } from './helpers/getUserLocation'
import useCoordinates from './hooks/useCoordinates'
import useWeather from './hooks/useWeather'
import UNITS from './constants/units'
import './App.css'
import { FavoritesProvider } from './context/favorites'

function App() {
  const { coordinates } = useCoordinates()
  const { getWeatherByCoords, getForecastByCoords, getForecastByCityName, getWeatherByCityName } = useWeather()

  useEffect(() => {
    getPermissionsLocation()
  }, [])

  useEffect(() => {
    if (coordinates.length) {
      getWeatherByCoords(coordinates, UNITS.METRIC)
      getForecastByCoords(coordinates, UNITS.METRIC)
    } else {
      getWeatherByCityName('Barcelona', UNITS.METRIC)
      getForecastByCityName('Barcelona', UNITS.METRIC)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates])

  return (
    <div className='wrapper'>
      <FavoritesProvider>
        <Home />
      </FavoritesProvider>
    </div>

  )
}

export default App
