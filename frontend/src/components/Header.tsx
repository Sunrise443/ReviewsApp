import { useState } from "react"
import { NavLink } from "react-router-dom"

import { LeftSlider } from "./LeftSLider"


interface HeaderProps {
    text?: string
    rightProfile?: string
  }

export function Header ({
    text,
    rightProfile = "/userbutton.png"
}: HeaderProps) {

    const [isOpened, setIsOpened] = useState<boolean>(false)

    return (
        <div>
            <div className="flex h-12 justify-between items-center mx-auto bg-dark font-semibold">
                <button className="p-1 ml-3" onClick={() => setIsOpened(!isOpened)}><img src="/menu.png" alt="Menu Button" /></button>
                <div>{text}</div>
                <NavLink to="/user" className="mr-2"><img src={rightProfile} alt="User Button" /></NavLink>
            </div>
            <div className="absolute">
            </div>
            <div className="truncate ease-in-out">{isOpened && <LeftSlider/>}</div>
        </div>
    )
}
