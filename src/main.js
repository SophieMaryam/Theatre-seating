import Vue from "vue";
import App from "./App";
import { router } from "./router/routes";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.use(BootstrapVue);
Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
})
