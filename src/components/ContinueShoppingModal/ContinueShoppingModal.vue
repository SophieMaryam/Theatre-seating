<template>
  <div>
    <b-button v-b-modal.modalName-1 @click="addToBasket(selectedProduct)">Put in Basket</b-button>
    <b-modal id="modalName-1" ref="modalName-1" title="Added to your Basket!" hide-footer>
      <div v-for="(product, index) in allProductData" :key="index">
        <div v-if="selectedProduct.name == product.name">
          <h1>{{ product.name }}</h1>
          <h2>EUR{{ product.price }}</h2>
          <img />
          <b-button @click="goToBasket(selectedProduct.name)">Go to Basket</b-button>
          <b-button @click="goToCheckOut(selectedProduct.name)">Buy</b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<style scoped src="./ContinueShoppingModal.css">
</style>

<script>
module.exports = require("./ContinueShoppingModal.js");
</script> 