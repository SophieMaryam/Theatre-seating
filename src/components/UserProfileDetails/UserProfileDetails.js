import Vue from "vue";
import { getAllUserProfileData, db } from "../../firebase.js";
import firebase from 'firebase'

export default Vue.extend({
  name: "UserProfileDetails",
  data() {
    return {
      allData: {},
    }
  },
  mounted() {
    this.setProfileInfo();
  },
  methods: {
    setProfileInfo() {
      const user = firebase.auth().currentUser;
      db.collection("profiles").doc(user.uid)
        .onSnapshot((querySnapshot) => {
          const userProfile = querySnapshot.data();
          this.allData = userProfile
        }
        )
    }
  }
});