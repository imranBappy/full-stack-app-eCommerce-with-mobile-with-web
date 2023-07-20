import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Order from './Order'
import { useSelector } from 'react-redux';
import { useGetOrdersQuery } from '../../redux/features/order/orderApi';

const Orders = () => {
    // const auth = useSelector(state => state.auth);
    // const { data, status, error } = useGetOrdersQuery(auth?.user?._id,
    //     {
    //         skip: !auth?.user?._id
    //     }
    // );
    // console.log(111, auth);
    // console.log(15, data, status, error);
    return (
        <ScrollView style={{ marginBottom: 50 }}>
            <Text style={{
                fontSize: 16, fontWeight: "500", marginHorizontal: 10,
            }} >{'Orders'}</Text>

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