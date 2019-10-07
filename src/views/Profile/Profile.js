import Vue from "vue";
import firebase from "firebase";

export default Vue.extend({
  name: "Profile",
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.replace("login")
      })
      .catch(err => console.log(err));
    }
  }
});