import Vue from "vue";
import firebase from "firebase";
import allShowsDataJSON from "../../common/showList.json";

export default Vue.extend({
  name: "SelectedShow",
  data() {
    return {
      showName: this.$route.params.title,
      showIndex: this.$route.params.index,
      allAvailableShows: allShowsDataJSON.availableShowsList,
      readMore: false,
      allShows: [ 
        {
          name: "Swan Lake",
        },
        {
          name: "Drummers",
        },
        {
          name: "Symphony II",
        },
        {
          name: "Behind Closed Curtains",
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