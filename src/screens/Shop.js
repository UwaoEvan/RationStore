import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import ListHeader from '../components/ListHeader';
import Products from '../components/Products';
import Categories from '../components/Categories';

export default function Shop({ navigation }) {

    const products = useSelector(state => state.products.products);
    const selectedProducts = products.filter(p => p.category === 'Technology');
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>

                {/* header Icons */}

                <View style={styles.headerIcons}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.iconBody}>
                            <Ionicons
                                name="md-chevron-back"
                                size={15}
                                color="gray"
                            />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconBody}
                            onPress={() => navigation.navigate('Checkout')}
                        >
                            <Ionicons
                                name="md-cart-outline"
                                size={15}
                                color="gray"
                            />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* Header Title */}

                <View style={styles.body}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        numColumns={2}
                        ListHeaderComponent={<ListHeader navigation={navigation} />}
                        data={selectedProducts}
                        renderItem={({ item }) => (
                            <Products
                                item={item}
                                navigation={navigation}
                            />
                        )}
                        ListFooterComponent={<View
                            style={{ paddingBottom: 200 }} />}
                    />
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
        backgroundColor: '#fff'
    },
    innerContainer: {
        marginLeft: mainWidth / 20,
        marginRight: mainWidth / 20,
    },
    headerIcons: {
        marginTop: mainHeight / 20
    },
    iconBody: {
        width: 30,
        height: 30,
        backgroundColor: '#f2f2f4',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 18
    }
})