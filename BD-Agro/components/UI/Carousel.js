import React from 'react';
import {
    StyleSheet, View, Text, Image, Dimensions,
} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');



const MyCarousel = ({ DATA, height }) => {
    const renderItem = data => (
        <View
            key={data.coverImageUri}
            style={styles.cardContainer}
        >
            <View
                style={styles.cardWrapper}
            >
                <Image
                    style={styles.card}
                    source={{ uri: data.coverImageUri }}
                />
                <View
                    style={[
                        styles.cornerLabel,
                        { backgroundColor: data.cornerLabelColor },
                    ]}
                >
                    <Text style={styles.cornerLabelText}>
                        {data.cornerLabelText}
                    </Text>
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <Carousel

                pagination={PaginationLight}
                renderItem={renderItem}
                data={DATA}
                loop
                autoplay
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width,
        height: 150,
    },
    cardWrapper: {
        borderRadius: 8,
        overflow: 'hidden',
    },
    card: {
        width: width * 0.9,
        height: 150,
    },
    cornerLabel: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        borderTopLeftRadius: 8,
    },
    cornerLabelText: {
        fontSize: 12,
        color: '#fff',
        fontWeight: '600',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 2,
        paddingBottom: 2,
    },
});

export default MyCarousel;
