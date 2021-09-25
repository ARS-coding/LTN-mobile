import React from 'react'

import { Text, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function ErrorMessage({
    error,
    errorColor,
    visible,
    warningIconSize,
    warningIconColor
}) {
    return (
        error && visible 
        ? 
        <Text style={[styles.errorText, { color: errorColor }]}>
            <AntDesign
                name="warning"
                color={warningIconColor}
                size={warningIconSize}
            />
            {error}
        </Text>
        :
        null
    );
};

const styles = StyleSheet.create({
    errorText: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "600"
    }
});