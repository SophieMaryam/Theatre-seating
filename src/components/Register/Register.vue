<template>
  <div id="register">
    <div class="register-form">
      <div>
        <h4 class="text-uppercase text-center">Sign Up With...</h4>
        <p class="pl-5 pr-5 text-center">Signing up with social is super quick. No extra passwords to remember - no brain fail.</p>
        <LoginSocialMedia />
      </div>
      <hr class="hr-text mt-4 mb-4" data-content="OR">
      <h4 class="text-center text-uppercase mt-4">Sign Up using your email address</h4>
      <form @submit.prevent="onSubmit" class="pl-5 pr-5">
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

<style scoped src="./Register.css">
</style>

<script>
  module.exports = require("./Register.js");
</script>