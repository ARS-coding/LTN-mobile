import React from 'react'

import { StyleSheet, View, Text, Image, ImageBackground } from "react-native";

import { connect } from 'react-redux';
import { firestore } from '../config/firebase';

import PPMaleSVG from "../assets/PPMaleSVG.jsx"
import PPFemaleSVG from "../assets/PPFemaleSVG.jsx"

function HomeScreen({ firestoreDoc }) {

    const { 
        firstName,
        lastName,
        gender,
        district,
        email,
        imageUrl // TODO: Add a form for users to be able to change this
    } = firestoreDoc;
    
    function getDefaultGenderImage(gender) {
        switch (gender) {
          case "Prefer not to say":
            return "../assets/PPGenderless.png";
          case "Male":
            return <PPMaleSVG />;
          case "Female":
            return <PPFemaleSVG />;
          default:
            return undefined;
        }
    };

    return (
        <View style={[ styles.container, {backgroundColor: "#e93b81"} ]}>
            <View style={styles.pictureAndName}>
                { !imageUrl && gender !== "Prefer not to say" 
                  ?
                  getDefaultGenderImage(gender)
                  :
                  <Image
                    source={require("../assets/PPGenderless.png")}
                    style={styles.picture}
                   />
                }
                <View>
                    <Text style={styles.name}>{firstName}</Text>
                    <Text style={styles.name}>{lastName}</Text>
                </View>
            </View>
            <View style={[styles.otherData]}>
                <View style={styles.genderAndAge}>
                    <View style={{height: 70, flexBasis: "40%"}}>
                        <Text style={[styles.title, { color: "black" }]}>Gender:</Text>
                        <Text style={{ color: "white" }}>{gender}</Text>
                    </View>
                    <View style={{height: 70, flexBasis: "60%"}}>
                        <Text style={[styles.title, { color: "black" }]}>Age:</Text>
                        <Text style={{ color: "white" }}>{!firestoreDoc.age ? "Age yet to be added" : firestoreDoc.age}</Text>
                    </View>
                </View>
                <View style={styles.districtAndEducation}>
                    <View style={{height: 70, flexBasis: "40%"}}>
                        <Text style={[styles.title, { color: "black" }]}>District:</Text>
                        <Text style={{ color: "white" }}>{district}</Text>
                    </View>
                    <View style={{height: 70, flexBasis: "60%"}}>
                        <Text style={[styles.title, { color: "black" }]}>Education:</Text>
                        <Text style={{ color: "white" }}>{!firestoreDoc.education ? "Education yet to be added" : firestoreDoc.education}</Text>
                    </View>
                </View>
                <View style={{height: 70}}>
                    <Text style={[styles.title, { color: "black" }]}>Bio:</Text>
                    <Text style={{ color: "white" }}>{!firestoreDoc.bio ? "Bio yet to be added" : firestoreDoc.bio}</Text>
                </View>
                <View style={{height: 70}}>
                    <Text style={[styles.title, { color: "black" }]}>Number:</Text>
                    <Text style={{ color: "white" }}>{!firestoreDoc.number ? "Number yet to be added" : firestoreDoc.number}</Text>
                </View>
                <View style={{height: 70}}>
                    <Text style={[styles.title, { color: "black" }]}>Address:</Text>
                    <Text style={{ color: "white" }}>{!firestoreDoc.address ? "Address yet to be added" : firestoreDoc.address}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 12,
    },
    pictureAndName: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24
    },
    picture: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 30,
        color: "white",
        marginLeft: 20
    },
    otherData: {
        flex: 1,
    },
    genderAndAge: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    districtAndEducation: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 17
    }
})

const mapStateToProps = ({firestoreDoc}) => ({ firestoreDoc }); 

export default connect(mapStateToProps)(HomeScreen);