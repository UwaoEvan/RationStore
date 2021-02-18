import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default function Checkout({ navigation }) {
    // const items = useSelector(state => {
    //     const productsArr = [];
    //     for (const key in state.cart.items) {
    //         productsArr.push({
    //             id: key,
    //             title: state.cart.items[key].title,
    //             price: state.cart.items[key].price,
    //             total: state.cart.items[key].price,
    //             qty: state.cart.items[key].qty
    //         });
    //     }
    // });

    const items = useSelector(state => state.cart.items)
    console.log(items)

    console.log(items)
    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.iconBody}
                        onPress={() => navigation.navigate('Details')}
                    >
                        <Ionicons
                            name="md-chevron-back"
                            size={15}
                            color="gray"
                        />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Order Details</Text>
                </View>
            </View>
            <View>
                <Text style={styles.cartTitle}>My Cart</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Image

                        resizeMode='contain'
                        style={styles.image}
                    />
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Nunito-Bold', fontSize: 18 }}>tt</Text>
                        <Text style={{ fontFamily: 'Nunito-Regular', fontSize: 12, color: 'gray', marginVertical: 10 }}>Ksh </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: mainWidth / 20
    },
    icon: {
        position: 'absolute',
        top: mainHeight / 20
    },
    iconBody: {
        width: 30,
        height: 30,
        backgroundColor: '#ccc',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontFamily: 'Nunito-Bold',
        paddingLeft: mainWidth / 4
    },
    cartTitle: {
        marginTop: mainHeight / 8,
        fontFamily: 'Nunito-Bold',
        fontSize: 20
    },
    image: {
        width: mainWidth / 2.5,
        height: mainHeight / 4
    }
})