import './IconInfo.css'

function IconInfo ({ icon, info }: IconInfoProps) {
 
  return (
    <div className="icon-info">
      {icon}
      <p>{info}</p>
    </div>
    
  )
}

export interface IconInfoProps {
    icon: React.ReactNode
    info: string
}

export default IconInfo