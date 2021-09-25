import React, { useContext } from 'react'

import { StyleSheet, View, Text } from "react-native";
import { IconButton } from '../components';

import { AuthenticatedUserContext } from "../navigation/AuthenticatedUserProvider";
import { auth } from "../config/firebase";

export default function HomeScreen() { // IF THEY ARE GONNA SEE THIS PAGE JUST WHEN THEY ARE LOGGED IN, THERE'S NO NEED FOR CONDITIONAL RENDERING
    
    const { user } = useContext(AuthenticatedUserContext);

    async function handleSignOut() {
        try {
            auth.signOut();
        } catch(error) {
            console.error("An error has occured while trying to sign out:", error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Welcome, {user?.email}!</Text>
                <IconButton 
                    name="logout"
                    size={24}
                    color="white"
                    onPress={handleSignOut}
                />
            </View>

            <Text style={styles.text}>Your UID is: {user?.uid}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e93b81",
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 12
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 24
    },
    title: {
        alignSelf: "center",
        fontWeight: "600",
        color: "white",
    },
    text: {
        fontSize: 16,
        fontWeight: "normal",
        color: "white"
    }
})