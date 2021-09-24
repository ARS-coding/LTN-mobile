import React from 'react'

import { Text, StyleSheet } from "react-native";

export default function ErrorMessage({ error, visible }) {
    return (
        error && visible 
        ? 
        <Text style={styles.errorText}>⚠️ {error}</Text>
        :
        null
    );
};

const styles = StyleSheet.create({
    errorText: {
        color: '#fdca40',
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "600"
    }
});