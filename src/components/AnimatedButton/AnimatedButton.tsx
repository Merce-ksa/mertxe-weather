import { IconType } from 'react-icons'
import '../../theme/animations.css'
import './AnimatedButton.css'

function AnimatedButton({isTruthy, IconIsTruthy, IconIsFalsy, extraClass}: AnimatedButtonProps) {
  const mountedStyle = {
    animation: 'inVisibility 0.4s ease-in'
  }
    
  const unmountedStyle = {
    animation: 'outVisibility 0.4s ease-out',
    animationFillMode: 'forwards'
  }
  return (
    <>
      {isTruthy ? 
        <IconIsTruthy 
          className={`theme-icon ${extraClass}`} 
          style={isTruthy ? mountedStyle : unmountedStyle} 
        />
        : 
        <IconIsFalsy 
          className={`theme-icon ${extraClass}`} 
          style={isTruthy ? unmountedStyle : mountedStyle} 
        />
      }
    </>
  )
}

interface AnimatedButtonProps {
    isTruthy: boolean
    IconIsTruthy: IconType
    IconIsFalsy: IconType
    extraClass?: string
}

export default AnimatedButton