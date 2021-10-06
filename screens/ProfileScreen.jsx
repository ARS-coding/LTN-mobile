import React from 'react'

import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    Image
} from "react-native";

import { connect } from 'react-redux';
// import { firestore } from '../config/firebase'; // whenever they get into the editing mode, show inputs and let them submit the changes that they have done to their profile data

import PPMaleSVG from "../assets/PPMaleSVG.jsx"
import PPFemaleSVG from "../assets/PPFemaleSVG.jsx"

function ProfileScreen({ firestoreDoc }) {

    const { 
        firstName,
        lastName,
        gender,
        district,
        email,
        imageUrl // TODO: Add a form for users to be able to change their images
    } = firestoreDoc;
    
    function getDefaultGenderImage(gender) {
        switch (gender) {
          case "Prefer not to say":
            return require("../assets/PPGenderless.png");
          case "Male":
            return <PPMaleSVG />;
          case "Female":
            return <PPFemaleSVG />;
          default:
            return undefined;
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.pictureAndName}>
                { !imageUrl && gender !== "Prefer not to say" 
                  ?
                  getDefaultGenderImage(gender)
                  :
                  !imageUrl && gender === "Prefer not to say"
                  ?
                  <Image
                    source={getDefaultGenderImage(gender)}
                    style={styles.picture}
                   />
                   :
                   <Image
                    source={{ uri: imageUrl }}
                    style={styles.picture}
                   />
                }
                <View>
                    <Text style={styles.name}>{firstName}</Text>
                    <Text style={styles.name}>{lastName}</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.genderAndAge}>
                    <View style={[styles.dataField, {flexBasis: "37%", marginRight: "3%"}]}>
                        <Text style={styles.title}>Gender:</Text>
                        <Text style={styles.dataText}>{gender}</Text>
                    </View>
                    <View style={[styles.dataField, {flexBasis: "60%"}]}>
                        <Text style={styles.title}>Age:</Text>
                        <Text style={styles.dataText}>{!
                            firestoreDoc.age ? "Age yet to be added" : firestoreDoc.age}
                        </Text>
                    </View>
                </View>
                <View style={styles.districtAndEducation}>
                    <View style={[styles.dataField, {flexBasis: "37%", marginRight: "3%"}]}>
                        <Text style={styles.title}>District:</Text>
                        <Text style={styles.dataText}>{district}</Text>
                    </View>
                    <View style={[styles.dataField, {flexBasis: "60%"}]}>
                        <Text style={styles.title}>Education:</Text>
                        <Text style={styles.dataText}>
                            {!firestoreDoc.education ? "Education yet to be added" : firestoreDoc.education}
                        </Text>
                    </View>
                </View>
                <View style={styles.dataField}>
                    <Text style={styles.title}>Bio:</Text>
                    <Text style={styles.dataText}>
                        {!firestoreDoc.bio ? "Bio yet to be added" : firestoreDoc.bio}
                    </Text>
                </View>
                <View style={styles.dataField}>
                    <Text style={styles.title}>Number:</Text>
                    <Text style={styles.dataText}>
                        {!firestoreDoc.number ? "Number yet to be added" : firestoreDoc.number}
                    </Text>
                </View>
                <View style={styles.dataField}>
                    <Text style={styles.title}>Address:</Text>
                    <Text style={styles.dataText}>
                        {!firestoreDoc.address ? "Address yet to be added" : firestoreDoc.address}
                    </Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingHorizontal: 12,
        backgroundColor: "#e93b81"
    },
    pictureAndName: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
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
        fontSize: 17,
        color: "black"
    },
    dataField: {
        height: 70
    },
    dataText: {
        color: "white",
        fontSize: 13.5
    }
})

const mapStateToProps = ({firestoreDoc}) => ({ firestoreDoc }); 

export default connect(mapStateToProps)(ProfileScreen);