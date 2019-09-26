<template>
  <div>
    <Navbar />
    <div id="oriustheatre" class="view">
      <div class="container-fluid d-flex align-items-center justify-content-center h-100">
        <div class="row d-flex justify-content-center text-center white-text">
          <div class="col col-md-11 text-white text-uppercase font-weight-bold pt-4 mb-2">
            <h3 class="mb-2">
              Welcome to the
            </h3>
            <h1 class="display-4">Orius Theatre</h1>
          </div>
        </div> 
      </div>
    </div>
    <div>
      <section id="showings" class="text-center">
        <div class="container">
          <h2 class="mb-5 font-weight-bold text-white pt-5">Shows</h2>
          <div class="row">
            <div class="col-lg-3 col-md-12 mb-4">
              <div class="">
                <img src="../../assets/swanlake.jpg" class="img-fluid" alt="">
              </div>
              <button class="theatre-show text-white mt-3">Check out more</button>
            </div>
            <div class="col-lg-3 col-md-12 mb-4">
              <div class="">
                <img src="../../assets/dance.jpg" class="img-fluid" alt="">
              </div>
              <button class="theatre-show text-white mt-3">Check out more</button>
            </div>
            <div class="col-lg-3 col-md-12 mb-4">
              <div class="">
                <img src="../../assets/band.jpg" class="img-fluid" alt="">
              </div>
              <button class="theatre-show text-white mt-3">Check out more</button>
            </div>
            <div class="col-lg-3 col-md-12 mb-4">
              <div class="">
                <img src="../../assets/acting.jpg" class="img-fluid" alt="">
              </div>
              <button class="theatre-show text-white mt-3">Check out more</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Navbar from "../Navbar/Navbar";

export default {
  name: "Home",
  components: {
    Navbar
  }
}
</script>

<style scoped>

  #oriustheatre {
    background: url("../../assets/theatre.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
  }

  #showings {
    background-color: #1a1a1a;
  }

  .theatre-show {
    background-color: #8B0000;
    height: 50px;
  }
</style>
