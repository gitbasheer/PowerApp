import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors, screenWidth } from '../constants'
import Button from '../elements/button'
import Input from '../elements/input'

const Register = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>


            <Image resizeMode={'contain'} style={{ width: screenWidth - 60, height: 100 }} source={require('../Assets/images/powerfan.png')} />
            <View style={styles.inputsWrapper}>


                <View style={styles.inputWrapper}>

                    <Input placeholder={"E-mail"} />
                </View>
                <View style={styles.inputWrapper}>

                    <Input placeholder={"Username"} />
                </View>
                <View style={styles.inputWrapper}>

                    <Input placeholder={"Password"} />
                </View>
                <View style={styles.inputWrapper}>

                    <Input placeholder={"Confirm Password"} />
                </View>
                <View style={styles.inputWrapper}>

                    <Input placeholder={"EXECLUSIVE INVITE code "} />
                </View>
            </View>
            <View style={styles.buttonWrapper}>
                <Button >Sign up </Button>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('login') }}>
                <Text style={styles.signuptext}>

                    Already have an account ? Sign in
                </Text>


            </TouchableOpacity>




        </SafeAreaView>
    )
}

export default Register





const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    labels: {
        color: colors.white,
        fontSize: 15,
        marginVertical: 5

    },
    inputWrapper: {


    },
    inputsWrapper: {
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 20
    },
    buttonWrapper: {
        marginVertical: 20
    },
    signuptext: {
        color: colors.white
    }


})
