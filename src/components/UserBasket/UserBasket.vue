<template>
  <div>
    <div v-if="basketProducts == ''">
      <h1>Your Basket is empty</h1>
    </div>
    <div v-else v-for="product in basketProducts" :key="product.id">
      <h1>{{ product }}</h1>
          <button @click="deleteProduct(product)">X</button>
    </div>
  </div>
</template>

<style scoped src="./UserBasket.css">
</style> 

<script>
module.exports = require("./UserBasket.js");
</script>