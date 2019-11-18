import firebase from "firebase";
import Vue from "vue";
import Router from "vue-router";

import Home from "../components/Home/Home.vue";
import Sections from "../components/Sections/Sections.vue";
import Login from "../components/Login/Login.vue";
import Register from "../components/Register/Register.vue";
import FilterAvailableShows from "../components/FilterAvailableShows/FilterAvailableShows.vue";
import Profile from "../views/Profile/Profile.vue";
import Contact from "../views/Contact/Contact.vue";
import SelectedShow from "../components/SelectedShow/SelectedShow.vue";

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
  },
  {
    path: "*",
    redirect: "/login",
  },
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/tickets",
    name: "FilterAvailableShows",
    component: FilterAvailableShows
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/SelectedShow/:title",
    name: "SelectedShow",
    component: SelectedShow
  }
]

export const router = new Router({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next("login");
  }
  // else if (requiresAuth && currentUser) {
  //   next("profile");
  // }
  else {
    next();
  }
});

