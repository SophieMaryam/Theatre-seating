<template>
  <div class="container">
    
    <table class="text center col-6" id="firstTable">
      <tbody>
        <tr v-for="row in rows" class="bg-dark">
          <td>{{row.date}}</td>
          <td>{{row.time}}</td>
          <td>{{row.cost}}</td>
          <td> <button> Buy Ticket </button></td>
        </tr>
      </tbody>
    </table> 
  </div>
</template>

<script>
  module.exports = require("./SelectedShow.js"); 
</script>

<style scoped src="./SelectedShow.css">
</style>


