import Vue from "vue";
import firebase from "firebase";
import { db } from "../../firebase";

export default Vue.extend({
  name: "Settings",
  data() {
    return {
      profile: {
        name: null,
        phone: null,
        address: null,
        postcode: null
      },
      account: {
        name: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
        password: null,
        confirmPassword: null,
        uid: null
      }
    }
  },
  mounted() {
    this.doThat();
  },
  firestore() {
    const user = firebase.auth().currentUser;
    console.log(user);
    return {
      profile: db.collection("profiles").doc(user.uid)
    }
  },
  methods: {
    updateProfile() {

    },
    uploadImage() {
      console.log("hi");
    },
    resetPassword() {
      console.log("To reset");
    },
    doThat() {
      const user = firebase.auth().currentUser;
      console.log(user.uid)
    }
  }
});