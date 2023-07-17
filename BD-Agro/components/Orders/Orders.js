import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Order from './Order'

const Orders = () => {
    return (
        <ScrollView style={{ marginBottom: 50 }}>
            <Text>Orders</Text>

            <Order item={
                {
                    name: "Apple",
                    quantity: 1,
                    thumbnail: "https://res.cloudinary.com/do5erbtee/image/upload/v1689235702/pro/murgi-p_z4ophe.jpg",
                    price: 100,
                    status: "Pending"
                }
            } />
            <Order item={
                {
                    name: "Apple",
                    quantity: 1,
                    thumbnail: "https://res.cloudinary.com/do5erbtee/image/upload/v1689235702/pro/murgi-p_z4ophe.jpg",
                    price: 100,
                    status: "Pending"
                }
            } />
            <Order item={
                {
                    name: "Apple",
                    quantity: 1,
                    thumbnail: "https://res.cloudinary.com/do5erbtee/image/upload/v1689235702/pro/murgi-p_z4ophe.jpg",
                    price: 100,
                    status: "Pending"
                }
            } />
        </ScrollView>
    )
}

export default Orders

const styles = StyleSheet.create({})