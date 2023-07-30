import { Image, Pressable, Text, View } from 'react-native';

const Order = (props) => {
    const { total, status, products } = props.item;

    return (
        <View
            style={{
                marginVertical: 5,
            }}
        >

            <View style={{
                flexDirection: 'row', justifyContent: "space-between",
                backgroundColor: "#fff", padding: 10, marginHorizontal: 5, marginVertical: 5, borderRadius: 8,
            }}>
                <Text style={{
                    fontSize: 15, marginHorizontal: 10,
                }} >{`Items ${products.length}`}</Text>
                <Text style={{
                    fontSize: 15, marginHorizontal: 10,
                }} >{`Total ${total}`}</Text>
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
            </View >

            {
                products.map((item) => (
                    <Pressable key={item._id} style={{
                        backgroundColor: "#f8f8f8", padding: 10, marginHorizontal: 10, borderRadius: 8,
                        flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems:
                            "center"
                    }}>
                        <View>
                            <Image source={{ uri: item?.product?.thumbnail }} style={{ width: 50, height: 50, marginRight: 20 }} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 7 }}>{item?.product?.name}</Text>
                            <Text style={{ fontSize: 15, color: "gray", textAlign: "center" }}>{item.quantity}</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: 15, color: "gray" }}>৳{item?.product?.price}</Text>
                        </View>
                        <View >
                            <Text style={{ fontSize: 14, fontWeight: "500", marginBottom: 7 }}>{item.brand?.name}</Text>
                        </View>
                    </Pressable>
                ))
            }
        </View >
    )
}

export default Order;