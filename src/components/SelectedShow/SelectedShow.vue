<template>
  <div>
    <div v-for="show in allAvailableShows" :key="show.id">
      <div v-if="showName == show.title">
        <div
          class="selected-show-img"
          :style="{ backgroundImage: 'url('+require('../../assets/'+show.img)+')'}"
        ></div>
        <div class="container bg-white layover">
          <div>
            <h1 class="bg-white pt-4 pb-3 padding text-uppercase">{{ show.title }}</h1>
            <h3 class="padding text-muted">{{ show.date }}</h3>
            <div class="padding">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libe
                <span
                  v-if="readMore"
                ></span>
                <span v-else>...</span>
                <span
                  v-show="readMore"
                >sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
              </p>
            </div>
            <div class="text-center">
              <button class="btn" @click="readMore =! readMore">
                <span v-if="readMore">Read Less</span>
                <span v-else>Read More</span>
              </button>
            </div>
          </div>
          <div class="mt-5 row align-items-center justify-content-center">
            <table class="table table-striped text-center col-9" id="firstTable">
              <tbody>
                <tr class v-for="showDetails in show.info" :key="showDetails.id">
                  <td>{{showDetails.date}}</td>
                  <td>{{showDetails.time}}</td>
                  <td>{{showDetails.cost}}</td>
                  <td>
                    <button @click="buyTicketForSelectedShow(showDetails.id, showName)">Buy Ticket</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="row align-items-center justify-content-center mt-4">
            <div class="row align-items-center justify-content-center mt-5 background">
              <img src="../../assets/restaurant.jpg" class="img-restaurant" alt="Restaurant" />
            </div>
          </div>
          <!-- <badger-accordion>
            <badger-accordion-item>
              <template slot="header">First Accordion Header</template>
              <template slot="content">First Accordion Content</template>
            </badger-accordion-item>

            <badger-accordion-item>
              <template slot="header">Second Accordion Header</template>
              <template slot="content">Second Accordion Content</template>
            </badger-accordion-item>
          </badger-accordion> -->
        </div>
      </div>
    </div>
    <TheatreNewsletter />
  </div>
</template>

<script>
module.exports = require("./SelectedShow.js");
</script>

<style scoped src="./SelectedShow.css">
</style>


