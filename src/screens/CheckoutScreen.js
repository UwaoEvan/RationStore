import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';

import AddCart from '../components/AddCart';
import { addToCart, removeFromCart, deleteItem } from '../store/actions';
import OrderSummary from '../components/OrderSummary';

export default function CheckoutScreen({ navigation }) {
    let items = useSelector(state => state.cart.items);

    const dispatch = useDispatch();

    const header = () => {
        return (
            <Text style={styles.cartTitle}>My Cart</Text>
        )
    }
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <FlatList
                    ListHeaderComponent={header()}
                    data={items}
                    renderItem={({ item }) => (
                        <AddCart
                            item={item}
                            onAdd={() => dispatch(addToCart(item))}
                            onRemove={() => dispatch(removeFromCart(item))}
                            onDelete={() => dispatch(deleteItem(item.id))}
                            items={items}
                        />
                    )}
                    ListFooterComponent={<OrderSummary />}
                    showsVerticalScrollIndicator={false}
                />
            </View>
            <View style={styles.icon}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        style={styles.iconBody}
                        onPress={() => navigation.navigate('Shop')}
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