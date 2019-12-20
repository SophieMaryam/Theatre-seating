import Vue from "vue";
import firebase from "firebase";
import LoginSocialMedia from "../../components/LoginSocialMedia/LoginSocialMedia.vue";
import { db } from "../../firebase";

export default Vue.extend({
  name: "UserRegistration",
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
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(user => {
        db.collection("profiles").doc(user.user.uid).set({
          name: this.fullName,
          address: "",
          postalCode:"",
          phoneNumber: ""
        })
        .then(function() {
            console.log("Registration: Document successfully writen");
        })
        .catch(function(error) {
            console.error("Registration - Error adding document: ", error);
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