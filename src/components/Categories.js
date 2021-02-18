import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Categories({ title, total }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={{ color: 'gray', paddingHorizontal: 5 }}>{total}</Text>
            </View>
            <TouchableOpacity>
                <Text style={{ color: '#003fff' }}>Show All</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontFamily: 'Nunito-Bold'
    }
})