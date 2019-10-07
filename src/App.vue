<template>
  <div id="app">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar/Navbar.vue";
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  }
}
</script>