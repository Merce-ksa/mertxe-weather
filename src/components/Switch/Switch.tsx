import Theme from '../../types/theme'
import './Switch.css'

const Switch = ({theme, setTheme}: SwitchProps) => {
  
  const handleChangeTheme = (event) => {
    event.preventDefault()

    setTheme(event.target.value === 'light' ? 'dark' : 'light')
  }

  return (
    <div id='switch'>
      <button
        id='switch-btn'
        type='button'
        value={theme} 
        onClick={(event) => handleChangeTheme(event)}
      >
        {theme === 'light' ? '🌑' : '🌞'}
      </button>
    </div>
  )
}

export interface SwitchProps {
  theme: string
  setTheme: (theme: Theme) => void
}


export default Switch