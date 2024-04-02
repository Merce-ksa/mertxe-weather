
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'

import IconText, { IconTextProps } from './IconText'
import { WiWindDeg } from 'react-icons/wi'
import WEATHER from '../../mocks/weatherMock'

function customRender(props: IconTextProps) {
  return render(
    <IconText
      icon = {props.icon}
      info = {props.info}
      isTitle = {props.isTitle}
    />
  )
}

const initialProps = {
  icon: <WiWindDeg />,
  info:  WEATHER.temperature.toString()
}

describe('Given a IconText component', ()=> {
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

  describe('When is rendered with isTitle props to equal true', () => {
    it('Then the class name to be icon-text-primary', () => {
      const props = {
        ...initialProps,
        isTitle: true,
      }

      const { getByTestId } = customRender(props)

      expect(getByTestId('icon-text').className.split(' ')[1]).toBe('icon-text-primary')
    })
  })
})  