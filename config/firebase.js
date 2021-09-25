import firebaseApp from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import Constants from "expo-constants";

// Initialise firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: Constants.manifest.extra.apiKey,
    authDomain: Constants.manifest.extra.authDomain,
    projectId: Constants.manifest.extra.projectId,
    storageBucket: Constants.manifest.extra.storageBucket,
    messagingSenderId: Constants.manifest.extra.messagingSenderId,
    appId: Constants.manifest.extra.appId,
    measurementId: Constants.manifest.extra.measurementId
};

if (firebaseApp.apps.length === 0) {
    firebaseApp.initializeApp(firebaseConfig);
} else {
    firebaseApp.app();
}

export const auth = new firebaseApp.auth();
export const firestore = new firebaseApp.firestore();

export default firebaseApp;