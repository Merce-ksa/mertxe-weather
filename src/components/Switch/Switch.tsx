import './Switch.css'
import '../../theme/animations.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md'

const Switch = ({themeDark, setThemeDark}: SwitchProps) => {
  
  const handleChangeTheme = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    setThemeDark(!themeDark)
  }
  
  const mountedStyle = {
    animation: 'inVisibility 0.4s ease-in'
  }

  const unmountedStyle = {
    animation: 'outVisibility 0.4s ease-out',
    animationFillMode: 'forwards'
  }

  
  return (
    <div id='switch' className='switch' data-testid='switchWrapper'>
      <button
        id='switch-btn'
        type='button'
        onClick={(event) => handleChangeTheme(event)}
        className='switch-theme-button'
      >
        {themeDark ? 
          <MdLightMode className='theme-icon' style={themeDark ? mountedStyle : unmountedStyle} /> 
          : 
          <MdDarkMode className='theme-icon' style={themeDark ? unmountedStyle : mountedStyle} />
        }
      </button>
    </div>
  )
}

export interface SwitchProps {
  themeDark: boolean
  setThemeDark: (theme: boolean) => void
}


export default Switch