import Vue from "vue";
import firebase from "firebase";
import LoginSocialMedia from "../LoginSocialMedia/LoginSocialMedia.vue";

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
      terms: false
    }
  },
  methods: {
    onSubmit() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(user => {
        this.$router.replace("profile")
      })
      .catch(error => console.log(error))
    }
  }
});