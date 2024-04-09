import './Switch.css'
import '../../theme/animations.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import useLightDarkTheme from '../../hooks/useLightDarkTheme'

const Switch = () => {
  const {isDarkTheme, setIsDarkTheme} = useLightDarkTheme()
  
  const handleChangeTheme = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    setIsDarkTheme(!isDarkTheme)
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
        {isDarkTheme ? 
          <MdLightMode className='theme-icon' style={isDarkTheme ? mountedStyle : unmountedStyle} /> 
          : 
          <MdDarkMode className='theme-icon' style={isDarkTheme ? unmountedStyle : mountedStyle} />
        }
      </button>
    </div>
  )
}



export default Switch