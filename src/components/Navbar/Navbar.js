
import Vue from "vue";
import firebase from "firebase";

export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      searchVisible: false,
      // isAuthenticated: this.checkAuthentication()
    }
  },
  created(){
    this.setUserAuthentication();
    // console.log(this.$store.getters.isUserAuthenticated)
  },
  computed: {
    userAuthenticated() {
      return this.$store.getters.isUserAuthenticated
    }
  },
  methods: {
    // checkAuthentication() {
    //   const user = firebase.auth().currentUser;
    //     if(user == null || "") {
    //       this.$nextTick(() => {
    //         this.isAuthenticated == false;
    //       })
    //     } else {
    //       this.$nextTick(() => {
    //         this.isAuthenticated = true;
    //       })
    //     }
    // },
    setUserAuthentication() {
      const user = firebase.auth().currentUser;
      if(user == null || "") {
        this.$nextTick(() => {
          this.$store.commit("userAuthenticationStatus", false)
        })
      } else {
        this.$nextTick(() => {
          this.$store.commit("userAuthenticationStatus", true)
        })
      }
    }
  }
});
