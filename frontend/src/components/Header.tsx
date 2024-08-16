import { NavLink } from "react-router-dom"

interface HeaderProps {
    text?: string
    rightProfile?: string
  }

export function Header ({
    text,
    rightProfile = "/userbutton.png",
}: HeaderProps) {
    return (
        <div className="flex h-12 justify-between items-center mx-auto bg-dark font-medium">
            <button className="ml-3"><img src="/menu.png" alt="Menu Button" /></button>
            <div>{text}</div>
            <NavLink to="/user" className="mr-2"><img src={rightProfile} alt="User Button" /></NavLink>
        </div>
    )
}
