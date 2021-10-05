import { firestore } from "../config/firebase";

export function removeOneProp(object, propToBeRemoved) {
  const copyObj = { ...object };
  delete copyObj[propToBeRemoved];
  return copyObj;
};

export function setUserDocument(docTitle, docData) {
  return firestore.collection("users").doc(docTitle).set(docData);
};

export function createInterestString(interests) {
  let interestsString = "";
  interests.forEach((interestObj, index, array) => {
    if (index === array.length - 1) {
      interestsString += `${interestObj.content}.`;
      return;
    }
    interestsString += `${interestObj.content} | `;
  });
  return interestsString;
};