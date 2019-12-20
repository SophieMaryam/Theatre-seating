import Vue from "vue";
import CurrentShows from "../../components/CurrentShows/CurrentShows.vue";
import TheatreNewsletter from "../../components/TheatreNewsletter/TheatreNewsletter.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    CurrentShows,
    TheatreNewsletter
  }
});