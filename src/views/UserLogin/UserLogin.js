import Vue from "vue";
import firebase from "firebase";
import LoginSocialMedia from "../../components/LoginSocialMedia/LoginSocialMedia.vue";
import { userLogin } from "../../firebase.js";

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
    async login() {
      const queryRedirect = this.$route.query.redirect;
      await userLogin(this.email, this.password, queryRedirect)
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
