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
