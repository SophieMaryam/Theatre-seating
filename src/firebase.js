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
      console.log("Document successfully deleted!");
      firebase.auth().signOut()
        .then(() => {
          router.push({ name: "HomePage" })
        })
        .catch(err => console.log(err));
    }).catch(error => {
      console.error("Error removing document: ", error);
    });
}

export async function updateUserPersonalData(updatedUserData) {
  const user = firebase.auth().currentUser;
  const profileRef = await db.collection("profiles").doc(user.uid);
  return profileRef.update({
    name: updatedUserData.name,
    address: updatedUserData.address,
    postalCode: updatedUserData.postalCode,
    phoneNumber: updatedUserData.phoneNumber
  }).then(() => {
    console.log("User data update is a success!")
    return { success: true }
  }).catch((error) => {
    return new Error('Error updating document: ', error)
  });
}

export async function getAllBasketProducts() {
  const user = firebase.auth().currentUser;
  const querySnapshot = await db.collection("profiles").doc(user.uid).get()
  const basketProducts = querySnapshot.data().basketProducts;
  return basketProducts;
}

export async function addProductToBasket(name) {
  const user = firebase.auth().currentUser;
  await db.collection("profiles").doc(user.uid).update({
    basketProducts: firebase.firestore.FieldValue.arrayUnion(name)
  })
    .then(() => {
      console.log("Document successfully added!")
      return { success: true }
    }).catch((error) => {
      return new Error('Error updating document: ', error)
    });
}

export async function deleteBasketProduct(name) {
  const user = firebase.auth().currentUser;
  await db.collection("profiles").doc(user.uid).update({
    basketProducts: firebase.firestore.FieldValue.arrayRemove(name)
  })
    .then(() => {
      console.log("Document successfully deleted!")
      return { success: true }
    }).catch((error) => {
      return new Error('Error updating document: ', error)
    })
}