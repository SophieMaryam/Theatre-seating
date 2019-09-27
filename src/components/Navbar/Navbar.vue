<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"> 
          <i class="fas fa-place-of-worship"></i> Orius Theatre </a>
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
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#"> What's On |
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#"> About Orius | </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Shop |
                </a>
              </li>
              <li>
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
module.exports = require("./Navbar.js");
</script>


<style scoped>
  .btn {
    border-color: #8B0000;
  }

  .btn:hover {
    background-color: #8B0000;
    color: #ffffff;
  }

  .nav-link:hover {
    color: #8B0000;
  }
</style>


