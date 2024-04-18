import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from './Home'
import { FavoritesContext, FavoritesContextType } from '../../context/favorites'
import WEATHER_MOCK from '../../mocks/weatherMock'
import { WeatherContext, WeatherContextType } from '../../context/weather'
import FORECAST_MOCK from '../../mocks/forecastMock'
import FAVORITE_MOCK from '../../mocks/favoritesMock'

function customRender(weather: WeatherContextType, favorites: FavoritesContextType) {
  return(
    render(
      <WeatherContext.Provider value={weather}>
        <FavoritesContext.Provider value={favorites}>
          <Home />
        </FavoritesContext.Provider>
      </WeatherContext.Provider>
    )
  )
}

const weather_context_Mock: WeatherContextType = {
  weather: WEATHER_MOCK,
  forecast: FORECAST_MOCK,
  getWeatherByCoords: jest.fn(),
  getForecastByCoords: jest.fn(),
  getWeatherByCityName: jest.fn(),
  getForecastByCityName: jest.fn()
}

const favorites_context_Mock: FavoritesContextType = {
  favorites: FAVORITE_MOCK,
  getStoredFavorites: jest.fn(),
  addFavorites: jest.fn(),
  removeFavorites: jest.fn()
}

describe('Given a Home component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the aside container to be defined', () => {
      const { container } = customRender(weather_context_Mock, favorites_context_Mock)
        
      const asideContainer = container.querySelectorAll('.aside-container')

      expect(asideContainer).toBeDefined()
    })

    it('Then the main container to be defined', () => {
      const { container } = customRender(weather_context_Mock, favorites_context_Mock)
        
      const asideContainer = container.querySelectorAll('.main-container')

      expect(asideContainer).toBeDefined()
    })
    
    it('Then the city name to be defined', () => {
      const { getByText } = customRender(weather_context_Mock, favorites_context_Mock)

      expect(getByText(WEATHER_MOCK.city)).toBeInTheDocument()
    })
  })

  describe('When the location is not in the favorites list', () => {
    it('Then the icon containing the non-favorite class should be displayed', () => {
      const { getByRole } = customRender(weather_context_Mock, favorites_context_Mock)

      const favoriteButtonWrapper = getByRole('favorite-button')

      expect(favoriteButtonWrapper.firstChild).toHaveClass('no-favorite')
    })
  })

  describe('When the user presses on favorite button', () => {
    it('Then the add function should be called', async () => {
      const { getByTestId } = customRender(weather_context_Mock, favorites_context_Mock)

      const favoriteAddButton = getByTestId('favorite-button')
      fireEvent.click(favoriteAddButton)

      expect(favorites_context_Mock.addFavorites).toHaveBeenCalled()
    })

    it('Then the favorite button must contain calss name is-favorite', async () => {
      const { getByTestId, getByRole } = customRender(weather_context_Mock, favorites_context_Mock)

      const favoriteAddButton = getByTestId('favorite-button')
      fireEvent.click(favoriteAddButton)
      
      const favoriteButtonWrapper = getByRole('favorite-button')

      await waitFor(() => expect(favoriteButtonWrapper.firstChild).toHaveClass('is-favorite'))
    })
  })
  
})