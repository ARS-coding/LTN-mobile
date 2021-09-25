import React from 'react'

import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

function InputField({
    leftIcon = null,
    rightIcon = null,
    iconColor = "#000",
    placeholder = "",
    placeholderTextColor = "#444",
    inputStyle,
    containerStyle
}) {
    return (
        <View style={[styles.container, containerStyle]}>
            {leftIcon && 
                <MaterialCommunityIcons
                    size={20}
                    style={[
                        styles.leftIcon,
                        { color: iconColor }
                    ]}
                />
            }
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                style={[styles.input, inputStyle]}
            />
            {rightIcon && 
                <TouchableOpacity style={[styles.rightIconTouchable]}>
                    <MaterialCommunityIcons
                        name={rightIcon}
                        size={20}
                        style={[
                            styles.rightIcon,
                            { color: iconColor }
                        ]}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

export default InputField;

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        flexDirection: "row",
        padding: 12,
        borderWidth: 2
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    leftIcon: {
        marginRight: 10,
    },
    rightIconTouchable: {
        width: "10%"
    },
    rightIcon: {
        marginLeft: 10,
        alignSelf: "center",
    }
})