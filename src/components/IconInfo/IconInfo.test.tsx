
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'
import {screen} from '@testing-library/dom'

import IconInfo, { IconInfoProps } from './IconInfo'
import { WiWindDeg } from 'react-icons/wi'
import WEATHER from '../../mocks/weatherMock'

function customRender(props: IconInfoProps) {
  return render(
    <IconInfo
      icon = {props.icon}
      info = {props.info}
    />
  )
}

const initialProps = {
  icon: <WiWindDeg />,
  info:  WEATHER.temperature.toString()
}

describe('Given a IconInfo component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the icon to be defined', () => {
      const {container} = customRender(initialProps)
        
      const svgIcon = container.querySelectorAll('#Layer_1')

      expect(svgIcon).toBeDefined()
    })

    it('Then the text to be defined', () => {
      customRender(initialProps)
        
      const text = screen.getByText(WEATHER.temperature.toString())

      expect(text).toBeDefined()
    })
  })
})