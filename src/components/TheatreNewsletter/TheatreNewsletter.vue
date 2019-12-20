<template>
  <div class="mt-5 mb-5 container">
    <div class="card-body background mb-2 h-100">
      <div class="d-flex justify-content-between pl-5 pr-5">
        <div>
          <h3>Orius Newsletter</h3>
          <p>Keep up to date with the latest shows.</p>
        </div>
        <div class="col-4">
          <label for="email" class="text-size text-uppercase">Email Address</label>
          <div class="d-flex">
            <b-form-input id="input-small" size="md" class="newsletter-input" placeholder="Enter your email"></b-form-input>
            <b-button variant="outline-secondary" class="btn btn-square ml-1 text-white">Subscribe</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = require("./TheatreNewsletter.js");
</script>

<style scoped src="./TheatreNewsletter.css">
</style>