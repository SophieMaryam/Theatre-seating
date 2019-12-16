import Vue from "vue";
import allShowsDataJSON from "../../common/showList.json";

export default Vue.extend({
  name: "CurrentShows",
  data() {
    return {
      search: "",
      allAvailableShowsData: allShowsDataJSON.availableShowsList
    }
  },
  methods: {
    selectedShow(show, index) {
      this.$router.push({ 
        name: "SelectedShow", 
        params: { title: show.title, index: index}
      });
    }
  }
});