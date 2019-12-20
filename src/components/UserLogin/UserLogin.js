import Vue from "vue";
import firebase from "firebase";
import LoginSocialMedia from "../LoginSocialMedia/LoginSocialMedia.vue";

export default  Vue.extend({
  name: "UserLogin",
  components: {
    LoginSocialMedia
  },
  data () {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(() => {
        this.$router.push(this.$route.query.redirect || '/profile')
      })
      .catch(err => console.log(err));
    },
    socialLoginIn() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider)
      .then(() => {
        this.$router.push(this.$route.query.redirect || '/profile')
      })
      .catch(err => console.log(err));
    }
  }
});