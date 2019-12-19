
import Vue from "vue";
import firebase from "firebase";

export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      searchVisible: false,
      isAuthenticated: this.checkAuthentication()
    }
  },
  methods: {
    checkAuthentication() { 
      const user = firebase.auth().currentUser;
        if(user == null || "") {
          this.$nextTick(() => { 
            console.log("@hi")
            this.isAuthenticated == false;
          })
        } else {
          this.$nextTick(() => {   
            console.log("bye")  
            this.isAuthenticated = true;
          })
        }
    }
  }
});