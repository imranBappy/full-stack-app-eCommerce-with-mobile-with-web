import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default () => {
    return (
        <Tabs>
            <Tabs.Screen name='Home'
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarStyle: {
                        borderTopColor: '#088F8F',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomColor: '#088F8F',
                        paddingTop: 5,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,


                    },
                    tabBarIcon: ({ focused }) => <Entypo name="home" size={24} color={focused ? "#088F8F" : "black"} />,
                    tabBarItemStyle: {
                        flexDirection: 'column',
                    },
                    tabBarLabelStyle: {
                        paddingBottom: 5
                    },
                    tabBarActiveTintColor: '#088F8F',
                    tabBarInactiveTintColor: 'black',
                }}
            />
            <Tabs.Screen name='Cart'
                options={{

                    tabBarStyle: {
                        borderTopColor: '#088F8F',
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomColor: '#088F8F',
                        paddingTop: 5,
                    },
                    tabBarIcon: ({ focused }) => <FontAwesome5 name="cart-arrow-down" size={22} color={focused ? "#088F8F" : "black"} />
                    ,
                    tabBarItemStyle: {
                        flexDirection: 'column',
                    },
                    tabBarLabelStyle: {
                        paddingBottom: 5
                    },
                    tabBarActiveTintColor: '#088F8F',
                    tabBarInactiveTintColor: 'black',
                }}

            />
            <Tabs.Screen name='Profile' options={{
                headerShown: false,
                tabBarLabel: 'Account',
                tabBarStyle: {
                    borderTopColor: '#088F8F',
                    elevation: 0,
                    shadowOpacity: 0,
                    borderBottomColor: '#088F8F',
                    paddingTop: 5,
                },
                tabBarIcon: ({ focused }) =>
                    <MaterialCommunityIcons name="account-cog" size={24} color={focused ? "#088F8F" : "black"} />,
                tabBarItemStyle: {
                    flexDirection: 'column',
                },
                tabBarLabelStyle: {
                    paddingBottom: 5
                },
                tabBarActiveTintColor: '#088F8F',
                tabBarInactiveTintColor: 'black',
            }} />

        </Tabs>
    )
}

