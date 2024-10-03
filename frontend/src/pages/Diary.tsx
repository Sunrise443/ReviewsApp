import {Header} from "../components/Header.tsx"
import { Post } from "../components/Post.tsx"
import { NewPost } from "../components/NewPost.tsx"

export function Diary() {
    return (
        <div className="relative">
            <Header text="My diary"/>
            <div>
                <Post/>
                <Post/>
                <Post/>
            </div>
            <div className="fixed bottom-3 right-5">
                <NewPost/>
            </div>
        </div>
    )
}
