
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import AnimatedButton, { AnimatedButtonProps } from './AnimatedButton'
import { FaRegStar, FaStar } from 'react-icons/fa'

function customRender(props: AnimatedButtonProps) {
  return render(
    <AnimatedButton
      isTruthy = {props.isTruthy}
      IconIsTruthy = {props.IconIsTruthy}
      IconIsFalsy = {props.IconIsFalsy}
      extraClass = {props.extraClass}
    />
  )
}

const initialProps = {
  IconIsTruthy: FaRegStar,
  IconIsFalsy: FaStar
}

describe('Given a IconText component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the icon to be defined', () => {
      const props = {
        ...initialProps,
        isTruthy: true
      }
      
      const { container } = customRender(props)
      const svgIcon = container.querySelectorAll('svg')

      expect(svgIcon[0]).toBeDefined()
    })
  })

  describe('When it\'s rendered with the isTruthy property set to true', ()=> {
    it('Then the icon truthy to be defined', () => {
      const props = {
        ...initialProps,
        isTruthy: true
      }

      const { container } = customRender(props)
        
      const svgIcon = container.querySelectorAll('svg')

      expect(svgIcon[0].classList[1]).toBe('icon-is-truthy')
    })

    describe('When the isTruthy property changes to false', ()=> {
      it('Then the icon falsy to be defined', () => {
        const props = {
          ...initialProps,
          isTruthy: true
        }

        const { rerender, container } = customRender(props)

        rerender(<AnimatedButton isTruthy={false} IconIsTruthy={initialProps.IconIsTruthy} IconIsFalsy={initialProps.IconIsFalsy} />);
        const svgIcon = container.querySelectorAll('svg')

        expect(svgIcon[0].classList[1]).toBe('icon-is-falsy');
      })

      it('Then the animation in-visibility should be applied', () => {
        const props = {
          ...initialProps,
          isTruthy: true
        }

        const { rerender, container } = customRender(props)

        rerender(<AnimatedButton isTruthy={false} IconIsTruthy={initialProps.IconIsTruthy} IconIsFalsy={initialProps.IconIsFalsy} />);
        const svgIcon = container.querySelectorAll('svg')

        expect(svgIcon[0].classList[2]).toBe('in-visibility-animation');
      })
    })

  })

  describe('When it\'s rendered with the isTruthy property set to false', ()=> {
    it('Then the icon to be defined', () => {
      const props = {
        ...initialProps,
        isTruthy: true
      }

      const { container } = customRender(props)
        
      const svgIcon = container.querySelectorAll('svg')

      expect(svgIcon[0].classList[1]).toBe('icon-is-truthy')
    })
  })
})  