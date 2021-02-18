import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import CustomButton from '../components/CustomButton';
import { addToCart } from '../store/actions';

export default function Details({ route, navigation }) {
    const { item } = route.params;
    const dispatch = useDispatch();

    return (
        <View>
            <Image
                source={item.image}
                style={styles.image}
                resizeMode='cover'
            />

            {/* Back Icon */}

            <View style={styles.icon}>
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
            </View>

            {/* Bottom Banner */}

            <View style={styles.bottom}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
                    <Feather
                        name="shopping-cart"
                        size={14}
                        color="#003fff"
                    />
                    <Text style={{ color: '#003fff', paddingHorizontal: 5 }}>Shopping</Text>
                </View>
                <View style={{ justifyContent: 'center', paddingVertical: 5 }}>
                    <Text style={styles.title}>{item.title}</Text>
                    <TouchableOpacity style={{ ...styles.titleIcon, position: 'absolute', left: '85%' }}>
                        <Feather
                            name="link-2"
                            size={20}
                            color="#003fff"
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.description}>{item.description}</Text>

                {/* Location */}

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
                        <Text style={styles.location}>{item.location}</Text>
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

                <View style={{ borderWidth: 0.5, borderColor: '#ccc', marginVertical: '3%' }} />

                {/* price */}
                <View>
                    <Text style={styles.title}>Ksh {item.price.toFixed(2)}</Text>
                    <Text style={{ fontFamily: 'Nunito-Regular', color: 'gray' }}>Tax rates apply (14%)</Text>
                </View>

                <CustomButton title='add to cart' pressed={() => {
                    dispatch(addToCart(item))
                    navigation.navigate('Checkout')
                }
                }
                />
            </View>
        </View >
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    image: {
        width: mainWidth / 1,
        height: mainHeight / 2,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    icon: {
        position: 'absolute',
        top: mainHeight / 20
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
    bottom: {
        marginHorizontal: mainWidth / 20
    },
    title: {
        fontFamily: 'Nunito-Bold',
        fontSize: 20
    },
    description: {
        fontFamily: 'Nunito-Regular',
        color: 'gray',
        paddingVertical: 10
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
    titleIcon: {
        width: 40,
        height: 40,
        backgroundColor: '#ebf0ff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
    }
})