import Vue from "vue";
import firebase from "firebase";

export default Vue.extend({
  name: "SelectedShow",
  data() {
    return {
      showName: this.$route.params.title,
      showImg: this.$route.params.img,
      showIndex: this.$route.params.index,
      showDate: this.$route.params.date,
      readMore: false,
      allShows: [ 
        {
          name: "Swan Lake",
          info: [ 
            { id: 1, date: "Wed 21 oct", time: "20:00", cost: "from EU 25,00" },
            { id: 2, date: "Thurs 22 oct", time: "20:00", cost: "from EU 25,00" },
            { id: 3, date: "Fri 23 oct", time: "20:00", cost: "from EU 35,00"},
            { id: 4, date: "Sat 24 oct", time: "20:00", cost: "from EU 45,00" }
          ]
        },
        {
          name: "Drummers",
          info: [ 
            { id: 1, date: "wed 22 oct", time: "20:00", cost: "from EU 26,00" },
            { id: 2, date: "wed 22 oct", time: "20:00", cost: "from EU 26,00" },
            { id: 3, date: "wed 22 oct", time: "20:00", cost: "from EU 26,00"},
            { id: 4, date: "wed 22 oct", time: "20:00", cost: "from EU 26,00" }
          ]
        },
        {
          name: "Symphony II",
          info: [ 
            { id: 1, date: "wed 23 oct", time: "20:00", cost: "from EU 26,00" },
            { id: 2, date: "wed 23 oct", time: "20:00", cost: "from EU 26,00" },
            { id: 3, date: "wed 23 oct", time: "20:00", cost: "from EU 26,00"},
            { id: 4, date: "wed 23 oct", time: "20:00", cost: "from EU 26,00" }
          ]
        },
        {
          name: "Behind Closed Curtains",
          info: [ 
            { id: 1, date: "wed 22 oct", time: "20:00", cost: "from EU 20,00" },
            { id: 2, date: "wed 22 oct", time: "20:00", cost: "from EU 20,00" },
            { id: 3, date: "wed 22 oct", time: "20:00", cost: "from EU 20,00"},
            { id: 4, date: "wed 22 oct", time: "20:00", cost: "from EU 20,00" }
          ]
        }
      ]
    }
  },
  methods: {
    onLinkClicked(indx, show) {
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