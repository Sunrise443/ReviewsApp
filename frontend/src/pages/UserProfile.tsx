import {Header} from "../components/Header.tsx"

export function UserProfile() {
    return (
        <div>
            <Header text="Your Profile" rightProfile="/reloadbutton.png"/>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center w-auto rounded-full m-20 bg-light">
                    <img className="m-10 w-64 h-64 border rounded-full" src="/account pic/4.png" alt="UserPicture" />
                    <div>
                        <ul className="pr-10">
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
