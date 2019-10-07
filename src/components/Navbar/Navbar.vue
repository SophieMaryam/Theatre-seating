<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <a class="navbar-brand" href="/"> 
          <font-awesome-icon icon="place-of-worship" class="orius" /> Orius Theatre </a>
          <button 
            class="navbar-toggler"
            type="button"
            data-toggle="collapse" data-target="#navbarcontent" aria-controls="navbarcontent"
            aria-expanded="false"
            aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

          <div 
            class="collapse navbar-collapse" 
            id="navbarcontent text-center"
          >
            <ul class="navbar-nav ml-auto mr-auto">
              <li class="nav-item">
                <router-link class="nav-link text-uppercase font-weight-bold" to="/tickets"> What's On
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase font-weight-bold" href="#"> About Orius </a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-uppercase font-weight-bold" href="#">
                  Shop
                </a>
              </li>
              <li>
                <a class="nav-link text-uppercase font-weight-bold" href="#">Contact</a>
              </li>
            </ul>
          <form class="form-inline">
            <input v-if="searchVisible" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <font-awesome-icon @click.prevent="search" icon="search" class="icons" />
            <font-awesome-icon icon="shopping-bag" class="icons" />
            <router-link to="/login">
              <font-awesome-icon icon="sign-in-alt" class="icons" />
            </router-link>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  module.exports = require("./Navbar.js"); 
</script>


<style src="./Navbar.css">
</style>


