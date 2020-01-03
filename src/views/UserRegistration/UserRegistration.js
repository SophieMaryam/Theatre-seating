import Vue from "vue";
import LoginSocialMedia from "../../components/LoginSocialMedia/LoginSocialMedia.vue";
import { userRegistration } from "../../firebase.js";

export default Vue.extend({
  name: "UserRegistration",
  components: {
    LoginSocialMedia
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
      fullName: ""
    }
  },
  methods: {
    async onSubmitRegisterUser() {
      await userRegistration(this.email, this.password, this.fullName)
    }
  }
});