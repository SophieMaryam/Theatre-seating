<template>
  <div class="container">
    <div class="col-lg-4 order-lg-1">
      <h1>Hi {{ allData.name }}</h1>
      <img src="//placehold.it/150" class="mimg-fluid img-circle d-block" alt="avatar" />
      <h6 class="mt-2">Upload a different photo</h6>
      <label class="custom-file">
        <input type="file" id="file" class="custom-file-input" />
        <span class="custom-file-control">Choose file</span>
      </label>
      <div>
        <h3>Personal Details</h3>
        <p>Address: {{ allData.address }} {{ allData.postalCode }}</p>
        <p>Phone Number: {{ allData.mobile }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped src="./UserProfileDetails.css">
</style>

<script>
module.exports = require("./UserProfileDetails.js");
</script>


