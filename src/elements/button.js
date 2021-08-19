import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, screenWidth } from '../constants'

const Button = ({ children }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}> {children} </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: '#0d6efd',
        width: screenWidth - 30,
        borderRadius:10

    },
    text: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold'
    }


})
