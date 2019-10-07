import Vue from "vue";
import firebase from "firebase";

export default Vue.extend({
  name: "Register",
  data () {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false
    }
  },
  methods: {
    onSubmit () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        this.$router.replace("profile")
      })
      .catch(error => console.log(error))
    }
  }
});