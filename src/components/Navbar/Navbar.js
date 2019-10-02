
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      searchVisible: false
    }
  },
  methods: {
    search() {
      this.searchVisible = !this.searchVisible;
    }
  }
});