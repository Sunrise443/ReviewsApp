import { useState } from "react"
import { useNavigate } from "react-router-dom"

import api from "../api"
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../Constants"


interface UserFormProps {
    route: string
    method: string
}

export function UserForm ({
    route,
    method
}: UserFormProps) {

    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const navigate: any = useNavigate()

    const formName = (method === "login" ? "Login" : "Register")

    const handleSubmit = async (e: any) => {
        setLoading(true)
        e.preventDefault()
        
        try { 
            const res = await api.post(route, {username, password})
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/user")
            } else {
                navigate("/login")
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    }

    return(
        <form onSubmit={handleSubmit} className="form-container">
            <p>{formName}</p>
            <input 
                type="text"
                className="form-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="password"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button className="form-button" type="submit">{formName}</button>
        </form>
    )
}
