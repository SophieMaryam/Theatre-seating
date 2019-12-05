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
            { id: 1, date: "wed 21 oct", time: "20:00", cost: "from EU 25,00" },
            { id: 2, date: "wed 21 oct", time: "20:00", cost: "from EU 25,00" },
            { id: 3, date: "wed 21 oct", time: "20:00", cost: "from EU 25,00"},
            { id: 4, date: "wed 21 oct", time: "20:00", cost: "from EU 25,00" }
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
    routerPush() {
      this.$router.push({
        name: "Sections"
      })
    },
    onLinkClicked() {
      const currentUser = firebase.auth().currentUser;
      if(!currentUser) {
        this.$router.replace({path: null});
        // If not authenticated, add a path where to redirect after login.
        this.$router.push({ path: 'login', query: { redirect: '/path' } });
      }
    }
  }
});