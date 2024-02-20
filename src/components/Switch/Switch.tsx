import Theme from '../../types/theme'
import './Switch.css'

const Switch = ({theme, setTheme}: Switch) => {
  
  const handleChangeTheme = (event) => {
    event.preventDefault()

    setTheme(event.target.value === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="container-switch">
      <button
        type='button'
        value={theme} 
        onClick={(event) => handleChangeTheme(event)}
      >
        {theme === 'light' ? '🌑' : '🌞'}
      </button>
    </div>
  )
}

interface Switch {
  theme: string
  setTheme: (theme: Theme) => void
}


export default Switch