import {Header} from "../components/Header.tsx"
import { LeftSlider } from "../components/LeftSLider.tsx"

export function Home() {
    return (
        <div>
            <Header text="Main page"/>
            <div className="flex">
                <LeftSlider />
                <div>Hello user!</div>
            </div>
        </div>
    )
}
