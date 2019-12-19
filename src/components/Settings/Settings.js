import Vue from "vue";
import { getProfile } from "../../firebase.js";

export default Vue.extend({
  name: "Settings",
  data() {
    return {
      name: "",
      profile: {
        name: null,
        phone: null,
        address: null,
        postcode: null
      },
      account: {
        name: null,
        email: null,
        photoUrl: null,
        emailVerified: null,
        password: null,
        confirmPassword: null,
        uid: null
      }
    }
  },
  mounted() {
    this.sayHello();
  },
  methods: {
    updateProfile() {
      this.$firestore.profile.update(this.profile);
    },
    uploadImage() {
      console.log("upload Image");
    },
    resetPassword() {
      console.log("Reset Password");
    },
    async setProfile() {
      console.log("Hi")
      const profile = await getProfile();
      console.log(profile)
      this.name = profile.name;
  }
  }
});