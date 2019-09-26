import Vue from "vue";
import Router from "vue-router";
import Sections from "../components/Sections/Sections";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/theatre-seating",
      name: "Sections",
      component: Sections
    }
  ]
})
