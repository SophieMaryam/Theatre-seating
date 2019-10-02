<template>
  <div id="login">
    <div class="login-form">
      <h1 class="text-center">Login</h1>
      <form @submit.prevent="onSubmit">
        <div class="input">
          <label for="email">Mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
          >
        </div>
        <div class="input">
          <label for="password">Password</label>
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
      <div class="pt-2 text-center">
        Not a user? Register
        <router-link to="/register">here</router-link>
      </div>
    </div>
  </div>
</template>

<script src="./Login.js">
</script>

<style src="./Login.css">
</style>