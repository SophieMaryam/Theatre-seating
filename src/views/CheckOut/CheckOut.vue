<template>
  <div class="container d-flex">
    <div class="col-8 border">
      <UserSettings />
    </div>
    <div class="col-4 ml-4">
      <div class="border mb-5">
        <form v-if="!isAuthenticated" @submit.prevent="login" class="pl-5 pr-5">
          <h1>Login</h1>
          <div class="pb-2">
            <div class="input">
              <label for="email" class="text-uppercase font-weight-bold"
                >Mail:</label
              >
              <input type="email" id="email" v-model="email" />
            </div>
            <div class="input">
              <label for="password" class="text-uppercase font-weight-bold"
                >Password:</label
              >
              <input type="password" id="password" v-model="password" />
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            @click="loginAndRedirectBack(email, password)"
          >
            Save and Pay
          </button>
        </form>
        <div v-else>
          <h1>Welcome Back, {{ profile.name }}!</h1>
        </div>
      </div>
      <div v-if="!paidFor" class="border mb-3">
        <h3 class="text-uppercase">Order Details</h3>
        <div v-for="product in localStorageProducts" :key="product.id">
          <div>
            <img
              class="image"
              :src="require(`../../assets/products/${product.img}`)"
            />
            <div class="text-uppercase">
              <h6>{{ product.name }}</h6>
              <h6>EUR {{ product.price }}</h6>
              <h6>Postal Costs: 0</h6>
            </div>
          </div>
        </div>
        <h6>Total: {{ totalPriceAsString }}</h6>
      </div>
      <PayPal :amount="totalPriceAsString" currency="EU" :client="credentials" env="sandbox">
      </PayPal>
    </div>
  </div>
</template>

<script>
module.exports = require("./CheckOut.js");
</script>

<style scoped src="./CheckOut.css"></style>
