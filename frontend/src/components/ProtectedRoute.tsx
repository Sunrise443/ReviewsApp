import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

import api from "../api";
import { REFRESH_TOKEN, ACCESS_TOKEN } from "../Constants";
import { useState, useEffect } from "react";

interface children {
    children: any
}

export function ProtectedRoute({children}: children) {
    const [isAuthorized, setIsAuthorized] = useState<boolean>(false)

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, [])

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN)
        try {
            const res = await api.post("/api/token/refresh/", {refresh: refreshToken});
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            } else {
                setIsAuthorized(false)
            }
        } catch (error) {
            console.log(error)
            setIsAuthorized(false)
        }
    }

    const auth = async () => { //problem with this is that it's not very sequre. will need to fix in the next projects
        const token = localStorage.getItem(ACCESS_TOKEN)
        if (!token) {
            setIsAuthorized(false)
            return
        }
        const decoded = jwtDecode(token)
        const tokenExpiration: number = decoded.exp || 0
        const now = Date.now() / 1000

        if (tokenExpiration < now) {
            await refreshToken()
        } else {
            setIsAuthorized(true)
        }
    }

    if (isAuthorized === null) {
        return <div>Loading...</div>
    }

    return isAuthorized ? children : <Navigate to={"/login"} />
}
