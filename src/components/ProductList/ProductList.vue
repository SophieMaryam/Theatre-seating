<template>
  <div class="container mb-5">
    <div class="text-center mt-5 mb-5">
      <h1>Orius Shop</h1>
      <h5>Buy one of our pieces!</h5>
    </div>
    <div class="row">
      <div class="col-xs-4 col-sm-4 col-md-4" v-for="(product, index) in productData" :key="index">
        <div @click="goToProductPage(product)">
          <img
          :src="require(`../../assets/products/${product.img}`)"
          :alt="product.alt"
          style="width:400px; height:300px;"
          class="img-fluid ml-2"
        />
        </div>
        <div>
          <p class="text-uppercase">{{ product.name }}</p>
          <p>{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
=

<style scoped src="./ProductList.css">
</style>

<script>
module.exports = require("./ProductList.js");
</script>