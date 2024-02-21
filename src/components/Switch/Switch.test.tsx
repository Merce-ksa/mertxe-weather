import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Switch from '.'


describe('Given a Page screen', () => {
  describe('When is rendered', () => {
    it('Then the component should be defined', () => {
      render(<Switch theme={'light'} setTheme={jest.fn()} />)

      const wrapper = screen.getByTestId('switch')

      expect(wrapper).toBeDefined()
    })
  })
})