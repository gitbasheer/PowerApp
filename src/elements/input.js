import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { colors, screenWidth } from '../constants'

const Input = ({ onChange, value,placeholder }) => {
    return (
        <View>
            <TextInput placeholderTextColor={"#ccc"} placeholder={placeholder} onChange={onChange} style={styles.input} />

        </View>
    )
}

export default Input

const styles = StyleSheet.create({

    input: {
        backgroundColor: colors.white,
        fontSize: 17,
        height:40,
        padding:10,
        width: screenWidth - 30
    }

})
