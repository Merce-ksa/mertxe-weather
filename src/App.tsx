import { useEffect, useState } from 'react'
import './App.css'
import { getPermissionsLocation } from './helpers/getUserLocation'
import Home from './components/Home'

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
      <Home />
    </section>

  )
}

export default App
