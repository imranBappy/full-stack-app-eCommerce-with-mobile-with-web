import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { userLoggedIn } from "../features/auth/authSlice"

export default function useAuthCheck() {
    const dispatch = useDispatch()
    const [authCheck, setAuthCheck] = useState(false)
    useEffect(() => {
        setAuthCheck(false)
        let localAuth = localStorage.getItem("auth")
        if (localAuth) {
            localAuth = JSON.parse(localAuth)
            if (localAuth.accessToken && localAuth.user) {
                dispatch(userLoggedIn(localAuth))
            }
        }
        setAuthCheck(true)
    }, [dispatch])
    return authCheck;
}