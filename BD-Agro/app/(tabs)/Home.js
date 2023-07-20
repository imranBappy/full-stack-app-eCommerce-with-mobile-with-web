import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'

import React, { useEffect } from 'react'
import Header from '../../components/Header'
import Carousel from '../../components/UI/Carousel';
import Items from '../../components/UI/Items';
import Categores from '../../components/Categores';
import Brands from '../../components/Brands';
import Products from '../../components/Products';
import { getData } from '../../utils/dbManager';
import sliderData from '../../data/slidersData';


const Home = () => {

    return (
        <ScrollView style={styles.container}>
            <Header />
            <StatusBar style="auto" />
            <Carousel height={150} DATA={sliderData} />

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

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
});
