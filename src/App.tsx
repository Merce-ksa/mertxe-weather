import { useEffect } from 'react'
import { getPermissionsLocation } from './helpers/getUserLocation'

import Home from './components/Home'
import './App.css'

function App() {

  useEffect(() => {
    getPermissionsLocation()
  }, [])

  return (
    <div className='wrapper'>
      <Home />
    </div>

  )
}

export default App
