import Vue from "vue";
import firebase from "firebase";
import allShowsDataJSON from "../../common/showList.json";
import Newsletter from "../Newsletter/Newsletter.vue";

export default Vue.extend({
  name: "SelectedShow",
  components: {
    Newsletter
  },
  data() {
    return {
      showName: this.$route.params.title,
      allAvailableShows: allShowsDataJSON.availableShowsList,
      readMore: false
    }
  },
  methods: {
    buyTicketForSelectedShow(indx, show) {
      const currentUser = firebase.auth().currentUser;
      if(!currentUser) {
        // Incomplete: This stills need to query theatre/indx & show name
        this.$router.replace({path: "/login", query: { redirect: '/theatre'} });
      } else {
        this.$router.replace({path: "/theatre" , query: {indx, show} });
      }
    }
  }
});