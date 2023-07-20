import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'expo-router'
import CardItem from '../../components/CartItem'

const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const total = cart.reduce((total, item) => (total + item.price) * item.quantity, 0);
    const navigate = useRouter()
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

                marginTop: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,

                backgroundColor: "#f8f8f8",
                elevation: 10,

                borderRadius: 5,


            }} >
                <Text style={{ flex: 1, fontSize: 18, marginTop: 4 }}>
                    Total: <Text style={{ fontSize: 18, fontWeight: "bold", color: "#088f8f" }}> ${total}</Text>
                </Text>
                <Pressable style={{ flex: 1 }}
                    onPress={() => {
                        // please navigate to Login

                        navigate.push('/Checkout')

                    }}
                >
                    <Text style={{
                        borderColor: "gray",
                        borderRadius: 5,
                        borderWidth: 0.8,
                        color: "#088f8f",
                        textAlign: "center",
                        padding: 5,
                        fontSize: 16,
                        fontWeight: "bold"
                    }} >Check Out({cart.length})</Text>
                </Pressable>
            </View>
        </ScrollView>
    )
}

export default Cart;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 10 : 0,
        minHeight: "100%",
    },
});
