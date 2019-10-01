import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home/Home";
import Sections from "../components/Sections/Sections";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";

Vue.use(Router);

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
    path: "/register",
    name: "Register",
    component: Register
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
