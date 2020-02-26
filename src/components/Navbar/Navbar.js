
import Vue from "vue";
import firebase from "firebase";

export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      searchVisible: false
    }
  },
  mounted(){
    this.setUserAuthentication()
  },
  computed: {
    userAuthenticated() {
      return this.$store.getters.isUserAuthenticated
    }
  },
  methods: {
    setUserAuthentication() {
      const user = firebase.auth().currentUser;
      // Broken - not reactive
      if(user == null || "") {
        this.$store.commit("userAuthenticationStatus", false)
      } else {
        this.$store.commit("userAuthenticationStatus", true)
      }
    }
  }
});
