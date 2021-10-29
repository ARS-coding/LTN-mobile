import { auth, firestore } from "../../config/firebase";

export const attachListenerToUserDoc = (uid) => {
  return (dispatch) => {
    return firestore
      .collection("users")
      .doc(uid)
      .onSnapshot((doc) => {
        dispatch({ type: "getUpdatedUser", payload: doc.data() });
      });
  };
};

export const listenForAuthChanges = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        firestore
          .collection("users")
          .doc(user.uid)
          .get()
          .then((doc) => {
            const userReduxState = {
              isSignedIn: true,
              firestoreDoc: doc.data(),
              authCred: user,
            };
            dispatch({ type: "signedIn", payload: userReduxState });
            return userReduxState;
          })
          .then((userReduxState) => {
            dispatch(attachListenerToUserDoc(userReduxState.authCred.uid));
          });
      } else {
        dispatch({ type: "notSignedIn" });
      }
    });
  };
};

export const editProfile = () => ({ type: "editProfile" });
export const saveProfileChanges = () => ({ type: "saveProfileChanges" });
export const discardProfileChanges = () => ({ type: "discardProfileChanges" });

const initialState = {
  isSignedIn: false,
  firestoreDoc: null,
  authCred: null,
  isEditingProfile: false,
  isProfileSaved: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signedIn":
      return { ...action.payload };

    case "notSignedIn":
      return { ...initialState };

    case "getUpdatedUser":
      return { ...state, firestoreDoc: action.payload };

    case "editProfile":
      return { ...state, idEditingProfile: !state.isEditingProfile };

    case "saveProfileChanges":
      return {
        ...state,
        isProfileSaved: true,
        idEditingProfile: !state.isEditingProfile,
      };

    case "discardProfileChanges":
      return {
        ...state,
        isProfileSaved: false,
        idEditingProfile: !state.isEditingProfile,
      };

    default:
      return state;
  }
};

export default userReducer;
