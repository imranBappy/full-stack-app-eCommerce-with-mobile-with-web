import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Items from '../../components/UI/Items';
import Options from '../../components/Profile/Options';
import Orders from '../../components/Orders/Orders';

export default function ProfileScreen() {
    return (
        <ScrollView style={styles.container} >

            <View // Desing Profile Card simple shadow
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
                    }}>Open Sakib</Text>
                </View>
                <View>
                    <Text style={{
                        textAlign: "center",
                        marginTop: 2,
                        fontSize: 15,
                    }}>open@gmail.com</Text>
                </View>
            </View>
            <Items>
                <Options />
            </Items>
            <Orders />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});