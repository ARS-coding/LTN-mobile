import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

export default function HomeStack() {
    return (
        <Navigator headerMode="none">
            <Stack name="Home" component={HomeScreen} />
        </Navigator>
    )
}
