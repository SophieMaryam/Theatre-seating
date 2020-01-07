<template>
  <div>
    <div>
    <div v-if="basketProducts.length == 0">
      <h1>Your Basket is empty</h1>
    </div>
    <div v-for="(product, index) in basketProducts" :key="index" v-else>
      <h1>{{ product.name }}</h1>
      <b-button @click="deleteProduct(product.name)">X</b-button>
      <b-button @click="goToCheckOut(product, index)">Buy Product</b-button>
    </div>
    </div>
  </div>
</template>

<style scoped src="./UserBasket.css">
</style> 

<script>
module.exports = require("./UserBasket.js");
</script>