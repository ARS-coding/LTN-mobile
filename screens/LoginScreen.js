import React, { useState } from 'react'

import {
    StyleSheet,
    View,
    Text,
    Button as RNButton,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import { Button, InputField, ErrorMessage } from "../components"

import { auth } from "../config/firebase";

export default function LoginScreen({ navigation }) {
    const initialFormData = {
        email: "",
        password: "",
    };
    const [formData, setFormdata] = useState(initialFormData);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [rightIcon, setRightIcon] = useState("eye");
    const [loginError, setLoginError] = useState("");

    function handlePasswordVisibility() {
        if (rightIcon === "eye") {
            setRightIcon("eye-off");
            setFormdata(initialFormData);
        } else if (rightIcon === "eye-off") {
            setRightIcon("eye");
        }
        setPasswordVisibility(!passwordVisibility);
    }

    async function onLogin() {
        try {
            await auth.signInWithEmailAndPassword(formData.email, formData.password);
        } catch(error) {
            setLoginError(error.message);
        }
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <Text style={styles.title}>Login</Text>
                <InputField 
                    containerStyle={{ marginVertical: 20, backgroundColor: "white" }}
                    inputStyle={{ fontSize: 14 }}
                    leftIcon="email"
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    autoFocus={true}

                    onChangeText={(text) => setFormdata({ ...formData, email: text })}
                    value={formData.email}
                />
                <InputField 
                    containerStyle={{ marginBottom: 20, backgroundColor: "white" }}
                    inputStyle={{ fontSize: 14 }}
                    leftIcon='lock'
                    rightIcon={rightIcon}
                    placeholder="Password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    secureTextEntry={passwordVisibility}
                    rightIconOnPress={handlePasswordVisibility}
                    handlePasswordVisibility={passwordVisibility}

                    onChangeText={(text) => setFormdata({ ...formData, password: text })}
                    value={formData.password}
                />
                {(loginError !== "") && <ErrorMessage
                    error={loginError}
                    visible={true}
                />}
                <Button 
                    title="Login"
                    onPress={() => { setLoginError(""); onLogin()}}
                    containerStyle={{ marginBottom: 10 }}
                />
                <RNButton 
                    title="Go to Sign Up"
                    onPress={() => navigation.navigate('SignUp')}
                /> 
            </View>
        </TouchableWithoutFeedback>
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