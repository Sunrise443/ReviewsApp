import {Header} from "../components/Header.tsx"

export function UserProfile() {
    return (
        <div>
            <Header text="Your Profile" rightProfile="/reloadbutton.png"/>
            <div className="flex">
                <div className="flex justify-center items-center w-screen rounded-full w-screen m-20 bg-light">
                    <img className="m-10" src="/smol.png" alt="UserPicture" />
                    <div>
                        <ul className="">
                            <li>Name: Sunny</li>
                            <li>Status: Friend</li>
                            <li>About: Jokes</li>
                            <li>Password: 232309</li>
                        </ul>
                        <button className="px-3 py-1 rounded-full hover:bg-lighter">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
