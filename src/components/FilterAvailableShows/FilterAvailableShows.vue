<template>
  <div class="pt-5 pb-5">
    <div class="container col-7">
      <div class="pad-15-hor pad-15-ver pb-2 search-parent">
        <div class="col 6 ml-auto text-uppercase font-weight-bold"> Calendar </div>
        <div class="col-4 search-bar mr-auto">
          <b-form-input
            v-model="search"
            type="text"
            placeholder="Search on shows or artist"
          ></b-form-input>
        </div>
      </div>
      <div class="pb-2">
        <div class="card-body background d-flex mb-2" v-for="show in filteredList">
          <img  class="image" :src="show.img"/>
          <div class="ml-3">
            <h2 class="title"> {{ show.title }} </h2>
            <p class="date"> {{ show.date }}
              <span> {{ show.location }} </span>
            </p>
          </div>
          <div class="text-uppercase ml-2">
            <button @click="selectedShow(show.title)" class="btn text-black mt-2 text-uppercase font-weight-bold">Order Tickets </button> 
            <button class="btn text-black mt-2 text-uppercase font-weight-bold">More info</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./FilterAvailableShows.css">
</style>

<script>
  module.exports = require("./FilterAvailableShows.js");
</script> 