import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import { router } from "./router/routes";
import { store } from "./store/store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(BootstrapVue);
Vue.use(Vuex)
Vue.config.productionTip = false

library.add(faPlaceOfWorship);
Vue.component("font-awesome-icon", FontAwesomeIcon)


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
