import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

export default function CustomButton({ title, pressed }) {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={pressed}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;

const styles = StyleSheet.create({
    container: {
        width: mainWidth / 1.1,
        backgroundColor: '#104afa',
        borderRadius: 15,
        marginVertical: '2%'
    },
    title: {
        paddingVertical: 15,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Nunito-Bold',
        color: '#fff',
        fontSize: 12
    }
})