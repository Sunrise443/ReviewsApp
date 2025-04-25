import { useState } from "react"
import {Header} from "../components/Header.tsx"

export function UserProfile() {
    const [person, setPerson] = useState({
        name: 'DefaultName',
        status: 'Guest',
        about: 'Info',
        avatar: '/account pic/4.png'
    })
    return (
        <div>
            <Header text="Your Profile" rightProfile="/reloadbutton.png"/>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-auto rounded-full m-20 bg-light">
                    <img className="m-10 w-64 h-64 border rounded-full" src={person.avatar} alt="UserPicture" />
                    <div>
                        <ul className="pr-10">
                            <li>Name: {person.name}</li>
                            <li>Status: {person.status}</li>
                            <li>About: {person.about}s</li>
                        </ul>
                        <button className="px-3 py-1 rounded-full hover:bg-lighter">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
