import React from 'react';
import { View, StyleSheet, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Ionicons, Feather, MaterialIcons, FontAwesome } from '@expo/vector-icons';

export default function Details({ route }) {
    const { item } = route.params;

    return (
        <View>
            <Image
                source={item.image}
                style={styles.image}
                resizeMode='cover'
            />

            {/* Back Icon */}

            <View style={styles.icon}>
                <TouchableOpacity style={styles.iconBody}>
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
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>

                {/* Location */}

                <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
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

                <View style={{ borderWidth: 0.5, borderColor: '#ccc', marginVertical: 10 }} />

                {/* price */}
                <View>
                    <Text style={styles.title}>Ksh {item.price.toFixed(2)}</Text>
                    <Text style={{ fontFamily: 'Nunito-Regular', color: 'gray' }}>Tax rates apply (14%)</Text>
                </View>
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
    }
})