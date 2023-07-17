import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OptionCard = ({ data }) => {
    const { name, icon, _id, color } = data || {};
    return (
        <Pressable style={{ backgroundColor: "#fff", padding: 15, margin: 10, marginTop: 0, borderRadius: 7, flex: 1, alignItems: 'center', justifyContent: "space-between" }}>
            {icon}
            <Text style={{ marginTop: 10, color: color, width: "100%", textAlign: "center", fontSize: 12 }} >{name.toUpperCase()}</Text>
        </Pressable>
    )
}

export default OptionCard;
