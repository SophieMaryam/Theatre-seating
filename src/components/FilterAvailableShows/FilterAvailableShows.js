import Vue from "vue";

export default Vue.extend({
  name: "CurrentShows",
  data() {
    return {
      search: "",
      availableShowsList: [
        {
          title: 'Swan Lake', 
          date: 'Tuesday 15th - Wednesday 31st December 2019', 
          location: 'Auditorium',
          img: require("../../assets/swanlake.jpg")

        },
        {
          title: "Drummers", 
          date: 'Friday 15th - Wednesday 20th November 2019', 
          location: 'Room II',
          img: require("../../assets/dance.jpg")

        },
        {
          title: "Symphony II", 
          date: 'Tuesday 5th - Wednesday 10th December 2019', 
          location: 'Auditorium',
          img: require("../../assets/band.jpg")

        },
        {
          title: "Behind Closed Curtains", 
          date: 'Tuesday 1 - Wednesday 10 January 2020', 
          location: 'Room I',
          img: require("../../assets/acting.jpg")

        }
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
    selectedShow(show, index) {
      this.$router.replace({ 
        name: "SelectedShow", 
        params: { title: show.title, date: show.date, location: show.location, img: show.img, index: index}
      });
    }
  }
});