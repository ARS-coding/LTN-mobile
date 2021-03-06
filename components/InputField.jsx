import React from 'react'

import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';

function InputField({
    leftIcon = null,
    rightIcon = null,
    iconColor = "#000",
    placeholder = "",
    placeholderTextColor = "#222",
    inputStyle,
    containerStyle,
    rightIconOnPress,
    ...rest
}) {
    return (
        <View style={[styles.container, containerStyle]}>
            {leftIcon && 
                <MaterialCommunityIcons
                    name={leftIcon}
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
                {...rest}
           />
            {rightIcon &&
                <TouchableOpacity style={styles.rightIconTouchable} onPress={rightIconOnPress}>
                    <MaterialCommunityIcons
                        name={rightIcon}
                        size={20}
                        style={{ color: iconColor }}
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
        paddingVertical: 12,
        borderWidth: 2,
    },
    input: {
        flex: 1,
        fontSize: 18,
    },
    leftIcon: {
        marginLeft: 8,
        marginRight: 10,
        alignSelf: "center"
    },
    rightIconTouchable: {
        marginRight: 15,
        alignSelf: "center"
    },
})