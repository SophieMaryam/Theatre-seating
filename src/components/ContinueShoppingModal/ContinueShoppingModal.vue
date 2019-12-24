<template>
  <div>
    <b-button v-b-modal.modalName-1>Put in Basket</b-button>
    <b-modal
      id="modalName-1"
      ref="modalName-1"
      title="Added to your Basket!"
      hide-footer
    >
    <h1>{{ productName }}</h1>
    <h2>EUR{{ productPrice }}</h2>
    <img src="" alt="">
    <b-button @click="goToBasket()">Go to Basket</b-button>
    <b-button @click="buyProduct()">Buy</b-button>
    </b-modal>
  </div>
</template>

<style scoped src="./ContinueShoppingModal.css">
</style>

<script>
module.exports = require("./ContinueShoppingModal.js");
</script> 