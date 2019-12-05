import Vue from "vue";

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
  mounted() {
    this.displaySelectedShowInfo();
    // this.getAllShowData();
  },
  methods: {
    routerPush() {
      this.$router.push({
        name: "Sections"
      })
    }
    // getAllShowData() {
    //   return this.allShowData = this.shows.map(show => {
    //     this.allShowNames = show.name;
    //     this.showInfo = show.info;
    //   });
    // }
  }
});