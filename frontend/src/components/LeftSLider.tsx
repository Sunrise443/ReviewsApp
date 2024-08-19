import { NavLink } from "react-router-dom"

interface SliderProps {
    width: string
}

export function LeftSlider ({
    width,
}: SliderProps) {

    return (
        <div className="bg-light h-screen p-8 text-white" style={{ height: innerHeight - 48 , width: width}}>
            <ul>
                <li><NavLink to="/diary">Diary</NavLink></li>
                <li><NavLink to='/friendsposts'>For Friends</NavLink></li>
                <li><NavLink to="/">About</NavLink></li>
            </ul>
        </div>
    )
}
