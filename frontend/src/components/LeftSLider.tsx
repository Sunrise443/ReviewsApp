import { NavLink } from "react-router-dom"

export function LeftSlider () {
    return (
        <div className="bg-light w-72 h-screen p-8 text-white" style={{ height: innerHeight - 48 }}>
            <ul>
                <li><NavLink to="/diary">Diary</NavLink></li>
                <li><NavLink to='/friendsposts'>For Friends</NavLink></li>
                <li><NavLink to="/">Home Page</NavLink></li>
            </ul>
        </div>
    )
}
