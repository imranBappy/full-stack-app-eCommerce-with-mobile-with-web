// import { useEffect, useState } from "react"
// import { getData } from "../utils/dbManager"
// import { useDispatch } from "react-redux";
// import { userLoggedIn } from "../redux/features/auth/authSlice";

// export default function useAuthCheck() {
//     const dispatch = useDispatch()
//     const [authCheck, setAuthCheck] = useState(true);
//     useEffect(async () => {
//         setAuthCheck(false)
//         let localAuth = await getData()
//         if (localAuth) {
//             if (localAuth.accessToken && localAuth.user) {
//                 dispatch(userLoggedIn(Object(localAuth)))
//             }
//         }
//         setAuthCheck(true)
//     }, [dispatch])
//     return authCheck;
// }