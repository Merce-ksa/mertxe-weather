import { useEffect, useState } from 'react'
import { getPermissionsLocation } from './helpers/getUserLocation'

import Home from './components/Home'
import Search from './components/Search'
import Switch from './components/Switch'
import './App.css'
import { SuggestionsProvider } from './context/suggestions'

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
        <SuggestionsProvider>
          <Search />
        </SuggestionsProvider>
        <Switch themeDark={themeDark} setThemeDark={setThemeDark}/>
      </div>
      <Home />
    </div>

  )
}

export default App
