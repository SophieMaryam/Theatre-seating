<template>
<div class="background pt-5 pb-5">
  <div class="container col-7">
    <!-- <b-form-input
      @input="search_text()"
      v-model="search.text"
      class="form-control mb-1"
      type="text" 
      placeholder="Search" 
      aria-label="Search"
    ></b-form-input> -->
    <!-- <div>
      <b-form-select @input="sort()" v-model="search.filter" :options="options">
        <font-awesome-icon icon="search" />
      </b-form-select>
    </div> -->
    <div class="card mb-1">
      <div class="card-body d-flex">
        <div class="image" style="background-image:url(../../assets/swanlake.jpg)"></div>
        <div>
          <p>Orius Hall presents</p>
          <h2>The Princess Swan</h2>
          <p>Tuesday 22 - Wednesday 20 November 2019
            <span>Auditorium</span>
          </p>
          <a href="#" class="btn red-btn text-white">Find Tickets</a>
        </div>
      </div>
    </div>
    <div class="card mb-1">
      <div class="card-body d-flex">
        <div class="image" style="background-image:url('../../assets/swanlake.jpg')"></div>
        <div>
          <p>Orius Hall presents</p>
          <h2>The Princess Swan</h2>
          <p>Tuesday 22 - Wednesday 20 November 2019
            <span>Auditorium</span>
          </p>
          <a href="#" class="btn red-btn text-white">Find Tickets</a>
        </div>
      </div>
    </div>
    <div class="card mb-1">
      <div class="card-body d-flex">
        <div class="image" style="background-image:url('../../assets/swanlake.jpg')"></div>
        <div>
          <p>Orius Hall presents</p>
          <h2>The Princess Swan</h2>
          <p>Tuesday 22 - Wednesday 20 November 2019
            <span>Auditorium</span>
          </p>
          <a href="#" class="btn red-btn text-white">Find Tickets</a>
        </div>
      </div>
    </div>
    <div class="card mb-1">
      <div class="card-body d-flex">
        <div class="image" style="background-image:url('../../assets/swanlake.jpg')"></div>
        <div>
          <p>Orius Hall presents</p>
          <h2>The Princess Swan</h2>
          <p>Tuesday 22 - Wednesday 20 November 2019
            <span>Auditorium</span>
          </p>
          <a href="#" class="btn red-btn text-white">Find Tickets</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped src="./AvailableShows.css">
</style>

<script>
  module.exports = require("./AvailableShows.js");
</script>