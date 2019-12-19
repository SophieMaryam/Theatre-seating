import Vue from "vue";
import firebase from "firebase/app";
import { db } from "../../firebase.js";

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
  firestore() {
    const user = firebase.auth().currentUser;
    return {
      profile: db.collection("profiles").doc(user.uid)
      // profile: db.collection("profiles").doc(user.uid).get()
    }
  },
  // computed: {
        // async getUserName() {
    //   await checkUserInformation()
    // },
  // },
  methods: {
    updateProfile() {
      this.$firestore.profile.update(this.profile);
    },
    uploadImage() {
      console.log("upload Image");
    },
    resetPassword() {
      console.log("Reset Password");
    }
  }
});