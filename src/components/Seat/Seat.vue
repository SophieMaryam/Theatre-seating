<template>
  <div v-if="reserved()">
    <div class="unavailable"></div>
  </div>
  <div v-else>
    <div class="available"></div>
  </div>
</template>

<script>
import groupData from "../../public/groups.js";

export default {
  name: 'Seat',
  props: ['seat', 'rank','sectionName', 'row'],
  data () {
    return {
      groupData: groupData
    }
  },
  methods: {
    reserved: function() {
      for(let i = 0; i < this.groupData.length; i++) {
        const seats = this.groupData[i].seats;
        for(let i = 0; i < seats.length; i++) {
          if(seats[i].section === this.$props.sectionName &&
            seats[i].row === this.$props.row &&
            seats[i].seat === this.$props.seat
          ) {
            return true
          }
        }
      }
      return false
    }
  }
}
</script>

<style>
  .available {
    width: 20px;
    height: 20px;
    background-color: green;
    margin-right: 10px;
    display: flex;
    float: left;
  }
  .unavailable {
    width: 20px;
    height: 20px;
    background-color: red;
    margin-right: 10px;
    display: flex;
    float: left;
  }
</style>
