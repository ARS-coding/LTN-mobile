import { firestore } from "../config/firebase";

import PPMaleSVG from "../assets/PPMaleSVG.svg";
import PPFemaleSVG from "../assets/PPFemaleSVG.svg";
import PPGenderless from "../assets/PPGenderless.png";

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

export function getDefaultGenderImage(gender) {
  switch (gender) {
    case "Prefer not to say":
      return PPGenderless;
    case "Male":
      return PPMaleSVG;
    case "Female":
      return PPFemaleSVG;
    default:
      return undefined;
  }
};