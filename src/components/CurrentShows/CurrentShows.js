import Vue from "vue";
import allShowsDataJSON from "../../common/showList.json";

export default Vue.extend({
  name: "CurrentShows",
  data() {
    return {
      allAvailableShowsData: allShowsDataJSON.availableShowsList
    }
  }
});