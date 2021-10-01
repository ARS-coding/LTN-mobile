import React, { useContext } from 'react'

import { StyleSheet, View, Text } from "react-native";
import { IconButton } from '../components';

import { auth } from "../config/firebase";
import { connect } from 'react-redux';

function HomeScreen({ email, uid }) {
    async function handleSignOut() {
        try {
           await auth.signOut();
        } catch(error) {
            console.error("An error has occured while trying to sign out:", error);
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.title}>Welcome, {email}!</Text>
                <IconButton 
                    name="logout"
                    size={24}
                    color="white"
                    onPress={handleSignOut}
                />
            </View>

            <Text style={styles.text}>Your UID is: {uid}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e93b81",
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 12,
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

const mapStateToProps = ({ authCred: { email, uid } }) => ({ email, uid }); 

export default connect(mapStateToProps)(HomeScreen);