<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <font-awesome-icon icon="place-of-worship" class="orius" />Orius Theatre
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarcontent"
          aria-controls="navbarcontent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarcontent text-center">
          <ul class="navbar-nav ml-auto mr-auto">
            <li class="nav-item">
              <router-link class="nav-link text-uppercase font-weight-bold" to="/tickets">What's On</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-uppercase font-weight-bold" to="#">About Orius</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-uppercase font-weight-bold" to="#">Shop</router-link>
            </li>
            <li>
              <router-link class="nav-link text-uppercase font-weight-bold" to="/Contact">Contact</router-link>
            </li>
          </ul>
          <form class="form-inline">
            <input
              v-if="searchVisible"
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <font-awesome-icon @click.prevent="search" icon="search" class="icons" />
            <font-awesome-icon icon="shopping-bag" class="icons" />
            <b-dropdown id="button">
              <template slot="button-content">
                <font-awesome-icon class="icons" icon="sign-in-alt" />
              </template>
              <!-- <div v-if="isAuthenticated"> -->
                <b-dropdown-item class="dropdown">
                  <router-link to="/login" class="link">Login</router-link>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <router-link to="/register" class="link">Registeration</router-link>
                </b-dropdown-item>
              <!-- </div> -->
              <!-- <div v-else> -->
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <router-link to="/profile" class="link">My Account</router-link>
                </b-dropdown-item>
              <!-- </div> -->
            </b-dropdown>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
module.exports = require("./Navbar.js");
</script>

<style scoped src="./Navbar.css">
</style>


