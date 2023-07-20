import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    KeyboardAvoidingView,
    TextInput,
    Pressable,
    ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Redirect, useNavigation, useRouter } from 'expo-router';
import Button from "../components/UI/Button";
import { useLoginMutation } from "../redux/features/auth/authApi";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useRouter();
    const [login, { data, isLoading, status, isError, error: resError }] = useLoginMutation({});

    useEffect(() => {
        if (status === 'fulfilled') {
            navigation.push('/Home')
        } else if (status === 'rejected') {

        }
    }, [status])


    const navigation2 = useNavigation();

    // Effect
    useEffect(() => {
        navigation2.addListener('beforeRemove', (e) => {
            return <Redirect href='/Home' />
        });
    }, []);


    const submit = () => {
        login({ email, password })
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
            {isLoading ? (
                <View style={{ alignItems: "center", justifyContent: "center", flexDirection: "row", flex: 1 }}>
                    <Text style={{ marginRight: 10 }}>Loading</Text>
                    <ActivityIndicator size="large" color={"red"} />
                </View>
            ) : (
                <KeyboardAvoidingView>
                    <View
                        style={{
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: 100,
                        }}
                    >
                        <Text style={{ fontSize: 20, color: "#662d91", fontWeight: "bold" }}>
                            Sign In
                        </Text>

                        <Text style={{ fontSize: 18, marginTop: 8, fontWeight: "600" }}>
                            Sign In to your account
                        </Text>
                    </View>

                    <View style={{ marginTop: 50 }}>
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


                        <Button title="Login" onPress={submit} />
                        <Pressable onPress={() => navigation.push("Signup")} style={{ marginTop: 20 }}>
                            <Text
                                style={{
                                    textAlign: "center",
                                    fontSize: 17,
                                    color: "gray",
                                    fontWeight: "500",
                                }}
                            >
                                Don't have a account? Sign Up
                            </Text>
                        </Pressable>
                    </View>
                </KeyboardAvoidingView>
            )}
        </SafeAreaView>
    );
};

export default SignIn;

const styles = StyleSheet.create({});
