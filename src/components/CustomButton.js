import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

export default function CustomButton({ title }) {
    return (
        <TouchableOpacity
            style={styles.container}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

const { width, height } = Dimensions.get('screen');
const mainWidth = width;
const mainHeight = height;

const styles = StyleSheet.create({
    container: {
        width: mainWidth
    }
})