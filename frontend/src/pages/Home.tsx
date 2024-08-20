import { Header } from "../components/Header.tsx";

export function Home() {
    return (
        <div>
            <Header text="Main page"/>
            <div className="static">
                <div className="font-code mt-10 w-screen text-center">
                    <p className="text-8xl">MR. SILLY CAT</p>
                    <div className="mt-10">PLACE FOR SOME MORE CONTENT</div>
                    <p className="text-4xl mt-10">Hello user!</p>
                    <div className="text-1xl text-center mt-5 mx-36">
                        <p>It's a website for my game which you, hopefully, will be able to play soon. If you want to learn a bit more about the game stay here!</p>
                        <p>This website is a study project, so there may be some bugs here and there. Talking about this site. Here are 3 pages. Diary page will tell you more about the lore. On For Friends page you'll find my friend's posts. About page is mostly me rambling about the work.</p>
                        <p>To get a "friend" status you can either: be my friend, or: contact me and ask for the status update. Then you'll ba able to create your own posts. But for now, on every page you can leave comments bellow posts where it's allowed.</p>
                        <p>Be careful about what you say.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
