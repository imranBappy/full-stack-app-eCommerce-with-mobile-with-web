import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Redirect, useRouter } from 'expo-router'


const index = () => {
    return (
        <>
            <Redirect href='/Home' />
        </>
    )
}

export default index

const styles = StyleSheet.create({})