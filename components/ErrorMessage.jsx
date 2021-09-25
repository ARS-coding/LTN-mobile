import React from 'react'

import { Text, View, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function ErrorMessage({
    error,
    errorColor = "white",
    visible,
    warningIconSize = 26,
    warningIconColor = "white"
}) {
    return (
        error && visible 
        ? 
        <View style={[styles.container]}>
            <View style={{ alignSelf: "center" }}>
                <AntDesign
                    name="warning"
                    color={warningIconColor}
                    size={warningIconSize}
                    style={styles.warningIcon, { marginHorizontal: 15 }}
                />
            </View>
            <Text style={[styles.warningText, { color: errorColor }]}>{error}</Text>
        </View>
        :
        null
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        flexDirection: "row"
    },
    warningIcon: {
        marginRight: 15,
        
    },
    warningText: {
        fontSize: 20,
        fontWeight: "600"
    }
});