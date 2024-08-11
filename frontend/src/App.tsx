import {Header} from "./components/Header"
import { LeftSlider } from "./components/LeftSLider"
import { Post } from "./components/Post"

const App = () => {
    return (
        <div>
            <Header leftSlider="---" text="MainPage" rightProfile="O"/>
            <div className="flex">
                <LeftSlider/>
                <Post/>
            </div>
        </div>
    )
}

export default App
