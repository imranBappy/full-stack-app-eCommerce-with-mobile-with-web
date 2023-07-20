import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { Stack, useSearchParams } from 'expo-router'
import { useGetAllProductsQuery } from '../../redux/features/product/productApi'
import { useDispatch } from 'react-redux'
import { EvilIcons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { addToCart } from '../../redux/features/cartFeatures'
import Button from '../../components/UI/Button'
import MyCarousel from '../../components/UI/Carousel'

const ProductDetails = () => {
    const { id } = useSearchParams()

    const { data } = useGetAllProductsQuery();
    const { products = [] } = data || {};
    const product = products?.find((item) => item?._id === id) || {}
    const { thumbnail, name, stock, price, brand, category } = product || {}

    const dispatch = useDispatch();
    const addToCartHandle = () => {
        dispatch(addToCart(product))
    }

    const handleBuyNow = () => {
        alert("Buy Now")
    }
    return (
        <ScrollView style={styles.container}>
            <Stack.Screen options={
                {
                    headerTitle: `Product Details`
                }
            } />

            <MyCarousel height={150} DATA={[{
                coverImageUri: thumbnail, cornerLabelColor: '#0080ff',
                cornerLabelText: `Stock: ${stock}`,
            }]} />
            <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
                <Text style={styles.name}>{name}</Text>
            </View>

            <View>
                <Text style={{
                    marginHorizontal: 10,
                    marginBottom: 10,
                    fontSize: 18,
                    fontWeight: "bold",
                    color: "#088f8f"
                }}>Buy From</Text>
            </View>

            <View style={{
                borderWidth: 1,
                borderColor: "#088f8f",
                backgroundColor: "#fff",
                borderRadius: 5,
                marginHorizontal: 10,
                marginBottom: 10,
                padding: 10

            }}>
                <View>
                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        alignItems: "center",
                        marginBottom: 5,
                        gap: 5
                    }}>
                        <EvilIcons name="location" color={'#000000'} size={15} />
                        <Text
                            style={{
                                fontWeight: "bold"
                            }}
                        >Mathbaria, Pirojpur</Text>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        alignItems: "center",
                        marginBottom: 5,
                        gap: 5
                    }}>
                        <MaterialCommunityIcons name="truck-delivery-outline" size={15} color="black" />
                        <Text
                            style={{
                                fontWeight: "bold"
                            }}
                        >$20( $80 Outside Area)</Text>
                    </View>

                    <View style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        alignItems: "center",
                        marginBottom: 5,
                        gap: 5
                    }}>
                        <MaterialIcons name="store" size={15} color="black" />
                        <Text style={{
                            fontWeight: "bold"
                        }}>Stock: ${stock}</Text>
                    </View>
                </View>
                {/* Product Price */}

                <View style={{
                    borderTopWidth: 1,
                    borderTopColor: "#088f8f",
                    marginTop: 5,
                    paddingTop: 5,
                    flexDirection: "row",
                    marginHorizontal: 10,
                    alignItems: "center",
                    marginBottom: 5,
                    gap: 5
                }}>
                    <Text style={{
                        fontWeight: "bold",
                        color: "red",
                        fontSize: 17
                    }}>${price} </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        marginHorizontal: 10,
                        marginVertical: 10,
                        alignItems: "center",
                        gap: 5,

                    }}
                >
                    <Button
                        title="Add to Cart"
                        onPress={addToCartHandle}
                    />
                    <Button
                        title="Buy Now"
                        onPress={handleBuyNow}
                    />


                </View>
            </View>
            <View
                style={{
                    marginHorizontal: 10,
                    marginVertical: 10,
                    alignItems: "center"

                }}
            >
                <Text
                    style={{

                        fontSize: 18,
                        fontWeight: "bold",
                        color: "#088f8f",
                        textAlign: "center"
                    }}

                >Description</Text>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        color: "#000",
                        textAlign: "center",
                        marginVertical: 10

                    }}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae hic laudantium suscipit nisi, error facere distinctio reiciendis quis asperiores tempora?</Text>
            </View>


            <View
                style={{
                    marginHorizontal: 10,
                    marginVertical: 10,
                    paddingBottom: 30
                }}
            >
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10

                }}>
                    <Text
                        style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: "#088f8f",
                            textAlign: "center"

                        }}
                    >
                        Specifications
                    </Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10

                }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#000",
                            textAlign: "center"
                        }}
                    >
                        Brand
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#000",
                            textAlign: "center"

                        }}
                    > {brand?.name}</Text>
                </View>

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 10

                }}>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#000",
                            textAlign: "center"
                        }}
                    >
                        Category
                    </Text>
                    <Text
                        style={{
                            fontSize: 16,
                            fontWeight: "bold",
                            color: "#000",
                            textAlign: "center"

                        }}
                    >  {category?.name}</Text>
                </View>

            </View>
        </ScrollView>
    )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Platform.OS === 'android' ? 10 : 0
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#13274F"
    }
});
