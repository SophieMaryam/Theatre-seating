<template>
  <div>
    <div class="image1" :style="{ backgroundImage: `url(${showImg})` }"></div>
    <div class="container bg-white tha">
      <h1 class="text-center bg-white pt-4">{{ showName }}</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libe <span id="dots">...</span><span id="more" v-show="readMore = !readMore">ro sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
      <div class="text-center">
        <button @click="readMore" class="text-uppercase" id="btn">Read more</button>
      </div>
      <div>
      <table class="table table-striped text-center col-7" v-for="(show, indx) in allShows" :key="indx" id="firstTable">
        <tbody v-if="indx == showIndex">
          <tr class="" v-for="details in show.info" :key="details.id">
            <td>{{details.date}}</td>
            <td>{{details.time}}</td>
            <td>{{details.cost}}</td>
            <td>
              <button @click="routerPush()">Buy Ticket</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = require("./SelectedShow.js");
</script>

<style scoped src="./SelectedShow.css">
</style>


