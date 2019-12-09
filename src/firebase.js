import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";
import "firebase/storage";
import { config } from "./common/config.js";

firebase.initializeApp(config);

export const db = firebase.firestore();
