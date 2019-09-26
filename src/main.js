import Vue from "vue";
import App from "./App";
import router from "./router/routes";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.config.productionTip = false


new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
})
