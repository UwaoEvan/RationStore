import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Dimensions, Image, View } from 'react-native';

export default function Products({ item, navigation }) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigation.navigate('Details', { item: item })}
        >
            <Image
                source={item.image}
                style={styles.image}
                resizeMode='cover'
            />
            <View style={{ paddingVertical: 10 }}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.price}>Ksh {item.price.toFixed(2)}</Text>
                <Text>{item.available}</Text>
            </View>
        </TouchableOpacity>
    )
}
const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;
const styles = StyleSheet.create({
    container: {
        width: mainWidth / 2.5,
        height: mainHeight / 3,
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 0.3,
        marginHorizontal: 5
    },
    image: {
        width: '100%',
        height: '70%',
        borderRadius: 10
    },
    productTitle: {
        fontFamily: 'Nunito-Bold'
    },
    price: {
        fontFamily: 'Nunito-Regular',
        color: 'gray',
        fontSize: 12
    }
})