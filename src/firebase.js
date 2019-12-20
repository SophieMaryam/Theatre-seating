import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import { config } from "./common/config.js";

firebase.initializeApp(config);

export const db = firebase.firestore();
const user = firebase.auth().currentUser;

export async function getProfile() {
    const user = firebase.auth().currentUser;
    const querySnapshot = await db.collection("profiles").doc(user.uid).get()
    const userFullName = querySnapshot.data().name;
    return userFullName;
}

export async function deleteUserAccount() {
    await db.collection("profiles").doc(user).delete()
        .then(() => {
            console.log("Document successfully deleted!");
        }).catch(error => {
            console.error("Error removing document: ", error);
        });
}

export async function updateUserPersonalData(updatedUserData) {
    const user = firebase.auth().currentUser;
    const profileRef = await db.collection("profiles").doc(user.uid);
    return profileRef.update({
      group: updatedUserData.name
    }).then(() => {
      return {success: true}
    }).catch((error) => {
      return new Error('Error updating document: ', error)
    });
  }



