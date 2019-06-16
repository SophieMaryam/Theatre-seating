<template>
  <div>
    <div class="rows">
      <div id="seat-row-1">
        <Seats v-for="seat in seats1" :data="seat" />
      </div>
      <div>
        <Seats class="seat-row-2" v-for="seat in seats2" :data="seat" />
      </div>
      <div>
        <Seats class="seat-row-3" v-for="seat in seats3" :data="seat" />
      </div>
    </div>
  </div>
</template>

<script>
import Seats from "../Seats/Seats";
import seatData from "../../public/seats.js";

export default {
  name: 'Row',
  components: {
    Seats
  },
  data () {
    return {
      seats1: seatData.sections[0].rows[0].seats.length,
      seats2: seatData.sections[0].rows[1].seats.length,
      seats3: seatData.sections[0].rows[2].seats.length
    }
  },
  methods: {
  }
}
</script>

<style>
.seat-row-2 {
  float: left;
}

.rows {
  /* float: left; */
}
</style>
