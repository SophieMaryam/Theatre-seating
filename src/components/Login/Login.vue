<template>
  <div id="login">
    <div class="login-form pb-5">
      <h1 class="text-center text-uppercase font-weight-bold mt-3 mb-4">Sign in with email</h1>
      <form @submit.prevent="login" class="pl-5 pr-5">
        <div class="input">
          <label for="email" class="text-uppercase font-weight-bold">Mail:</label>
          <input
            type="email"
            id="email"
            v-model="email"
          >
        </div>
        <div class="input">
          <label for="password" class="text-uppercase font-weight-bold">Password:</label>
          <input
            type="password"
            id="password"
            v-model="password"
          >
        </div>
        <div class="submit pt-4 pb-2 text-center">
          <button type="submit">Submit</button>
        </div>
      </form>
      <hr class="hr-text mt-4 mb-4" data-content="OR">
      <LoginSocialMedia :onClick="socialLoginIn" />
      <div class="mt-3 text-center">
        Not a user? Register
        <router-link to="/register">here</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  module.exports = require("./Login.js");
</script>

<style src="./Login.css">
</style>