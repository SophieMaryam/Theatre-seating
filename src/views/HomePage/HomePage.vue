<template>
  <div>
    <div id="oriustheatre" class="view">
      <div class="container-fluid d-flex align-items-center justify-content-center h-100">
        <div class="row d-flex justify-content-center text-center white-text">
          <div class="col col-md-12 text-white text-uppercase font-weight-bold pt-4 mb-2">
            <h3 class="mb-2">Welcome to the</h3>
            <h1 class="display-4 font-weight-bold">Orius Theatre</h1>
          </div>
        </div>
      </div>
    </div>
    <CurrentShows />
    <div class="container justify">
      <!-- <h1 class="text-center">About Orius</h1>
      <p class="d-flex justify-content-center pl-5 pr-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. 
        Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. 
        Integer in mauris eu nibh euismod gravida. 
        Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. 
        Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. 
        Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. 
        Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. 
        Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. 
        Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. 
        Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.
      </p> -->
    </div>
    <div class="bg-color">
      <h1 class="text-center text-white pt-5">Food and Drink</h1>
      <p class="text-center text-white">
        Orius has a restaurant and cafe, open two hours before the start of any show.
        <router-link to="/">Check out more</router-link>
      </p>
    </div>
    <div id="meals" class="image"></div>
    <div class="bg-color">
      <h1 class="text-center text-white pt-5">Our History</h1>
      <p class="text-center text-white">
        Discover more about Orius's history since it's opening in 1901.
        <router-link to="/">Explore more of our history.</router-link>
      </p>
    </div>
    <div id="history" class="image"></div>
    <div class="bg-color">
      <h1 class="text-center text-white pt-5">Shop</h1>
      <p class="text-center text-white">
        Browse our range of retail products.
        <router-link to="/">Browse options.</router-link>
      </p>
    </div>
    <div id="shop" class="image"></div>
    <TheatreNewsletter />
  </div>
</template>

<style scoped src="./HomePage.css">
</style>

<script>
module.exports = require("./HomePage.js");
</script>
