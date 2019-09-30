import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home/Home";
import Sections from "../components/Sections/Sections";
import Login from "../components/Login/Login";

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
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
]

export const router = new Router({
  mode: "history",
  routes
});
