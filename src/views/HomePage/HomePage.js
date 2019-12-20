import Vue from "vue";
import CurrentShows from "../../components/CurrentShows/CurrentShows.vue";
import Newsletter from "../../components/Newsletter/Newsletter.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    CurrentShows,
    Newsletter
  }
});