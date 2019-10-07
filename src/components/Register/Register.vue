<template>
  <div id="register">
    <div class="register-form">
      <h1 class="text-center">Register</h1>
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div class="input">
          <label for="confirm-password">Confirm Password</label>
          <input
                  type="password"
                  id="confirm-password"
                  v-model="confirmPassword">
        </div>
        <div class="input inline">
          <input type="checkbox" id="terms" v-model="terms">
          <label for="terms">Accept Terms of Use</label>
        </div>
        <div class="submit pt-4 text-center">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div class="pt-2 text-center">
        <p>Already have an account? Login
          <router-link to="/login">here</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = require("./Register.js");
</script>

<style src="./Register.css">
</style>