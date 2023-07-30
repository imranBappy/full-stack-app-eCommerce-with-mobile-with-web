import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import * as Location from 'expo-location'
import { useEffect, useState } from 'react'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

const Header = () => {

    const [address, setAddress] = useState("Loading...");
    const [, setLocationEnabled] = useState(false);

    useEffect(() => {
        checkIfLocationEnabled()
        getCurrentLocation()

    }, [])

    const checkIfLocationEnabled = async () => {
        let enabled = await Location.hasServicesEnabledAsync();
        if (!enabled) {
            Alert.alert('Location is not enabled',
                'Please the location enabled',
                [
                    {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]);
        } else {
            setLocationEnabled(enabled)
        }
    }
    const getCurrentLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status != 'granted') {
            Alert.alert('Permission denied',
                'Allow the app to use location services',
                [
                    {
                        text: 'Cancel',
                    },
                    { text: 'OK' },
                ]);
        }
        const { coords } = await Location.getCurrentPositionAsync();

        if (coords) {
            const { latitude, longitude } = coords;
            let res = await Location.reverseGeocodeAsync({ latitude, longitude });
            let currAddress = "";
            for (let item of res) {
                currAddress = `${item.district}, ${item.city}`;
            }
            if (currAddress) {
                setAddress(currAddress)
            }
        }
    }
    return (
        <View style={{
            backgroundColor: "#fff", flexDirection: "row", alignItems: "center", padding: 10, justifyContent: "space-between"
            ,


        }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialIcons name="location-on" size={30} color="#fd5c63" />
                <View>
                    <Text style={{ fontSize: 18, fontWeight: "600" }} >Home</Text>
                    <Text style={{ width: 200 }}>{address}</Text>
                </View>
            </View>
            <Pressable>
                <Image style={{ width: 45, height: 45, borderRadius: 25, borderWidth: 2, borderColor: "#088F8F" }} source={{ uri: "https://static.thenounproject.com/png/5034901-200.png" }} />
            </Pressable>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})