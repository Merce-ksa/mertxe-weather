
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
// import {screen} from '@testing-library/dom'

import Forecast, { ForecastProps } from './Forecast'
import FORECAST_MOCK from '../../mocks/forecastMock'

function customRender(props: ForecastProps) {
  return render(
    <Forecast
      forecastList = {props.forecastList}
    />
  )
}

const initialProps = {
  forecastList: FORECAST_MOCK.forecastList
}

describe('Given a Forecast component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the all tabs to be defined', () => {
      const {container} = customRender(initialProps)
        
      const tabsClassName = container.querySelectorAll('.react-tabs__tab')
      const totalTabs = Object.keys(FORECAST_MOCK.forecastList).length
      
      expect(tabsClassName).toHaveLength(totalTabs)
    })

    it('Then the first tab text to be Hoy', () => {
      const {container} = customRender(initialProps)

      const tabsClassName = container.querySelector('.react-tabs__tab')
      
      expect(tabsClassName?.textContent).toBe('Hoy')
    })

    it('Then the items to be defined', () => {
      const {container} = customRender(initialProps)

      const tabPanelClassName = container.querySelectorAll('.forecast-item')
      const tabsKeys = Object.keys(FORECAST_MOCK.forecastList)
      
      expect(tabPanelClassName).toHaveLength(FORECAST_MOCK.forecastList[tabsKeys[0]].length)
    })
  })
})