import { useState } from "react"
import { Comments } from "./Comments"


export function Post () {
    const [isOpened, setIsOpened] = useState<boolean>(false)

    return (
        <div className="h-fit bg-light m-10 p-5 rounded-lg static">
            <div className="max-w-max min-h-64 overflow-clip bg-dar">
                <img className="float-left mr-8 mb-4 w-60" src="/smol.png" alt="Picture" />
                <p className="text-justify font-bold text-lg mb-3">The post name and some more typing can be done here to check how the thing works</p>
                <p className="text-justify">Hello</p>
            </div>
            <div className="sticky">
                <button className="flex bg-dark w-fit mt-3 rounded-xl p-2" onClick={() => setIsOpened(!isOpened)}>
                    <p className="mr-1 font-bold">Comments</p>
                    <img className="w-5 h-5" src="/commentsdown.png" alt="arrow"/>
                </button>
                <div>{isOpened && <Comments/>}</div>
            </div>
        </div>
    )
}
