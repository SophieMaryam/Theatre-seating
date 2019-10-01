<template>
  <div>
    <div class="text-center pb-4 bg-shade-black">
      <div class="container">
        <h2 class="mb-3 font-weight-bold text-white pt-4">Shows</h2>
        <div class="row">
          <div class="col-lg-3 col-md-12 mb-4">
            <div class="">
              <img src="../../assets/swanlake.jpg" class="img-fluid" alt="">
            </div>
            <button class="check-btn text-white mt-3">Find Tickets</button>
          </div>
          <div class="col-lg-3 col-md-12 mb-4">
            <div class="">
              <img src="../../assets/dance.jpg" class="img-fluid" alt="">
            </div>
            <button class="check-btn text-white mt-3">Find Tickets</button>
          </div>
          <div class="col-lg-3 col-md-12 mb-4">
            <div class="">
              <img src="../../assets/band.jpg" class="img-fluid" alt="">
            </div>
            <button class="check-btn text-white mt-3">Find Tickets</button>
          </div>
          <div class="col-lg-3 col-md-12 mb-4">
            <div class="">
              <img src="../../assets/acting.jpg" class="img-fluid" alt="">
            </div>
            <button class="check-btn text-white mt-3">Find Tickets</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "CurrentShows"
}
</script>

<style scoped>
  .check-btn {
    background-color: #8B0000;
    height: 50px;
    border: #8B0000;
    padding: 10px;
    border-radius: 5%;
  }

  .check-btn:hover {
    background-color: rgb(170, 2, 2);
    border: rgb(170, 2, 2);
  }

  .bg-shade-black {
    background-color: #1a1a1a;
  }
</style>


