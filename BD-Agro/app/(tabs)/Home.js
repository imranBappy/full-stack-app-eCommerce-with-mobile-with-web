import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import React from 'react'
import Header from '../../components/Header'
import Carousel from '../../components/UI/Carousel';
import Items from '../../components/UI/Items';
import Categores from '../../components/Categores';
import Brands from '../../components/Brands';
import Products from '../../components/Products';
const DATA = [
    {
        coverImageUri: 'https://res.cloudinary.com/do5erbtee/image/upload/v1689394986/slide/side1_fl8ogs.png',
        cornerLabelColor: '#FFD300',
        cornerLabelText: '-75%',
    },
    {
        coverImageUri: 'https://res.cloudinary.com/do5erbtee/image/upload/v1689394985/slide/side2_lxa7y2.png',
        cornerLabelColor: '#0080ff',
        cornerLabelText: 'NEW',
    },
    {
        coverImageUri: 'https://res.cloudinary.com/do5erbtee/image/upload/v1689394986/slide/side3_yutc5s.png',
        cornerLabelColor: '#2ECC40',
        cornerLabelText: 'Positive Gang',
    },

];
const HomeScreen = () => {
    return (
        <ScrollView style={styles.container}>
            <Header />
            <StatusBar style="auto" />
            <Carousel height={150} DATA={DATA} />

            <Items title="Categores" >
                <Categores />
            </Items>

            <Items title="Brands" >
                <Brands />
            </Items>

            {/* Products */}
            <Products />
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
