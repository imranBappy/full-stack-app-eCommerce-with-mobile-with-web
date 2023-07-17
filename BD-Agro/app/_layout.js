import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import { Provider } from 'react-redux'
import { store } from '../redux/store'


const StackLayout = () => {
    return (
        <Provider store={store}>
            <View style={styles.container} >
                <Stack>
                    <Stack.Screen name='(tabs)' options={{
                        headerShown: false
                    }} />
                </Stack>
                <StatusBar style="auto" />
            </View>
        </Provider >
    )
}

export default StackLayout


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
