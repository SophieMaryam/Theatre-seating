import firebase from "firebase";
import Vue from "vue";
import Router from "vue-router";

import Home from "../views/Home/Home.vue";
import Sections from "../components/Sections/Sections.vue";
import Login from "../components/Login/Login.vue";
import UserRegistration from "../components/UserRegistration/UserRegistration.vue";
import Calendar from "../components/Calendar/Calendar.vue";
import Profile from "../views/Profile/Profile.vue";
import Contact from "../views/Contact/Contact.vue";
import SelectedShow from "../components/SelectedShow/SelectedShow.vue";

Vue.use(Router);

export const routes = [
  {
    path: "*",
    redirec: "/login"
  },
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/theatre",
    name: "Sections",
    component: Sections,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/register",
    name: "UserRegistration",
    component: UserRegistration
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
    name: "Calendar",
    component: Calendar
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
    path: "/shows/:title",
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

