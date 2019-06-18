<template>
  <div class="row-style">
      <Seat v-for="seat in seats" 
      v-bind:key="seat.seat"
      :seat="seat.seat"
      :rank="seat.rank"
      :row="row"
      :sectionName="sectionName" />
  </div>
</template>

<script>
import Seat from "../Seat/Seat";

export default {
  name: 'Row',
  props: ['row', 'seats', 'sectionName'],
  components: {
    Seat
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.row-style {
  display: flex;
  margin-top: 10px;
}
</style>
