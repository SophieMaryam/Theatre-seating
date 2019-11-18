import Vue from "vue";

export default Vue.extend({
  name: "SelectedShow",
  data() {
    return {
      rows: [
        { id: 1, date: "wed 21 oct", time: "20:00", cost: "from EU 25,00" },
        { id: 2, date: "wed 21 oct", time: "20:00", cost: "from EU 25,00" },
        { id: 3, date: "wed 21 oct", time: "20:00", cost: "from EU 25,00"},
        { id: 4, date: "wed 21 oct", time: "20:00", cost: "from EU 25,00" }
      ]
    }
  },
  mounted() {
    this.displaySelectedShowInfo;
  },
  methods: {
    displaySelectedShowInfo() {
      console.log(this.$route)
    }
  }
});