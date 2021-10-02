import React, { useState } from 'react'

import {
    View,
    Text,
    Button as RNButton,
    StyleSheet,
    TouchableWithoutFeedback, 
    Keyboard } from "react-native";
import { InputField, Button, ErrorMessage } from '../components';

import { auth, firestore } from "../config/firebase";
import { setUserDocument, removeOneProp } from "../utils/helpers";

import { arrayOfDistrictObjects } from "../utils/constants";
import DropDownPicker from 'react-native-dropdown-picker';

export default function SignUpScreen({ navigation }) {
    const initialFormData = {
        firstName: "",
        lastName: "",
        district: "",
        gender: "",
        email: "",
        password: "",
        passwordConfirmation: ""
    };
    
    const [formData, setFormData] = useState(initialFormData);
    const [isDistrictOpen, setIsDistrictOpen] = useState(false);
    const [isGenderOpen, setIsGenderOpen] = useState(false);
    const [passwordInputs, setPasswordInputs] = useState({
        passwordInput: {
            icon: "eye-off",
            isNotVisible: true
        },
        passwordConfirmationInput: {
            icon: "eye-off",
            isNotVisible: true
        }
    });
    const [signUpError, setSignUpError] = useState("");
    console.log(formData)
    
    function handlePasswordVisibility(targetInput) {
        if (passwordInputs[targetInput].icon === "eye") {
            setPasswordInputs({ ...passwordInputs, [targetInput]: { icon: "eye-off", isNotVisible: true } })
        } else if (passwordInputs[targetInput].icon === "eye-off") {
            setPasswordInputs({ ...passwordInputs, [targetInput]: { icon: "eye", isNotVisible: false } })
        }
    }

    async function handleSignUp() {
        if(formData.firstName && formData.lastName && (formData.password === formData.passwordConfirmation)) {
            try {
                const { uid, additionalUserInfo: { isNewUser } } = await auth.createUserWithEmailAndPassword(formData.email, formData.password);
                setUserDocument(uid, removeOneProp(formData, "passwordConfirmation"));
                setFormData(initialFormData);
            } catch(error) {
                setSignUpError(error.message);
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
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
                            containerStyle={{ flex: 1, marginBottom: 12, backgroundColor: "white" }}
                            inputStyle={{ marginLeft: 15, fontSize: 14 }}
                            placeholder="First Name"
                            autoFocus={true}
                            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
                            value={formData.firstName}
                        />
                        <InputField
                            containerStyle={{ flex: 1, marginBottom: 12, marginLeft: 8, backgroundColor: "white" }}
                            inputStyle={{ marginLeft: 15, fontSize: 14 }}
                            placeholder="Last Name"
                            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
                            value={formData.lastName}
                        />
                    </View>
                    <DropDownPicker
                        open={isDistrictOpen}
                        setOpen={() => setIsDistrictOpen(!isDistrictOpen)}
                        
                        value={formData.district}
                        setValue={valueFunction => setFormData({ ...formData, district: valueFunction() })}
                        
                        placeholder="District"
                        style={{ borderWidth: 2, borderRadius: 4, marginBottom: 12, paddingLeft: 15, height: 56 }}
                        items={arrayOfDistrictObjects}
                        schema={{ label: "content", value: "content" }}
                    />
                    <DropDownPicker
                        open={isGenderOpen}
                        setOpen={() => setIsGenderOpen(!isGenderOpen)}
                        
                        value={formData.gender}
                        setValue={valueFunction => setFormData({ ...formData, gender: valueFunction() })}
                        
                        placeholder="Gender"
                        style={{ borderWidth: 2, borderRadius: 4, marginBottom: 12, paddingLeft: 15, height: 56 }}
                        items={[
                            { content: "Male", id: 0 },
                            { content: "Female", id: 1 }, 
                            { content: "Prefer not to say", id: 2 }
                        ]}
                        schema={{ label: "content", value: "content" }}
                    />
                    <InputField
                        containerStyle={{ marginBottom: 12, backgroundColor: "white" }}
                        inputStyle={{ fontSize: 14 }}
                        placeholder="Email"
                        leftIcon="email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        
                        onChangeText={(text) => setFormData({ ...formData, email: text })}
                        value={formData.email}
                    />
                    <InputField
                        containerStyle={{ marginBottom: 12, backgroundColor: "white" }}
                        inputStyle={{ fontSize: 14 }}
                        placeholder="Password"
                        leftIcon="lock"
                        rightIcon={passwordInputs.passwordInput.icon}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={passwordInputs.passwordInput.isNotVisible}
                        rightIconOnPress={() => handlePasswordVisibility("passwordInput")}
                        
                        onChangeText={(text) => setFormData({ ...formData, password: text })}
                        value={formData.password}
                    />
                    <InputField
                        containerStyle={{ marginBottom: 20, backgroundColor: "white" }}
                        inputStyle={{ fontSize: 14 }}
                        placeholder="Confirm password"
                        leftIcon="lock"
                        rightIcon={passwordInputs.passwordConfirmationInput.icon}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={passwordInputs.passwordConfirmationInput.isNotVisible}
                        rightIconOnPress={() => handlePasswordVisibility("passwordConfirmationInput")}
                        
                        onChangeText={(text) => setFormData({ ...formData, passwordConfirmation: text })}
                        value={formData.confirmationPassword}
                    />
                </View>
                {(signUpError !== "") && <ErrorMessage
                    error={signUpError}
                    visible={true}
                />}
                <View>
                    <Button 
                        title="Sign Up"
                        containerStyle={{ marginBottom: 12 }}
                        onPress={handleSignUp}    
                    />
                    <RNButton 
                        title="Go to Login" 
                        onPress={() => navigation.navigate('Login')}
                    />
                </View>
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