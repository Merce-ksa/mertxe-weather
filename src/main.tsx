import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { WeatherProvider } from './context/weather.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <WeatherProvider>
      <App />
    </WeatherProvider>,
  </React.StrictMode>, 
)
