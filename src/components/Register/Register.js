import Vue from "vue";
import firebase from "firebase";
import LoginSocialMedia from "../LoginSocialMedia/LoginSocialMedia.vue";
import { db } from "../../firebase";

export default Vue.extend({
  name: "Register",
  components: {
    LoginSocialMedia
  },
  data () {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      fullName: ""
    }
  },
  methods: {
    onSubmit() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        db.collection("profiles").set({
          fullName: user.user.uid
        })
        .then(function() {
            console.log("Document successfully writen");
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });
      
        this.$router.replace("profile")
      })
      .catch(error => {
        alert(error)
        console.log(error)
      })
    }
  }
});