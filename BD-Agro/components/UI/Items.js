import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
/*
npm install -g eas-cli
eas build -p andro
*/
const Items = ({ title, children }) => {

    return (
        <View style={{ paddingHorizontal: 5, paddingVertical: 2 }}>
            <Text style={{
                fontSize: 16, fontWeight: "500", marginHorizontal: 10,
            }} >{title}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                {
                    children
                }
            </ScrollView>
        </View>
    )
}

export default Items

const styles = StyleSheet.create({})