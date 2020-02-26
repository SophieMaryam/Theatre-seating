<template>
  <div>
    <button class="social-button" type="submit">
      <img @click="userGoogleLogin" src="../../assets/google-logo.png" alt="Google logo">
    </button>
  </div>
</template>

<style scoped src="./LoginSocialMedia.css">
</style>

<script>
  module.exports = require("./LoginSocialMedia.js");
</script>
