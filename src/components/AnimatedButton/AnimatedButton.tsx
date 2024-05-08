import { IconType } from 'react-icons'
import '../../theme/animations.css'
import './AnimatedButton.css'

function AnimatedButton({ isTruthy, IconIsTruthy, IconIsFalsy, extraClass }: AnimatedButtonProps) {
  return (
    <>
      {isTruthy ? 
        <IconIsTruthy 
          className={`
            theme-icon 
            icon-is-truthy 
            ${isTruthy ? 'in-visibility-animation' : 'out-visibility-animation'}
            ${extraClass && ''} 
          `}
        />
        : 
        <IconIsFalsy 
          className={`
            theme-icon
            icon-is-falsy 
            ${isTruthy ? 'out-visibility-animation' : 'in-visibility-animation'}
            ${extraClass && ''} 
          `}
        />
      }
    </>
  )
}

export interface AnimatedButtonProps {
    isTruthy: boolean
    IconIsTruthy: IconType
    IconIsFalsy: IconType
    extraClass?: string
}

export default AnimatedButton