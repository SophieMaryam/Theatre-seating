import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import { config } from "./common/config.js";

firebase.initializeApp(config);

export const db = firebase.firestore();


export async function getProfile() {
    const user = firebase.auth().currentUser;
    return await db.collection("profiles").doc(user.uid).get();
}

export async function deleteUserAccount() {
    const user = firebase.auth().currentUser;
    await db.collection("profiles").doc(user).delete()
    .then(() => {
        console.log("Document successfully deleted!");
    }).catch(error => {
        console.error("Error removing document: ", error);
    });
}