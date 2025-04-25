import { useState } from "react"
import { CommAndPostMenu } from "./CommAndPostMenu"

interface CommentProps {
    userName?: string;
    commentText?: string;
  }

export function Comment ({ 
    userName = "The name of a user that left a comment is here", 
    commentText = "So the overall text is here...",
  }: CommentProps) {

    const [isMenuShown, setIsMenuShown] = useState<boolean>(false)

    const toggleMenu = () => setIsMenuShown(prev => !prev);

    return (
        <div className="h-fit flex bg-dark mt-5 p-5 rounded-lg">
            <img className="w-20 h-20 float-left mr-5 " src={"/account pic/4.png"} alt="Account picture" />
            <div>
                <p className="font-semibold mb-3">{userName}</p>
                <p className="text-justify">{commentText}</p>
            </div>
            <button onClick={toggleMenu} className="items-center pl-2 h-7 w-11 rounded hover:bg-light"><img className="h-3.5" src="/CommentAndPostOptions.png" alt="Options"/></button>
            <div>{isMenuShown && <CommAndPostMenu/>}</div>
        </div>
    )
}
