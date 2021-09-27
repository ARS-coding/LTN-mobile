import React, { useState, useEffect, useContext } from 'react';

import { View, ActivityIndicator } from "react-native";

import { NavigationContainer } from '@react-navigation/native';

import { auth } from "../config/firebase";
import { AuthenticatedUserContext } from './AuthenticatedUserProvider';

import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

export default function RootNavigator() {
    const [isLoading, setIsloading] = useState(true);
    const { user, setUser } =useContext(AuthenticatedUserContext);

    useEffect(() => {
        const unsubscribeAuth = auth.onAuthStateChanged(async authenticatedUser => {
            try {
                authenticatedUser ? setUser(authenticatedUser) : setUser(null);
                setIsloading(false);
            } catch(error) {
                console.error("An error occured on auth state change:" , error)
            }
        });

        // unsubscribe from auth listener on unmount
        return unsubscribeAuth;
    }, [])

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size='large' />
            </View>
        )
    };

    return (
        <NavigationContainer>
            {user ? <HomeStack /> : <AuthStack />}
        </NavigationContainer>
    )
}