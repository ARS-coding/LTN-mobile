import React, { useState } from 'react'

import {
    View,
    ScrollView,
    Text,
    Button as RNButton,
    StyleSheet
} from "react-native";
import { InputField, Button, ErrorMessage } from '../components';

import { auth } from "../config/firebase";
import { setUserDocument, removeOneProp } from "../utils/helpers";

import { arrayOfDistrictObjects } from "../utils/constants";
import { Picker } from '@react-native-picker/picker';

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
    
    function handlePasswordVisibility(targetInput) {
        if (passwordInputs[targetInput].icon === "eye") {
            setPasswordInputs({ ...passwordInputs, [targetInput]: { icon: "eye-off", isNotVisible: true } })
        } else if (passwordInputs[targetInput].icon === "eye-off") {
            setPasswordInputs({ ...passwordInputs, [targetInput]: { icon: "eye", isNotVisible: false } })
        }
    }

    function handleSignUp() {
        if(
            formData.firstName &&
            formData.lastName &&
            formData.gender &&
            formData.district &&
            (formData.password === formData.passwordConfirmation)
        ) {
            auth.createUserWithEmailAndPassword(formData.email, formData.password)
            .then((authCred) => setUserDocument(authCred.user.uid, removeOneProp(formData, "passwordConfirmation")))
            .catch(error => setSignUpError(error.message))
        }
    }

    return (
        <ScrollView style={styles.container}>
            <>
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
                            inputStyle={{ marginLeft: 8, fontSize: 14 }}
                            placeholder="First Name"
                            autoFocus={true}
                            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
                            value={formData.firstName}
                        />
                        <InputField
                            containerStyle={{ flex: 1, marginBottom: 12, marginLeft: 8, backgroundColor: "white" }}
                            inputStyle={{ marginLeft: 8, fontSize: 14 }}
                            placeholder="Last Name"
                            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
                            value={formData.lastName}
                        />
                    </View>
                    <View style={styles.picker}>
                        <Picker 
                            selectedValue={formData.gender} 
                            onValueChange={gender => setFormData({ ...formData, gender: gender })}
                            style={{ flex: 1 }}
                        >
                            <Picker.Item 
                                style={{ fontSize: 14 }}
                                label="Gender" 
                                value={null}
                            />
                            <Picker.Item style={{ fontSize: 14 }} label="Male" value="Male" />
                            <Picker.Item style={{ fontSize: 14 }} label="Female" value="Female" />
                            <Picker.Item style={{ fontSize: 14 }} label="Prefer not to say" value="Prefer not to say" />
                        </Picker>
                    </View>
                    <View style={styles.picker}>
                        <Picker 
                            selectedValue={formData.district} 
                            onValueChange={district => setFormData({ ...formData, district: district })}
                            style={{ flex: 1 }}
                        >
                            <Picker.Item 
                                style={{ fontSize: 14 }} 
                                label="District"
                                value={null}
                            />
                            {arrayOfDistrictObjects.map((districtObject) => {
                                return (
                                    <Picker.Item
                                        key={districtObject.id}
                                        style={{fontSize: 14}} 
                                        label={districtObject.content}
                                        value={districtObject.content}
                                    />
                                )
                            })}
                        </Picker>
                    </View>
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
            </>
        </ScrollView>
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
    },
    picker: {
        backgroundColor: "white",
        borderRadius: 4,
        borderWidth: 2 ,
        height: 58,
        marginBottom: 12 
    }
})