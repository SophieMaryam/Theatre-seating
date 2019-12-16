<template>
  <div class="pt-5 pb-5">
    <div class="container col-7">
      <div class="pad-15-hor pad-15-ver pb-2 search-parent">
        <div class="col 6 ml-auto text-uppercase font-weight-bold text-center"> 
          <h2> Calendar </h2> 
        </div>
        <div class="col-12 search-bar mt-5 mb-2">
          <b-form-input
            v-model="search"
            type="text"
            placeholder="Search on shows or artists"
          ></b-form-input>
        </div>
      </div>
      <div class="pb-2">
        <div class="card-body background d-flex mb-2 h-100" v-for="(show, index) in allAvailableShowsData" :key="index">
          <div class="image">
            <img class="image" :src="require(`../../assets/${show.img}`)" />
          </div>
          <div class="ml-3">
            <h2 class="title"> {{ show.title }} </h2>
            <p class="date"> {{ show.date }}
              <span> {{ show.location }} </span>
            </p>
          </div>
          <div class="text-uppercase ml-2">
            <button @click="selectedShow(show, index)" class="btn text-black mt-2 text-uppercase font-weight-bold">Order Tickets </button> 
            <button class="btn text-black mt-2 text-uppercase font-weight-bold">More info</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./Calendar.css">
</style>

<script>
  module.exports = require("./Calendar.js");
</script> 