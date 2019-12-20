<template>
  <div>
    <div v-for="product in allProductData" :key="product.id">
      <div v-if="productName == product.name">
        <div
          class="selected-product-img"
          :style="{ backgroundImage: 'url('+require('../../assets/products/'+product.img)+')'}"
        ></div>
        <div class="container bg-white">
          <div>
            <h1 class="bg-white pt-4 pb-3 padding text-uppercase">{{ product.name }}</h1>
            <h3 class="padding text-muted">{{ product.price }}</h3>
          </div>
        </div>
        <b-button @click="openContinueShoppingModal(product.id, product.name)">Put in Basket</b-button>
      </div>
    </div>
    <TheatreNewsletter />
  </div>
</template>


<script>
module.exports = require("./SelectedProduct.js");
</script>

<style scoped src="./SelectedProduct.css">
</style>