import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Items from '../../components/UI/Items';
import Options from '../../components/Profile/Options';
import Orders from '../../components/Orders/Orders';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/UI/Button';
import { useRouter } from 'expo-router';
import { userLoggedOut } from '../../redux/features/auth/authSlice';
// import { useGetOrdersQuery } from '../../redux/features/order/orderApi';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';


export default function ProfileScreen() {
    const navigation = useRouter();
    const auth = useSelector(state => state.auth);
    const { user } = auth || {};
    const { name, email } = user || {};
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userLoggedOut());
        navigation.push('/Home')
    }
    return (
        <PrivateRoute>
            <ScrollView style={styles.container} >
                <View
                    style={{
                        backgroundColor: "#fff",
                        margin: 20,
                        padding: 20,
                        borderRadius: 10,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 10,
                        },
                        shadowOpacity: 0.5,
                        shadowRadius: 10.0,
                        elevation: 3,
                    }}
                >
                    <View style={{
                        marginTop: 10,
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <Image style={{
                            width: 120,
                            height: 120,
                            borderRadius: 100,
                            borderWidth: 2,
                            borderColor: "#088F8F",
                        }} source={{ uri: "https://static.thenounproject.com/png/5034901-200.png" }} />
                    </View>

                    <View>
                        <Text style={{
                            textAlign: "center",
                            marginTop: 10,
                            fontSize: 20,
                        }}>{name}</Text>
                    </View>
                    <View>
                        <Text style={{
                            textAlign: "center",
                            marginTop: 2,
                            fontSize: 15,
                        }}>{email}</Text>
                    </View>
                </View>
                <Items>
                    <Options />
                </Items>
                <Orders />
                <View style={{
                    margin: 20,
                }}>
                    <Button title="Logout" onPress={handleLogout} />
                </View>
            </ScrollView>
        </PrivateRoute>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
