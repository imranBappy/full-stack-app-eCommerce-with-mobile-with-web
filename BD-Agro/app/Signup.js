import {
    StyleSheet,
    Text,
    View,
    Pressable,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    Alert
} from "react-native";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Button from "../components/UI/Button";
import { useRegisterMutation } from "../redux/features/auth/authApi";



const Signup = () => {
    // console.log(111, getValueFor('auth'));
    const navigation = useRouter();
    const [name, setName] = useState("");
    const [register, { data, isLoading, status, isError, error: resError }] = useRegisterMutation({});
    useEffect(() => {
        if (status === 'fulfilled') {
            navigate('/Home')
        } else if (status === 'rejected') {

        }
    }, [status])



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const submit = () => {
        if (email === "" || password === "" || name === "") {
            Alert.alert(
                "Invalid Details",
                "Please fill all the details",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        } else {
            console.log({ name, email, password, role: "User" });
            register({ name, email, password, role: "User" })
        }
    }
    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "white",
                alignItems: "center",
                padding: 10,
            }}
        >
            <KeyboardAvoidingView>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 100,
                    }}
                >
                    <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>
                        Register
                    </Text>

                    <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
                        Create a new Account
                    </Text>
                </View>

                <View style={{ marginTop: 50 }}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Feather name="phone" size={24} color="black" />
                        <TextInput
                            value={name}
                            onChangeText={(text) => setName(text)}
                            placeholder="Name "
                            placeholderTextColor="black"
                            style={{
                                fontSize: password ? 18 : 18,
                                borderBottomWidth: 1,
                                borderBottomColor: "gray",
                                marginLeft: 13,
                                width: 300,
                                marginVertical: 10,
                            }}
                        />
                    </View>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <MaterialCommunityIcons
                            name="email-outline"
                            size={24}
                            color="black"
                        />
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            placeholderTextColor="black"
                            style={{
                                fontSize: email ? 18 : 18,
                                borderBottomWidth: 1,
                                borderBottomColor: "gray",
                                marginLeft: 13,
                                width: 300,
                                marginVertical: 10,
                            }}
                        />
                    </View>


                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Ionicons name="key-outline" size={24} color="black" />
                        <TextInput
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                            placeholder="Password"
                            placeholderTextColor="black"
                            style={{
                                fontSize: password ? 18 : 18,
                                borderBottomWidth: 1,
                                borderBottomColor: "gray",
                                marginLeft: 13,
                                width: 300,
                                marginVertical: 20,
                            }}
                        />
                    </View>

                    <Button title="Register" onPress={submit} />


                    <Pressable onPress={() => navigation.push("SignIn")} style={{ marginTop: 20 }}>
                        <Text
                            style={{
                                textAlign: "center",
                                fontSize: 17,
                                color: "gray",
                                fontWeight: "500",
                            }}
                        >
                            Already have a account? Sign in
                        </Text>
                    </Pressable>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Signup;

const styles = StyleSheet.create({});
