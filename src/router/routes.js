import firebase from "firebase";
import Vue from "vue";
import Router from "vue-router";

import HomePage from "../views/HomePage/HomePage.vue";
import ContactPage from "../views/ContactPage/ContactPage.vue";
import Sections from "../components/Sections/Sections.vue";
import UserLogin from "../views/UserLogin/UserLogin.vue";
import UserRegistration from "../views/UserRegistration/UserRegistration.vue";
import ProfilePage from "../views/ProfilePage/ProfilePage.vue";
import CalendarPage from "../components/CalendarPage/CalendarPage.vue";
import SelectedShow from "../components/SelectedShow/SelectedShow.vue";
import ProductList from "../components/ProductList/ProductList.vue";
import SelectedProduct from "../components/SelectedProduct/SelectedProduct.vue";
import CheckOut from "../components/CheckOut/CheckOut.vue";

Vue.use(Router);

export const routes = [
  {
    path: "*",
    redirec: "/login"
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage
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
    name: "UserLogin",
    component: UserLogin
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
    name: "CalendarPage",
    component: CalendarPage
  },
  {
    path: "/contact",
    name: "ContactPage",
    component: ContactPage
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/shows/:title",
    name: "SelectedShow",
    component: SelectedShow
  },
  {
    path: "/products",
    name: "ProductList",
    component: ProductList
  },
  {
    path: "/product/:name",
    name: "SelectedProduct",
    component: SelectedProduct
  },
  {
    path: "/checkout",
    name: "CheckOut",
    component: CheckOut
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

