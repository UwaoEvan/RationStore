import React from 'react';
import { View, Dimensions, Image, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeFromCart, deleteItem } from '../store/actions';

export default function AddCart({ item }) {
    let items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    const getItemsQty = id => {
        let found = items.filter(i => i.id === id);

        if (found) {
            return found[0].qty;
        } else {
            return 0;
        }
    }

    return (
        <TouchableWithoutFeedback
            onPress={() => console.log('Pressed')}
        >
            <View>
                <View style={styles.container}>
                    <Image
                        source={item.image}
                        resizeMode='contain'
                        style={styles.image}
                    />
                    <View style={{ marginHorizontal: 20 }}>
                        <Text style={{ fontFamily: 'Nunito-Bold' }}>{item.title}</Text>
                        <Text style={{ fontFamily: 'Nunito-Regular', color: 'gray' }}>Ksh {item.price}</Text>
                    </View>
                    <View style={styles.iconContainer}>
                        <View style={styles.icons}>
                            <TouchableOpacity
                                onPress={() => dispatch(removeFromCart(item))}
                            >
                                <EvilIcons
                                    name="minus"
                                    size={18}
                                    color="black"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontFamily: 'Nunito-Regular', marginHorizontal: 10 }}>{getItemsQty(item.id)}</Text>

                            <TouchableOpacity
                                onPress={() => dispatch(addToCart(item))}
                            >
                                <EvilIcons
                                    name="plus"
                                    size={18}
                                    color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.delete}
                                onPress={() => dispatch(deleteItem(item.id))}
                            >
                                <EvilIcons
                                    name="trash"
                                    size={18}
                                    color="black"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        borderWidth: 0.5,
                        borderColor: '#ccc'
                    }}
                />
            </View>
        </TouchableWithoutFeedback>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        width: mainWidth / 2.5,
        height: mainHeight / 12,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginVertical: 2,
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
        width: '100%',
        height: '100%'
    },
    icons: {
        flexDirection: 'row'
    },
    iconContainer: {
        position: 'absolute',
        top: mainHeight / 20,
        left: mainWidth / 2.28
    },
    delete: {
        width: 20,
        height: 20,
        backgroundColor: '#b9b9c2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: mainWidth / 4.5
    }
})