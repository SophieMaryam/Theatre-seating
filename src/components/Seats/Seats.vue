<template>
  <div>
    <div class="seat"></div>
  </div>
</template>

<script>

export default {
  name: 'Seats',
  props: ['data'],
  data () {
    return {
    }
  }
}
</script>

<style>
  .seat {
    width: 20px;
    height: 20px;
    background-color: green;
    margin-right: 10px;
    display: flex;
    float: left;
  }
</style>
