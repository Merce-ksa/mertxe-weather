import { useEffect, useState } from 'react'
import './App.css'
import { getPermissionsLocation } from './helpers/getUserLocation'
import Home from './components/Home'
import Search from './components/Search'
import Switch from './components/Switch'

function App() {
  const [themeDark, setThemeDark] = useState<boolean>(false)

  useEffect(() => {
    getPermissionsLocation()
  }, [])

  useEffect(() => {
    document.body.setAttribute('data-theme', themeDark ? 'dark': 'light')
  }, [themeDark])

  return (
    <section className='main'>
      <div className='header-container'>
        <div></div>
        <Search />
        <Switch themeDark={themeDark} setThemeDark={setThemeDark}/>
      </div>
      <Home />
    </section>

  )
}

export default App
