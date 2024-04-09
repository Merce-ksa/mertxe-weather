import { useContext, useEffect } from 'react'
import { LightDarkThemeContext } from '../context/lightDarkTheme'

function useLightDarkTheme () {
  const {isDarkTheme, setIsDarkTheme} = useContext(LightDarkThemeContext)
  
  useEffect(() => {
    document.body.setAttribute('data-theme', isDarkTheme ? 'dark': 'light')
  }, [isDarkTheme])

  return {isDarkTheme, setIsDarkTheme}
}

export default useLightDarkTheme