<template>
  <div id="app">
    <Mainhall />
    <router-view/>
  </div>
</template>

<script>
import Mainhall from "./components/Mainhall/Mainhall";

export default {
  name: 'App',
  components: {
    Mainhall
  }
}
</script>

<style>
</style>
