import React from "react"

import { Text, Pressable, StyleSheet } from "react-native";

export default function Button({ 
    title,
    titleColor = "#fff",
    titleSize = 14,
    backgroundColor = "#000",
    width = "100%",
    onPress,
    containerStyle
}) {
    return (
        <Pressable 
            onPress={onPress}
            style={arguments => {
                return arguments.pressed 
                ?
                [
                    ...styles.base,
                    {
                        opacity: .5,
                        backgroundColor,
                        width
                    },
                    containerStyle
                ]
                :
                [
                    styles.base,
                    {
                        opacity: 1,
                        backgroundColor,
                        width
                    },
                    containerStyle
                ];
            }}
        >
            <Text style={[styles.text, { color: titleColor, fontSize: titleSize }]}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    text: {
      fontWeight: '600'
    },
    base: {
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 42,
      borderRadius: 4,
      paddingHorizontal: 12
    }
});