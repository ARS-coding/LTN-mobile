import React, { useState } from 'react'

import { View, Text, StyleSheet } from "react-native";
import { InputField } from '../components';

export default function SignUpScreen() {
    
    const [formData, setFormData] = useState({ 
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    });
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [rightIcon, setRightIcon] = useState("eye");
    const [signUpError, setSignUpError] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={{ height: "60%", marginTop: 30, backgroundColor: "white" }}>
                <View style={{flexDirection: "row"}}>
                    <InputField
                        containerStyle={{ flex: 1, marginBottom: 20, backgroundColor: "white" }}
                        inputStyle={{ marginLeft: 12, fontSize: 14 }}
                        placeholder="First Name"
                        onChangeText={(text) => setFormdata({ ...formData, firstName: text })}
                        value={formData.firstName}
                    />
                    <InputField
                        containerStyle={{ flex: 1, marginBottom: 20, marginLeft: 8, backgroundColor: "white" }}
                        inputStyle={{ marginLeft: 12, fontSize: 14 }}
                        placeholder="Last Name"
                        onChangeText={(text) => setFormdata({ ...formData, lastName: text })}
                        value={formData.lastName}
                    />
                </View>
                
                <InputField
                    containerStyle={{ marginBottom: 20, backgroundColor: "white" }}
                    inputStyle={{ fontSize: 14 }}
                    placeholder="Email"
                    leftIcon="email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoFocus={true}
                    onChangeText={(text) => setFormdata({ ...formData, email: text })}
                    value={formData.email}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e93b81",
        paddingHorizontal: 12,
        paddingTop: 40,
    },
    title: {
        alignSelf: "center",
        fontSize: 24,
        fontWeight: "700",
        color: "white",
    }
})