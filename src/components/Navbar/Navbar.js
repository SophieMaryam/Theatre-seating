
import Vue from "vue";
import firebase from "firebase";

export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      searchVisible: false,
      isAutheticated:  firebase.auth().currentUser
    }
  },
  methods: {
    search() {
      this.searchVisible = !this.searchVisible;
    }
  }
});