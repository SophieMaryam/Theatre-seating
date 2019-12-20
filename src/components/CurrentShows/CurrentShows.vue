<template>
  <div>
    <div class="text-center pb-4">
      <div class="container">
        <h2 class="mb-3 font-weight-bold text-white pt-4">Shows</h2>
        <div class="row">
          <div class="col-lg-3 col-md-12 mb-4"  v-for="show in allAvailableShowsData" :key="show.id">
            <div>
              <img :src="require(`../../assets/${show.img}`)" class="img-fluid" :alt="show.alt">
            </div>
            <button class="check-btn text-white mt-3">Find Tickets</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./CurrentShows.css">
</style>

<script>
  module.exports = require("./CurrentShows.js");
</script>


