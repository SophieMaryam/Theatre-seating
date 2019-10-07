<template>
  <div>
    <div id="oriustheatre" class="view">
      <div class="container-fluid d-flex align-items-center justify-content-center h-100">
        <div class="row d-flex justify-content-center text-center white-text">
          <div class="col col-md-12 text-white text-uppercase font-weight-bold pt-4 mb-2">
            <h3 class="mb-2">
              Welcome to the
            </h3>
            <h1 class="display-4 font-weight-bold">Orius Theatre</h1>
          </div>
        </div> 
      </div>
    </div>
    <CurrentShows />
    <div class="bg-color">
      <h1 class="text-center text-white pt-5">Food and Drink</h1>
      <p class="text-center text-white">Orius has a restaurant and cafe, open two hours before the start of any show. <a href=""> Check out more </a></p>
    </div>
    <div id="meals" class="image"></div>
    <div class="bg-color">
      <h1 class="text-center text-white pt-5">Our History</h1>
      <p class="text-center text-white"> Discover more about Orius's history since it's opening in 1901. <a href=""> Explore more of our history. </a></p>
    </div>
    <div id="history" class="image"></div>
    <div class="bg-color">
      <h1 class="text-center text-white pt-5">Shop</h1>
      <p class="text-center text-white"> Browse our range of retail products. <a href=""> Browse options. </a></p>
    </div>
    <div id="shop" class="image"></div>
  </div>
</template>

<script>
  module.exports = require("./Home.js"); 
</script>

<style src="./Home.css">
</style>
