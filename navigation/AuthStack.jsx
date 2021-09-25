import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;


export default function AuthStack() {
    return (
        <Navigator headerMode="none">
            <Screen name="Login" component={LoginScreen} />
            <Screen name="SignUp" component={SignUpScreen} />
        </Navigator>
    );
}
