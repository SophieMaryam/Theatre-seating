<template>
  <div class="container d-flex">
    <div class="col-8 border">
      <form>
        <h1>Contact Details</h1>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              v-model="profile.name"
              class="form-control"
              id="fullName"
              placeholder="Full Name"
            />
          </div>
          <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input
              type="email"
              v-model="profile.email"
              class="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputAddress">Address</label>
          <input
            type="text"
            v-model="profile.address"
            class="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Address 2</label>
          <input
            type="text"
            v-model="profile.household"
            class="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input type="text" v-model="profile.city" class="form-control" id="inputCity" />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Country</label>
            <select id="inputState" class="form-control">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" v-model="profile.postalCode" class="form-control" id="inputZip" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="saveAndPay()">Save and Pay</button>
      </form>
    </div>
    <div class="col-4 ml-4">
      <div class="border mb-5">
        <form v-if="!isAuthenticated" @submit.prevent="login" class="pl-5 pr-5">
          <h1>Login</h1>
          <div class="pb-2">
            <div class="input">
                <label for="email" class="text-uppercase font-weight-bold">Mail:</label>
                <input type="email" id="email" v-model="email" />
            </div>
            <div class="input">
                <label for="password" class="text-uppercase font-weight-bold">Password:</label>
                <input type="password" id="password" v-model="password" />
            </div>
          </div>
          <button type="submit" class="btn btn-primary" @click="loginAndRedirectBack(email, password)">Save and Pay</button>
        </form>
        <div v-else>
            <h1>Welcome Back, {{ profile.name }}!</h1>
        </div>
      </div>
      <div v-if="!paidFor" class="border mb-3">
        <h3 class="text-uppercase">Order Details</h3>
        <div v-for="(product, index) in allProductData" :key="index">
          <div v-if="productName == product.name">
            <img class="image" :src="require(`../../assets/products/${product.img}`)" />
            <div class="text-uppercase">
              <h6>{{ product.name }}</h6>
              <h6>EUR {{ product.price }}</h6>
              <h6>Postal Costs: 0</h6>
              <h6>Total: {{ product.price }}</h6>
            </div>
          </div>
        </div>
      </div>
      <div ref="paypal"></div>
    </div>
  </div>
</template>

<script>
module.exports = require("./CheckOut.js");
</script>

<style scoped src="./CheckOut.css">
</style> 
