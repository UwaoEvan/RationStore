import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import AddCart from '../components/AddCart';

export default function Checkout({ navigation }) {
    const items = useSelector(state => state.cart.items)

    const deleteItem = id => {
        items.filter(i => i.id !== id)
    }

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
                <FlatList
                    data={items}
                    renderItem={({ item }) => (
                        <AddCart item={item} />
                    )}
                />

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
        marginLeft: mainWidth / 20,
        marginRight: mainWidth / 20
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
        height: mainHeight / 4,
    }
})