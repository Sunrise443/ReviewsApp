import {Header} from "../components/Header.tsx"
import { Post } from "../components/Post.tsx"

export function Diary() {
    return (
        <div>
            <Header text="My diary"/>
            <div>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    )
}
