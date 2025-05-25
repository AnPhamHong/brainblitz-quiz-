import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const friendlyFirebaseError = (code) => {
  switch (code) {
    case "auth/user-not-found":
      return "Email is not registered.";
    case "auth/wrong-password":
      return "Incorrect password.";
    default:
      return "Something went wrong. Please try again.";
  }
};
