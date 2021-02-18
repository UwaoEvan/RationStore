import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

export default function ListHeader() {

    const products = useSelector(state => state.products.products);
    const selectedProducts = products.filter(p => p.category === 'Home');
    return (
        <View>
            <Text style={styles.title}>HI-FI Shop</Text>
            <Text style={styles.subTitle}>Kenya's leading online shopping website. Starts with trust with a proven track record on products variety, best prices, speedy delivery and excellent service.</Text>

            <FlatList
                data={selectedProducts}
                renderItem={({ item }) => (
                    <Text>{item.title}</Text>
                )}
            />
        </View>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 26,
        marginTop: mainHeight / 18
    },
    subTitle: {
        fontFamily: 'Nunito-Regular',
        color: 'gray',
        paddingVertical: 10
    }
})