import Vue from "vue";
import firebase from "firebase";
import UserProfileDetails from "../../components/UserProfileDetails/UserProfileDetails.vue";
import UserSettings from "../../components/UserSettings/UserSettings.vue";
import { deleteUserAccount } from "../../firebase.js"

export default Vue.extend({
  name: "ProfilePage",
  components: {
    UserProfileDetails,
    UserSettings
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
    logoutUser() {
      firebase.auth().signOut()
        .then(() => {
          this.$router.replace("login")
        })
        .catch(err => console.log(err));
    },
    async deleteAccount() {
      if (confirm("Are you sure?")) {
        await deleteUserAccount();
      } else {
        console.error()
      }
    }
  }
});