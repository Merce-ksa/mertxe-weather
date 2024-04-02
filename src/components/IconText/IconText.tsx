import './IconText.css'

function IconText ({ icon, info, isTitle = false }: IconTextProps) {
  const wrapperClass: string = isTitle ? 'icon-text-primary' : 'icon-text-secondary'
  
  return (
    <div className={`icon-text-wrapper ${wrapperClass}`} data-testid='icon-text'>
      {icon}
      <p>{info}</p>
    </div>
    
  )
}

export interface IconTextProps {
    icon: React.ReactNode
    info: string
    isTitle?: boolean
}

export default IconText