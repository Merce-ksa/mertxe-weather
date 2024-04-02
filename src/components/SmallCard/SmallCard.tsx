import formatUrlImage from '../../helpers/formatUrlImage'
import './SmallCard.css'

function SmallCard ({
  city, 
  temperature, 
  temperatureMin, 
  temperatureMax, 
  icon}: SmallCardProps) {
 
  return (
    <div className="small-card-container">
      <p className='city-name'>{city}</p>
      <div className="icon-weather">
        <img src={formatUrlImage(icon)} alt="icon resum weather" />
        <p className="small-card-temperature">{`${temperature.toFixed(1)}º`}</p>
      </div>
      <p className='minMax-temperature'>{`Min. ${temperatureMin.toFixed(1)}º Max. ${temperatureMax.toFixed(1)}º`}</p>
    </div>
  )
}

export interface SmallCardProps {
    city: string
    temperature: number
    temperatureMin: number
    temperatureMax: number
    icon: string
}

export default SmallCard