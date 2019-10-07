import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import firebase from "firebase";
import { router } from "./router/routes";
import { store } from "./store/store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlaceOfWorship, faSignInAlt, faSearch, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config } from "./common/config";

Vue.use(BootstrapVue);
Vue.use(Vuex)

Vue.config.productionTip = false;
let app = "";
firebase.initializeApp(config.firebase);



library.add(faPlaceOfWorship, faSignInAlt, faSearch, faShoppingBag);
Vue.component("font-awesome-icon", FontAwesomeIcon);


firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount("#app");
  }
});
