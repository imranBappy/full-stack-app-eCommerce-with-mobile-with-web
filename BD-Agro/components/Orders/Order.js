import { Image, Pressable, Text, View } from 'react-native';

const Order = (props) => {
    const { name, thumbnail, quantity, price, status } = props.item;

    return (
        <View >
            <Pressable style={{
                backgroundColor: "#f8f8f8", padding: 10, marginHorizontal: 10, marginVertical: 5, borderRadius: 8,
                flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems:
                    "center"
            }}>
                <View>
                    <Image source={{ uri: thumbnail }} style={{ width: 50, height: 50, marginRight: 20 }} />
                </View>
                <View>
                    <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 7 }}>{name}</Text>
                    <Text style={{ fontSize: 15, color: "gray", textAlign: "center" }}>{quantity}</Text>
                </View>
                <View>
                    <Text style={{ fontSize: 15, color: "gray" }}>${price}</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                    {/* desing status cercel in red color */}
                    <View style={{
                        width: 10, height: 10,
                        backgroundColor: "#088F8F", borderRadius: 5,
                        flexDirection: "row", justifyContent: "space-between", alignItems:
                            "center"
                    }}></View>

                    <Text style={{ fontSize: 14, fontWeight: "500", }}>{status}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Order;