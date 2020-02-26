import Vue from "vue";
import LoginSocialMedia from "../../components/LoginSocialMedia/LoginSocialMedia.vue";
import { userLogin } from "../../firebase.js";

export default Vue.extend({
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
    async userLogin() {
      const queryRedirect = this.$route.query.redirect;
      await userLogin(this.email, this.password, queryRedirect)
    }
  }
});
