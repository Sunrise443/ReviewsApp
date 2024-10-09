import {Header} from "../components/Header.tsx"
import { Post } from "../components/Post.tsx"

export function ForFriends() {
    return (
        <div>
            <Header text="You probably can't post here"/>
            <div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
