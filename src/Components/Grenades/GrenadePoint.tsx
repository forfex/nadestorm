import { ThemeIcon } from "@mantine/core"
import { useState } from "react"
import { FaCloud } from "react-icons/fa"
import { GiFlashGrenade, GiGrenade, GiStunGrenade, GiFireRing } from "react-icons/gi"

export function GrenadePoint(props: any) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleIconClick = () => {
    setIsPopupOpen(!isPopupOpen);
  }

  const getIcon = () => {
    switch (props.type) {
      case "smoke": return <FaCloud/>
      case "nade": return <GiGrenade/>
      case "flash": return <GiFlashGrenade/>
      case "fire": return <GiFireRing/>
      default:
        break;
    }
  }

  const getIconColor = () => {
    switch (props.type) {
      case "smoke": return "gray"
      case "nade": return "cyan"
      case "flash": return "grape"
      case "fire": return "orange"
      default:
        break;
    }
  }

  return (
    <ThemeIcon variant="outline" radius="xl" color={getIconColor()}>
    {getIcon()}
    </ThemeIcon>
  )
}