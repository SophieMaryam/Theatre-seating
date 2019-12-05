<template>
  <div>
    <div class="image1" :style="{ backgroundImage: `url(${showImg})` }"></div>
    <div class="container bg-white tha ">
      <div class="pl-5 pr-5 ">
      <h1 class="bg-white pt-4 pb-3">{{ showName }}</h1>
      <h2> {{ showDate }}</h2>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libe
          <span
            v-if="readMore"
          ></span>
          <span v-else>...</span>
          <span v-show="readMore">sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
        </p>
      </div>
      <div class="text-center">
        <button class="btn" @click="readMore =! readMore">
          <span v-if="readMore">Read Less</span>
          <span v-else>Read More</span>
        </button>
      </div>
      </div>
      <div class="mt-5 vertical-align">
        <table
          class="table table-striped text-center col-7"
          v-for="(show, indx) in allShows"
          :key="indx"
          id="firstTable"
        >
          <tbody v-if="indx == showIndex">
            <tr class v-for="details in show.info" :key="details.id">
              <td>{{details.date}}</td>
              <td>{{details.time}}</td>
              <td>{{details.cost}}</td>
              <td>
                <button @click="onLinkClicked(details.id, showName)">Buy Ticket</button>
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


