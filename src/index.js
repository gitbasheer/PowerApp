import React from 'react'
import { SafeAreaView } from 'react-native'
import Register from './screens/register'
import Login from './screens/login'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const MainStack = createNativeStackNavigator()

const MainStackNavigation = () => {
    return (

        <MainStack.Navigator screenOptions={{headerShown:false}}>
            <MainStack.Screen name="login" component={Login} />
            <MainStack.Screen name="register" component={Register} />

        </MainStack.Navigator>

    )
}

const Main = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <NavigationContainer>


                <MainStackNavigation />

            </NavigationContainer>




        </SafeAreaView>
    )
}

export default Main




