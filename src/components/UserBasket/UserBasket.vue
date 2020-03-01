<template>
  <div>
    <div>
      <div v-if="localStorageProducts.length === 0">
        <h1>Your Basket is empty</h1>
      </div>
      <div v-else v-for="(product, index) in localStorageProducts" :key="index">
        <div
          class="selected-product-img "
          :style="{
            backgroundImage:
              'url(' + require('../../assets/products/' + product.img) + ')'
          }"
        ></div>
        <h1>{{ product.name }} {{ product.price }}</h1>
        <b-button @click="deleteProduct(product.name)">X</b-button>
        <b-button @click="decrementProductCount(product)">Decrease</b-button>
        <b-button @click="incrementProductCount(product)">Increase</b-button>
        <b-button @click="goToCheckOut(product.name, index)">Buy Product</b-button>
      </div>
    </div>
  </div>
</template>

<style scoped src="./UserBasket.css"></style>

<script>
module.exports = require("./UserBasket.js");
</script>
