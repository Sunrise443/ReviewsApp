import { useState } from "react"
import { CommAndPostMenu } from "./CommAndPostMenu"

export function Comment () {
    const [isShown, setIsShown] = useState<boolean>(false)

    return (
        <div className="h-fit flex bg-dark mt-5 p-5 rounded-lg">
            <img className="w-20 h-20 float-left mr-5 " src="/account pic/4.png" alt="Account picture" />
            <div>
                <p className="font-semibold mb-3">The name of a user that left a comment is here</p>
                <p className="text-justify">So the overall text is here and it shows how the comment works. There will not be a function of adding pictures here, but i'll have to add a person's profile</p>
            </div>
            <button onClick={() => setIsShown(!isShown)} className="items-center pl-2 h-7 w-11 rounded hover:bg-light"><img className="h-3.5" src="/CommentAndPostOptions.png" alt="Options"/></button>
            <div>{isShown && <CommAndPostMenu/>}</div>
        </div>
    )
}
