<template>
  <div>
    <Seats v-for="seat in seats1" :data />
    <Seats v-for="seat in seats2" :data />
    <!-- <Seats v-for="seat in seats3" /> -->
    
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
      seats1: seatData.sections[0].rows[2].seats.length,
      seats2: seatData.sections[1].rows[2].seats.length
      // seats3: seatData.sections[2].rows[2].seats.length
    }
  },
  methods: {
    display() {
      console.log(seatData.ranks);
    }
  }
}
</script>