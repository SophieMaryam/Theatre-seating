import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home/Home";
import Sections from "../components/Sections/Sections";

Vue.use(Router)

export const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/theatre",
    name: "Sections",
    component: Sections
  }
]

export const router = new Router({
  mode: "history",
  routes
});
