import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WeatherProvider } from './context/weather.tsx'
import { ForecastProvider } from './context/forecast.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ForecastProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </ForecastProvider>
  </React.StrictMode>
)
