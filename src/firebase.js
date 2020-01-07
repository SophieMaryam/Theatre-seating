import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import { config } from "./common/config.js";
import { router } from "./router/routes";

firebase.initializeApp(config);

export const db = firebase.firestore();

export async function getAllUserProfileData() {
  const user = firebase.auth().currentUser;
  const querySnapshot = await db.collection("profiles").doc(user.uid).get()
  const userProfile = querySnapshot.data();
  return userProfile;
}

export async function deleteUserAccount() {
  const user = firebase.auth().currentUser;
  await db.collection("profiles").doc(user.uid).delete()
    .then(() => {
      firebase.auth().signOut()
        .then(() => {
          router.push({ name: "HomePage" })
        })
    }).catch(error => {
      console.error("Error removing document: ", error);
    });
}

export async function updateUserPersonalData(updatedUserData) {
  const user = firebase.auth().currentUser;
  await db.collection("profiles").doc(user.uid).update({
    name: updatedUserData.name,
    address: updatedUserData.address,
    postalCode: updatedUserData.postalCode,
    phoneNumber: updatedUserData.phoneNumber
  })
}


export async function userLogin(email, password, value) {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      router.push(value || '/profile')
    })
    .catch(err => console.log(err));
}

export async function userRegistration(email, password, fullName) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      db.collection("profiles").doc(user.uid).set({
        email: email,
        name: fullName,
        address: "",
        postalCode: "",
        household: "",
        phoneNumber: "",
        purchasedProducts: []
      })
      router.replace("profile")
    })
}
