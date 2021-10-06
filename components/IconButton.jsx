import React from 'react'

import { Pressable, StyleSheet } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function IconButton({ color, size, onPress, name, style }) {
    return (
        <Pressable
            style={({ pressed: isPressed }) => {
                if (isPressed) {
                    return [styles.base, style, { opacity: .5 }]
                };
                return [styles.base, style, { opacity: 1 }];
            }}
            onPress={onPress}
        >
            <AntDesign name={name} size={size} color={color} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    base: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    }
});