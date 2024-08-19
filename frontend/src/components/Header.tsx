import { useState } from "react"
import { NavLink } from "react-router-dom"

import { LeftSlider } from "../components/LeftSLider.tsx"


interface HeaderProps {
    text?: string
    rightProfile?: string
  }

export function Header ({
    text,
    rightProfile = "/userbutton.png",
}: HeaderProps) {
    
    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [sliderWidth, setSliderWidth] = useState<string>("w-0")

    function openOnClick() {
        setIsOpened(!isOpened)
        console.log(isOpened)
        if (isOpened==true) {
            setSliderWidth("w-72")
        } else {
            setSliderWidth("w-0")
        }
    }

    return (
        <div>
            <div className="flex h-12 justify-between items-center mx-auto bg-dark font-medium">
                <button className="ml-3" onClick={openOnClick}><img src="/menu.png" alt="Menu Button" /></button>
                <div>{text}</div>
                <NavLink to="/user" className="mr-2"><img src={rightProfile} alt="User Button" /></NavLink>
            </div>
            <div className="absolute">
                <LeftSlider width={sliderWidth}/>
            </div>
        </div>
    )
}
