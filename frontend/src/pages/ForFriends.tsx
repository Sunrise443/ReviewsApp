import {Header} from "../components/Header.tsx"
import { Post } from "../components/Post.tsx"

export function ForFriends() {
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
        <div>
            <Header text="You probably can't post here"/>
            <div>
                {posts.map((post) =>
                    <Post postContent={post.content} postName={post.name}/>
                )}
            </div>
        </div>
    )
}
