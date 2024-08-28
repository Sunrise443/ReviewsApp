export function NotFound () {
    return(
        <div className="font-code flex justify-center h-screen">
            <div className="justify-center text-center h-screen">
                <p className="text-8xl mt-7 mb-2">Not Found</p>
                <p className="text-2xl">What have you even been looking for, huh?</p>
                <img src="/PageNotFound.png" alt="What?" className="w-4/12 fixed bottom-0" />
            </div>
        </div>
    )
}
