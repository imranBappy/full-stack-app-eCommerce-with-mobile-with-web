import { Redirect } from 'expo-router';
import { Text, View } from 'react-native';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLoggedIn } from '../../redux/features/auth/authSlice';
import { getData } from '../../utils/dbManager';



const PrivateRoute = ({ children }) => {
    const dispatch = useDispatch()
    const [authCheck, setAuthCheck] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const setAuth = async () => {
        try {
            let localAuth = await getData()
            if (localAuth) {
                const { accessToken, user } = localAuth || {}
                if (accessToken && user) {
                    dispatch(userLoggedIn({ accessToken, user }))
                }
                setIsLoggedIn(true)

            } else {
                setIsLoggedIn(false)
            }
        } catch (error) { }
        setAuthCheck(false)
    }

    useEffect(() => {
        setAuthCheck(true)
        setIsLoggedIn(false)
        setAuth();
    }, [])


    if (authCheck) {
        return <View><Text>Loading...</Text></View>
    }
    else if (!isLoggedIn) {
        return <Redirect href={'/SignIn'} />
    }
    else return children;
};

export default PrivateRoute;