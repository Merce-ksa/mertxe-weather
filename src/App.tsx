import { useEffect, useState } from 'react'
import { getPermissionsLocation } from './helpers/getUserLocation'

import Search from './components/Search'
import Switch from './components/Switch'
import Favorites from './components/Favorites'
import Forecast from './components/Forecast'
import './App.css'

function App() {
  const [themeDark, setThemeDark] = useState<boolean>(false)

  useEffect(() => {
    getPermissionsLocation()
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-theme', themeDark ? 'dark': 'light')
  }, [themeDark])

  return (
    <div className='wrapper'>
      <div className='header-container'>
        <Search />
        <Switch themeDark={themeDark} setThemeDark={setThemeDark}/>
      </div>
      <div className='main-container'>
        <aside className='aside-container'>
          <Favorites />
        </aside>
        <main className='main-container'>
          <Forecast />
        </main>
      </div>
    </div>

  )
}

export default App
