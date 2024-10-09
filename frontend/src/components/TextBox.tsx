export function TextBox () {
    return(
        <div>
            <div className="p-1">
                <textarea placeholder="Meow" className="bg-lighter p-1 h-48 w-64"/>
            </div>
            <div>
                <input type="file" accept=".jpg, .png, .gif, .pdf"/>
            </div>
            <button
                className="w-24 rounded bg-lighter m-2 hover:bg-light"
            >
                Post
            </button>
        </div>
    )
}
