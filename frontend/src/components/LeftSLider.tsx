import React from "react"
import { NavLink } from "react-router-dom"

export function LeftSlider () {
    return (
        <div className="bg-slate-800 w-72 h-screen p-8 mr-5 text-white">
            <ul>
                <li><NavLink to="/diary">Diary</NavLink></li>
                <li><NavLink to='/friendsposts'>For Friends</NavLink></li>
                <li><NavLink to="/">Main Page</NavLink></li>
            </ul>
        </div>
    )
}
