import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WeatherProvider } from './context/weather.tsx'
import { LightDarkThemeProvider } from './context/lightDarkTheme.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LightDarkThemeProvider>
      <WeatherProvider>
        <App />
      </WeatherProvider>
    </LightDarkThemeProvider>
  </React.StrictMode>
)
