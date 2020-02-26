<template>
  <div>
    <button @click="userLogout">Sign Out</button>
    <button @click="deleteAccount">Delete Your Account</button>
    <b-tabs content-class="mt-3" v-model="tabIndex">
      <b-tab title="Profile">
        <UserProfileDetails />
      </b-tab>
      <b-tab title="Purchases">
        <p>I'm the second tab</p>
      </b-tab>
      <b-tab title="UserSettings">
        <UserSettings />
      </b-tab>
      <b-tab title="Basket">
        <UserBasket />
      </b-tab>
    </b-tabs>
  </div>
</template>

<style scoped src="./ProfilePage.css">
</style>

<script>
module.exports = require("./ProfilePage.js");
</script>

