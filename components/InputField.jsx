import React from 'react'

import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

function InputField({
    leftIcon = null,
    rightIcon = null,
    iconColor = "#000",
    placeholder = "black",
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
            <TouchableOpacity style={[styles.rightIconTouchable]}>
                {rightIcon && 
                    <MaterialCommunityIcons
                        name={rightIcon}
                        size={20}
                        style={[
                            styles.rightIcon,
                            { color: iconColor }
                        ]}
                    />
                }
            </TouchableOpacity>
        </View>
    )
}

export default InputField;

const styles = StyleSheet.create({
    container: {
        borderRadius: 4,
        flexDirection: "row",
        padding: 12,
        backgroundColor: "red",
        width: "90%"
    },
    input: {
        flex: 1,
        fontSize: 18,
        backgroundColor: "pink",
    },
    leftIcon: {
        marginLeft: 10,
        width: "10%",
        height: "100%"
    },
    rightIconTouchable: {
        width: "10%"
    },
    rightIcon: {
        marginRight: 10,
        width: "100%",
        height: 50,
    }
})