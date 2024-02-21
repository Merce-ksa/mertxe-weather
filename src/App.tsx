import { useEffect, useState } from 'react'
import './App.css'
import Switch from './components/Switch'
import Theme from './types/theme'

function App() {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <>
      <Switch theme={theme} setTheme={setTheme} />
      <h1>WEATHER APP</h1>
    </>
  )
}

export default App
