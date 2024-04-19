import './Switch.css'
import '../../theme/animations.css'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import useLightDarkTheme from '../../hooks/useLightDarkTheme'
import AnimatedButton from '../AnimatedButton'

const Switch = () => {
  const {isDarkTheme, setIsDarkTheme} = useLightDarkTheme()
  
  const handleChangeTheme = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    setIsDarkTheme(!isDarkTheme)
  }
    
  return (
    <div id='switch' className='switch' data-testid='switchWrapper'>
      <button
        id='switch-btn'
        type='button'
        onClick={(event) => handleChangeTheme(event)}
        className='switch-theme-button'
      >
        <AnimatedButton 
          isTruthy={isDarkTheme} 
          IconIsTruthy={MdLightMode} 
          IconIsFalsy={MdDarkMode} 
        />
      </button>
    </div>
  )
}



export default Switch