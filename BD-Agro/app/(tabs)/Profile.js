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

    // const { data } = useGetOrdersQuery(auth?.user?._id,
    //     {
    //         skip: !auth?.user?._id
    //     }
    // );

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
                        }} source={{ uri: "https://scontent.fdac138-1.fna.fbcdn.net/v/t39.30808-6/329394077_736096154815319_1366729648714407695_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHuY59vJkFsYGWgAYyVV4g39GRTL5pmetn0ZFMvmmZ62QVsxtfDPj5RBduVAOh32nJDHO8iFgx4d9uJPCSJPT1Y&_nc_ohc=UkwRPBjhmNAAX8MjYQG&_nc_ht=scontent.fdac138-1.fna&oh=00_AfDcSAJoUKm27g-5IytgcMesjVWLDyAoIln4pGEkwVph_w&oe=64BAC3EC" }} />
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
