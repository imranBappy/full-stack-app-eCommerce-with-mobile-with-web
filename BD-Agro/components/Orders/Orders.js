import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Order from './Order'
import { useSelector } from 'react-redux';
import { useGetOrdersQuery } from '../../redux/features/order/orderApi';

const Orders = () => {
    const auth = useSelector(state => state.auth);
    const { data, status, error } = useGetOrdersQuery(auth?.user?._id,
        {
            skip: !auth?.user?._id
        }
    );
    let content = null;

    if (status === 'loading') {
        content = <Text>Loading...</Text>
    } else if (status === 'fulfilled' && data?.length > 0) {
        content = data.map((item) => <Order key={item._id} item={item} />)
    } else if (status === 'rejected') {
        content = <Text>{error}</Text>
    } else if (data?.length === 0) {
        content = <Text
            style={{

                fontSize: 16, fontWeight: "500", marginTop: 10,
                textAlign: "center",
                color: "#088f8f"
            }}
        >No Orders</Text>
    }


    return (
        <ScrollView style={{ marginBottom: 50 }}>
            <Text style={{
                fontSize: 16, fontWeight: "500", marginHorizontal: 10,
            }} >{'Orders'}</Text>
            {content}
        </ScrollView>
    )
}

export default Orders

const styles = StyleSheet.create({})