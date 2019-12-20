import Vue from "vue";
import { getAllUserProfileData } from "../../firebase.js";

export default Vue.extend({
  name: "UserProfileDetails",
  data() {
    return {
      allData: {}
    }
  },
  mounted() {
    this.setProfileInfo();
  },
  methods: {
    async setProfileInfo() {
      this.allData = await getAllUserProfileData();
    }
  }
});