import {Header} from "../components/Header.tsx"
import { Post } from "../components/Post.tsx"
import { NewPost } from "../components/NewPost.tsx"

export function Diary() {
    const posts = [
        {
            name: "The post name and some more typing can be done here to check how the thing works",
            content: "hello"
        },
        {
            name: "Nice weather outside, hello people i wanted to say that",
            content: "everything is fine"
        },
        {
            name: "post Name",
            content: "content here"
        },
    ]
    return (
        <div className="relative">
            <Header text="My diary"/>
            <div>
                {posts.map((post) =>
                    <Post postContent={post.content} postName={post.name}/>
                )}
            </div>
            <div className="fixed bottom-3 right-5">
                <NewPost/>
            </div>
        </div>
    )
}
