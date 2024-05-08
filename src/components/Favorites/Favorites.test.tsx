
import { fireEvent, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import Favorites from '.'
import { FavoritesProps } from './Favorites'
import FAVORITES_MOCK from '../../mocks/favoritesMock'
import { WeatherContext, WeatherContextType } from '../../context/weather'
import WEATHER_MOCK from '../../mocks/weatherMock'
import FORECAST_MOCK from '../../mocks/forecastMock'

const weather_context_Mock: WeatherContextType = {
  weather: WEATHER_MOCK,
  forecast: FORECAST_MOCK,
  getWeatherByCoords: jest.fn(),
  getForecastByCoords: jest.fn(),
  getWeatherByCityName: jest.fn(),
  getForecastByCityName: jest.fn()
}

function customRender(weather: WeatherContextType,{ favorites }: FavoritesProps) {
  return render(
    <WeatherContext.Provider value={weather}>
      <Favorites favorites = {favorites} />
    </WeatherContext.Provider>
  )
}

const initialProps = {
  favorites: FAVORITES_MOCK
}
  
describe('Given a Favorites component', ()=> {
  describe('When is rendered', ()=> {
    it('Then the city name to be defined', async () => {
      const { findByText } = customRender(weather_context_Mock, initialProps)

      await waitFor(() => expect(findByText('Madrid')).toBeDefined())
    })

    it('Then the temperature to be defined', async () => {
      const { findByText } = customRender(weather_context_Mock, initialProps)

      await waitFor(() => expect(findByText(/^12.21/)).toBeDefined())
    })

    it('Then the all locations to be defined', () => {
      const { container } = customRender(weather_context_Mock, initialProps)
        
      const favoritesClassName = container.querySelectorAll('.favorites-list-item')
      const totalFavorites = initialProps.favorites.length
      
      expect(favoritesClassName).toHaveLength(totalFavorites)
    })
  })

  describe('When the user user presses on favorite item', ()=> {
    it('Then the getWeatherByCityName function should be called', () => {
      const { getByTestId } = customRender(weather_context_Mock, initialProps)
      const selectedFavorite = getByTestId('favorite-item-Barcelona')
      
      fireEvent.click(selectedFavorite)
      
      expect(weather_context_Mock.getWeatherByCityName).toHaveBeenCalledWith('Barcelona', 'metric');
    })
    
  })
})
