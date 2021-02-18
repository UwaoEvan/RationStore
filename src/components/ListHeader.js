import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';

import Products from '../components/Products';
import Categories from '../components/Categories';

export default function ListHeader({ navigation }) {

    const products = useSelector(state => state.products.products);
    const selectedProducts = products.filter(p => p.category === 'Home');
    return (
        <View>
            <Text style={styles.title}>Ration Store</Text>
            <Text style={styles.subTitle}>Kenya's leading online shopping website. Starts with trust with a proven track record on products variety, best prices, speedy delivery and excellent service.</Text>

            <FlatList
                ListHeaderComponent={<Categories title='Products' total={selectedProducts.length} />}
                numColumns={2}
                data={selectedProducts}
                renderItem={({ item }) => (
                    <Products
                        item={item}
                        navigation={navigation}
                    />
                )}
                ListFooterComponent={<Categories title='Electronics' total={selectedProducts.length} />}
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