import Vue from "vue";
import allShowsDataJSON from "../../common/currentShowData.json";

export default Vue.extend({
  name: "CalendarPage",
  data() {
    return {
      search: "",
      allAvailableShowsData: allShowsDataJSON.availableShowsList
    }
  },
  methods: {
    filteredShowListings() {
      return this.allAvailableShowsData.filter(show => {
        return show.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    goToSelectedShow(show, index) {
      this.$router.push({
        name: "SelectedShow",
        params: { title: show.title, index: index}
      });
    }
  }
});
