import Vue from "vue";
import firebase from "firebase";

export default {
  name: "Login",
  data () {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    onSubmit () {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(user => { 
        this.$router.replace("profile")
      })
      .catch(err => console.log(err));
    }
  }
}