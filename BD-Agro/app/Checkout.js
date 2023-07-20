
import { Pressable, ScrollView, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardItem from '../components/CartItem'
import { usePostOrderMutation } from '../redux/features/order/orderApi'

const CheckoutScreen = () => {
    const cart = useSelector((state) => state.cart.cart)
    const auth = useSelector((state) => state.auth)

    const total = cart.reduce((total, item) => (total + item.price) * item.quantity, 0);
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')

    const [order, { status }] = usePostOrderMutation()
    useEffect(() => {
        if (status === 'fulfilled') {
            navigation.push('/Profile')
        } else if (status === 'rejected') {

        }
    }, [status])

    const handleOrder = () => {
        const productsId = cart.map((item) => item._id);
        order({ address, phone, total, user: auth.user._id, product: productsId[0] })
        console.log({ address, phone, total, user: auth.user._id, product: productsId[0] });

    }

    return (
        <ScrollView style={styles.container}>
            <View>
                {
                    cart?.map((item) => <CardItem
                        key={item._id}
                        item={item}
                    />)
                }
            </View>
            <View style={{
                padding: 10,
                marginTop: 10
            }}>
                <TextInput
                    style={{
                        height: 50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 5,
                    }}
                    onChangeText={(text) => setAddress(text)}
                    value={address}
                    placeholder={' Address'}
                />
            </View>

            <View style={{
                padding: 10,
                marginTop: 10
            }}>
                <TextInput
                    style={{
                        height: 50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        borderRadius: 5,
                    }}
                    onChangeText={(text) => setPhone(text)}
                    value={phone}
                    placeholder={'Phone'}
                />
            </View>

            <View style={{
                marginTop: 10,
                flexDirection: "row", justifyContent: "space-between",
                padding: 10
            }} >
                <Text style={{ flex: 1, fontSize: 18 }}>
                    Total: <Text style={{ fontSize: 18, fontWeight: "bold", color: "#088f8f" }}> ${total}</Text>
                </Text>
                <Pressable onPress={handleOrder} style={{ flex: 1 }}>
                    <Text style={{
                        borderColor: "gray",
                        borderRadius: 5,
                        borderWidth: 0.8,
                        color: "#088f8f",
                        textAlign: "center",
                        padding: 5,
                        fontSize: 16,
                        fontWeight: "bold"
                    }} >Place Order ({cart.length})</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default CheckoutScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
