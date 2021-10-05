import React from 'react'
import { StyleSheet, View } from "react-native";
import { IconButton } from "../components";

import { auth } from "../config/firebase";

import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const Stack = createStackNavigator();
const { Navigator, Screen } = Stack;

export default function HomeStack() {
    async function handleSignOut() {
        try {
           await auth.signOut();
        } catch(error) {
            console.error("An error has occured while trying to sign out:", error);
        }
    }
    
    return (
        <Navigator>
            <Screen 
                name="Home"
                component={HomeScreen}
                options={{headerRight: () => (
                    <View style={styles.logoutIcon}>
                        <IconButton 
                            name="logout"
                            size={24}
                            onPress={handleSignOut}
                        />
                    </View>
                )}}
            />
        </Navigator>
    )
}

const styles = StyleSheet.create({
    logoutIcon: {
        transform: [{ rotate: "180deg"}],
        marginRight: 12
    },
})