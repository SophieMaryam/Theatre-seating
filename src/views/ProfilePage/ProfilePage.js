import Vue from "vue";
import UserProfileDetails from "../../components/UserProfileDetails/UserProfileDetails.vue";
import UserSettings from "../../components/UserSettings/UserSettings.vue";
import UserBasket from "../../components/UserBasket/UserBasket.vue";
import { deleteUserAccount, userLogout } from "../../firebase.js"

export default Vue.extend({
  name: "ProfilePage",
  components: {
    UserProfileDetails,
    UserSettings,
    UserBasket
  },
  computed: {
    tabIndex: {
      get() {
        return this.$store.state.tabIndex;
      },
      set(updatedTab) {
        this.$store.commit("selectedTab", updatedTab);
      },
    }
  },
  methods: {
    async userLogout() {
      await userLogout();
    },
    async deleteAccount() {
      if (confirm("Are you sure you want to delete your account?")) {
        await deleteUserAccount();
      } else {
        console.error()
      }
    }
  }
});
