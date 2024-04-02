import { WiRaindrop } from 'react-icons/wi'
import { BsWind, BsUmbrella, BsThermometerHalf } from 'react-icons/bs'
import { IoIosSnow } from 'react-icons/io'
import formatUrlImage from '../../helpers/formatUrlImage'
import IconText from '../IconText'
import './Forecast.css'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import { WeatherForecastItem } from '../../types/forecast'
import { formatDateToDayMonth } from '../../helpers/formatDate'


function Forecast ({forecastList}: ForecastProps) {

  const forecastListKeys = Object.keys(forecastList)
  
  return (
    <Tabs>
      <TabList>
        {forecastListKeys.length && forecastListKeys.map((date, index) => 
          index === 0 ? (
            <Tab key={`${date}-${index}`}>Hoy</Tab>
          ) : (
            <Tab key={`${date}-${index}`}>{formatDateToDayMonth(date)}</Tab>
          )
        )}
      </TabList>
    
      {forecastListKeys.length && forecastListKeys.map((date: string, index: number) => (
        <TabPanel key={`${date}-${index}`}>
          
          {forecastList[date].length && forecastList[date].map((item: WeatherForecastItem, index: number ) => (
            <div key={`${item.date}-${index}`} className='forecast-item'>
              <p className='forecast-time'>{`${item.date.split(' ')[1].split(':')[0]} h`}</p>
              <img src={formatUrlImage(item.icon)} alt="icon resum weather" className='forecast-icon' />  
              <IconText icon={<BsThermometerHalf />} info={`${item.temperature.toFixed(1)} ºC`} />
              <IconText icon={<BsWind />} info={`${item.windSpeed} km/h`} />
              <IconText icon={<BsUmbrella />} info={`${item.precipitationProbability * 100} %`} />
              {item.rain &&<IconText icon={<WiRaindrop />} info={`${item.rain} mm`} />}
              {item.snow &&<IconText icon={<IoIosSnow />} info={`${item.snow} mm`} />}
            </div>
          ))}

        </TabPanel>
      ))}

    </Tabs>
  )
}

export interface ForecastProps {
    forecastList: { [date: string]: WeatherForecastItem[] }
}

export default Forecast