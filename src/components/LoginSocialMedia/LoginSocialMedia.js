import Vue from "vue";
import { userGoogleLogin } from "../../firebase.js";

export default Vue.extend({
  name: "LoginSocialMedia",
  methods: {
    async userGoogleLogin() {
      const queryRedirect = this.$route.query.redirect;
      await userGoogleLogin(queryRedirect)
    }
  }
})
