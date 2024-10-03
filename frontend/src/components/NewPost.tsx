import { useState } from "react"
import { TextBox } from "./TextBox"

export function NewPost () {

    const [isOpened, setIsOpened] = useState<boolean>(false)

    return(
        <div>
            <div>
                <button 
                    onClick={() => setIsOpened(!isOpened)}
                    className=""
                >
                    {!isOpened? <img className="rounded-full hover:border-2" src="/new_post.png" alt="New Post" /> : <img className="bg-lighter p-2 rounded-full hover:border-2" src="cansel_button.png" alt="Close" />}
                </button>
                <div className="bg-darker rounded">{isOpened && <TextBox/>}</div>
            </div>
        </div>
    )
}
