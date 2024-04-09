import { ReactNode, createContext, useState } from 'react'

export interface lightDarkThemeContextType {
  isDarkTheme: boolean
  setIsDarkTheme: (isDark: boolean) => void
}

export const LightDarkThemeContext = createContext<lightDarkThemeContextType>({} as lightDarkThemeContextType)

export function LightDarkThemeProvider ({children}: { children: ReactNode }) {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false)
  
  return (
    <LightDarkThemeContext.Provider value={{
      isDarkTheme,
      setIsDarkTheme
    }}>
      {children}
    </LightDarkThemeContext.Provider>
  )
}