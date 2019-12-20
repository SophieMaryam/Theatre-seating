import Vue from "vue";
import { getAllUserProfileData, updateUserPersonalData } from "../../firebase.js";

export default Vue.extend({
  name: "Settings",
  data() {
    return {
      profile: {}
    }
  },
  mounted() {
    this.setProfileData();
  },
  methods: {
    async updateProfile() {
      await updateUserPersonalData(this.profile);
    },
    uploadImage() {
      console.log("upload Image");
    },
    resetPassword() {
      console.log("Reset Password");
    },
    async setProfileData() {
      this.profile = await getAllUserProfileData();
    }
  }
});