import React, { useState } from 'react'

import { View, Text, Button as RNButton, StyleSheet } from "react-native";
import { InputField, Button, ErrorMessage } from '../components';

import { auth } from "../config/firebase";

export default function SignUpScreen() {
    const initialFormData = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    };

    const [formData, setFormData] = useState(initialFormData);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [rightIcon, setRightIcon] = useState("eye");
    const [signUpError, setSignUpError] = useState("");

    function handlePasswordVisibility() {
        if (rightIcon === "eye") {
            setRightIcon("eye-off");
            setFormdata(initialFormData);
        } else if (rightIcon === "eye-off") {
            setRightIcon("eye");
        }
        setPasswordVisibility(!passwordVisibility);
    }

    async function handleSignUp() {
        try {
            await auth.createUserWithEmailAndPassword(formData.email, formData.password);
        } catch(error) {
            setSignUpError(error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Create a{" "}
                <Text style={{textDecorationLine: "underline"}}>
                    New
                </Text> 
                {" "}Account!
            </Text>
            <View style={{ marginTop: 30 }}>
                <View style={{flexDirection: "row"}}>
                    <InputField
                        containerStyle={{ flex: 1, marginBottom: 20, backgroundColor: "white" }}
                        inputStyle={{ marginLeft: 15, fontSize: 14 }}
                        placeholder="First Name"
                        autoFocus={true}
                        onChangeText={(text) => setFormData({ ...formData, firstName: text })}
                        value={formData.firstName}
                    />
                    <InputField
                        containerStyle={{ flex: 1, marginBottom: 20, marginLeft: 8, backgroundColor: "white" }}
                        inputStyle={{ marginLeft: 15, fontSize: 14 }}
                        placeholder="Last Name"
                        onChangeText={(text) => setFormData({ ...formData, lastName: text })}
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
                    
                    onChangeText={(text) => setFormData({ ...formData, email: text })}
                    value={formData.email}
                />
                <InputField
                    containerStyle={{ marginBottom: 20, backgroundColor: "white" }}
                    inputStyle={{ fontSize: 14 }}
                    placeholder="Password"
                    leftIcon="lock"
                    rightIcon={rightIcon}
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={passwordVisibility}
                    rightIconOnPress={handlePasswordVisibility}
                    
                    onChangeText={(text) => setFormData({ ...formData, password: text })}
                    value={formData.password}
                />
            </View>
            {(signUpError !== "") && <ErrorMessage
                error={signUpError}
                visible={true}
            />}
            <View>
                <Button 
                    title="Sign Up"
                    containerStyle={{ marginBottom: 10 }}
                    onPress={handleSignUp}    
                />
                <RNButton 
                    title="Go to Login" // TODO: add onpress of navigation.navigate('Signup') 
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