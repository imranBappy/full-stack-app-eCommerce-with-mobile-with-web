import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, useRouter } from 'expo-router'
import { useSelector } from 'react-redux';
import useAuthCheck from '../hooks/useAuthCheck';
import useAuth from '../hooks/useAuth';

const index = () => {
    const isLoading = useAuthCheck();
    const auth = useAuth();
    if (!isLoading) {
        return <View><Text>Loading...</Text></View>
    }
    if (!auth) {
        return (
            <Redirect href='/SignIn' />
        )
    }

    return (
        <>
            <Redirect href='/Home' />
        </>
    )
}

export default index

const styles = StyleSheet.create({})