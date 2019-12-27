<template>
  <div id="modalcomp">
    <div class="d-flex justify-content-center" v-for="(product, index) in allProductData" :key="index">
      <div v-if="productName == product.name" class="row display">
        <div
          class="selected-product-img "
          :style="{ backgroundImage: 'url('+require('../../assets/products/'+product.img)+')'}"
        ></div>
        <div class="container bg-white col-5">
          <h1 class="bg-white pt-4 pb-3 padding text-uppercase">{{ product.name }}</h1>
          <h3 class="padding text-muted">{{ product.price }}</h3>
          <ContinueShoppingModal :productName="product.name" :singleProduct="product" />
        </div>
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