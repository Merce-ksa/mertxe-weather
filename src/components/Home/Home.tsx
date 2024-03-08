import formatterIcons from '../../helpers/formatterIcons'
import useCoordinates from '../../hooks/useCoordinates'
import { TbTemperaturePlus, TbTemperatureMinus } from 'react-icons/tb'

import './Home.css'
import useWeather from '../../hooks/useWeather'
import { useEffect } from 'react'
import UNITS from '../../constants/units'

function Home () {
  const { coordinates } = useCoordinates()
  const { weather, getWeather } = useWeather()
  
  useEffect(() => {
    if (coordinates.length) {
      getWeather(coordinates, UNITS.METRIC)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coordinates])
  
  return (
    weather && (
      <div className="container">
        <h2 className='brand-secondary'>MyWeather</h2>
        <h3>{weather.city}</h3>
        {coordinates &&(<p>{`Coordenadas navegador ${coordinates[0]}, ${coordinates[1]}`}</p>)}
        <p>{`${weather.temperature} C`}</p>
        <img src={formatterIcons(weather.icon)} alt="weather icon"></img>
        <p><TbTemperaturePlus /> {`${weather.temperatureMax} C`}</p>
        <p><TbTemperatureMinus /> {`${weather.temperatureMin} C`}</p>
        <p>{`${weather.windSpeed} km/h`}</p>
      </div>
    )
  )
}

export default Home
