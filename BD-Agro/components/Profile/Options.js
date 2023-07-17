import React from 'react'
import OptionCard from './OptionCard';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const Options = () => {

    return <>
        <OptionCard data={
            {
                color: "#088F8F",
                name: "Orders",
                icon: <FontAwesome5 name="shopping-cart" size={20} color="#088F8F" />,
                _id: "2"
            }
        } />
        <OptionCard data={{
            name: "Profile",
            icon: <MaterialCommunityIcons name="account-cog" size={20} />,
            _id: "1"
        }} />
        <OptionCard data={{
            name: "Wishlist",
            icon: <AntDesign name="heart" size={20} color="black" />,
            _id: "3"
        }} />
        <OptionCard data={{
            name: "Settings",
            icon: <Ionicons name="settings" size={20} color="black" />,
            _id: "3"
        }} />
    </>;
}

export default Options;
