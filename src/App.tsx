import { useEffect, useState } from 'react'
import './App.css'
import Switch from './components/Switch'
import Search from './components/Search'

function App() {
  const [themeDark, setThemeDark] = useState<boolean>(false)

  useEffect(() => {
    document.body.setAttribute('data-theme', themeDark ? 'dark': 'light')
  }, [themeDark])
  
  return (
    <div>
      <Switch themeDark={themeDark} setThemeDark={setThemeDark} />
      <h1>WEATHER APP</h1>
      <Search />
    </div>
  )
}

export default App
