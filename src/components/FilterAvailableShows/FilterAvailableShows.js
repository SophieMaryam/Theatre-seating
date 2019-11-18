import Vue from "vue";

class Post {
  constructor(title, date, location, img) {
    this.title = title;
    this.date = date;
    this.location = location;
    this.img = img;
  }
}

export default Vue.extend({
  name: "CurrentShows",
  data() {
    return {
      search: "",
      availableShowsList: [
        new Post(
          'Swan Lake', 
          'Tuesday 15th - Wednesday 31st December 2019', 
          'Auditorium',
          "swanlake.jpg"

        ),
        new Post(
          "Drummers", 
          'Friday 15th - Wednesday 20th November 2019', 
          'Room II',
          "../../assets/dance.jpg"

        ),
        new Post(
          "Symphony II", 
          'Tuesday 5th - Wednesday 10th December 2019', 
          'Auditorium',
          "../../assets/band.jpg"

        ),
        new Post(
          "Behind Closed Curtains", 
          'Tuesday 1 - Wednesday 10 January 2020', 
          'Room I',
          "../../assets/acting.jpg"

        )
      ]
    }
  },
  computed: {
    filteredList() {
      return this.availableShowsList.filter(show => {
        return show.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    selectedShow(title) {
      this.$router.replace({ 
        name: "SelectedShow", 
        params: { title: title }, 
        query: { show: title } 
      });
    }
  }
});