import Vue from "vue";

export default Vue.extend({
  name: "CurrentShows",
  data() {
    return {
      availableShowsData: [],
      availableShows: [],
      search: { filter: null, text: "" }
    }
  },
  methods: {
    search_text() {
      var inside = this;
      this.availableShows = this.availableShowsData.filter(function(allShows) {
        if (
          allShows.show
            .toLowerCase()
            .indexOf(inside.search.text.toLowerCase()) != "-1"
        ) {
          return allShows;
        }
      });
    },
  }
});