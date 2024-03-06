import formatterIcons from '../../helpers/formatterIcons'
import useCoordinates from '../../hooks/useCoordinates'
import WEATHER_MOCK from '../../mocks/weatherMock'
import { TbTemperaturePlus, TbTemperatureMinus } from 'react-icons/tb'

import './Home.css'
import useWeather from '../../hooks/useWeather'
import { useEffect } from 'react'

function Home () {
  const { coordinates } = useCoordinates()
  const { weather, getWeather } = useWeather()
  
  useEffect(() => {
    if (coordinates) {
      getWeather(coordinates, 'metric')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates])

  return (
    <div className="container">
      <h2 className='brand-secondary'>MyWeather</h2>
      <h3>{WEATHER_MOCK.name}</h3>
      {coordinates &&(<p>{`Coordenadas navegador ${coordinates[0]}, ${coordinates[1]}`}</p>)}
      <p>{`${WEATHER_MOCK.main.temp} C`}</p>
      <img src={formatterIcons(WEATHER_MOCK.weather[0].icon)} alt="weather icon"></img>
      <p><TbTemperaturePlus /> {`${WEATHER_MOCK.main.temp_max} C`}</p>
      <p><TbTemperatureMinus /> {`${WEATHER_MOCK.main.temp_min} C`}</p>
      <p>{`${WEATHER_MOCK.wind.speed} km/h`}</p>
    </div>
  )
}

export default Home
