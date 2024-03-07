import './Switch.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const Switch = ({themeDark, setThemeDark}: SwitchProps) => {
  
  const handleChangeTheme = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    setThemeDark(!themeDark)
  }
  
  return (
    <div id='switch' data-testid='switchWrapper'>
      <button
        id='switch-btn'
        type='button'
        onClick={(event) => handleChangeTheme(event)}
        className='toggle-theme'
      >
        {themeDark ? <MdLightMode className='theme-icon' /> : <MdDarkMode className='theme-icon'/>}
      </button>
    </div>
  )
}

export interface SwitchProps {
  themeDark: boolean
  setThemeDark: (theme: boolean) => void
}


export default Switch