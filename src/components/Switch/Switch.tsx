import './Switch.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const Switch = ({themeDark, setThemeDark}: SwitchProps) => {
  
  const handleChangeTheme = (event) => {
    event.preventDefault()

    setThemeDark(!themeDark)
  }
  
  return (
    <div id='switch'>
      <button
        id='switch-btn'
        type='button'
        onClick={(event) => handleChangeTheme(event)}
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