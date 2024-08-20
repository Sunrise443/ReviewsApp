import { NavLink } from "react-router-dom"


export function LeftSlider (){

    return (
        <div className="bg-light absolute h-screen w-72 text-white" style={{ height: innerHeight - 48}}>
            <ul className="font-semibold ml-7 mt-8">
                <li className="mb-3 px-3 py-2 rounded-full hover:bg-lighter w-min"><NavLink to="/diary">Diary</NavLink></li>
                <li className="mb-3 px-3 py-2 rounded-full hover:bg-lighter w-min"><NavLink to='/friendsposts'>For Friends</NavLink></li>
                <li className="mb-3 px-3 py-2 rounded-full hover:bg-lighter w-min"><NavLink to="/">About</NavLink></li>
            </ul>
        </div>
    )
}
