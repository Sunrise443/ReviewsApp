export function TextBox () {
    return(
        <div>
            <div className=" bg-dark rounded">
                <input
                    type="text"
                    className="w-64 h-48"
                />
            </div>
            <button
                className="w-24 rounded bg-dark m-2"
            >
                Post
            </button>
        </div>
    )
}
