export function Post () {
    return (
        <div className="w-screen h-fit bg-black text-white m-10 p-5">
            <div className="flex">
                <img src="../public/smol.png" alt="Picture" />
                <div className="pl-10">
                    <h1>The post name</h1>
                    <h2 className="mt-5">The post text can be long</h2>
                </div>
            </div>
            <h1>Dropdown comments ^</h1>
        </div>
    )
}
