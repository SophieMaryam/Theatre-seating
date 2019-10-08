<template>
  <div>
    <button @click="logout">Sign Out</button>
    <b-tabs content-class="mt-3">
      <b-tab title="Profile" active><UserProfileDetails /></b-tab>
      <b-tab title="My Tickets"><p>I'm the second tab</p></b-tab>
      <b-tab title="Settings">
        <Settings />
      </b-tab>
    </b-tabs>
  </div>
</template>

<style scoped src="./Profile.css">
</style> 

<script>
module.exports = require("./Profile.js");
</script>

