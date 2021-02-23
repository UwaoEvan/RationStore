import React from 'react';
import { View, Dimensions, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import CustomButton from '../components/CustomButton';

export default function OrderSummary() {
    const items = useSelector(state => state.cart.items);

    const getTotalCost = () => {
        let total = items.reduce((a, c) => a + (c.total || 0), 0);
        return total.toFixed(2);
    }

    const getCartItems = () => {
        let total = items.reduce((a, c) => a + (c.qty || 0), 0);
        return total;
    }

    return (

        <View style={styles.container}>
            <Text style={styles.title}>Delivery Location</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: '2%' }}>
                <View style={styles.bottomIcon}>
                    <TouchableOpacity >
                        <FontAwesome
                            name="map-pin"
                            size={24}
                            color="#003fff" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.location}>Mombasa</Text>
                    <Text style={styles.location}>+254700000009</Text>
                </View>

                <TouchableOpacity style={{ ...styles.iconBody, position: 'absolute', left: '85%' }}>
                    <MaterialIcons
                        name="keyboard-arrow-right"
                        size={20}
                        color="gray"
                    />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Order Info</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.subtitle}>Total Items in Cart</Text>
                <Text style={styles.price}>{getCartItems()}</Text>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.subtitle}>Total Cost</Text>
                <Text style={styles.price}>Ksh {getTotalCost()}</Text>
            </View>

            <CustomButton title={`Checkout (${getTotalCost()})`} />
        </View>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20,
        marginVertical: 20
    },
    bottomIcon: {
        width: 50,
        height: 50,
        backgroundColor: '#e6e6e6',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    location: {
        fontFamily: 'Nunito-Regular',
        color: 'gray',
        paddingHorizontal: 10
    },
    subtitle: {
        fontFamily: 'Nunito-Regular',
        color: 'gray',
        marginVertical: 10
    },
    iconBody: {
        width: 30,
        height: 30,
        backgroundColor: '#f2f2f4',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: mainWidth / 20
    },
    price: {
        fontFamily: 'Nunito-Bold'
    }
})