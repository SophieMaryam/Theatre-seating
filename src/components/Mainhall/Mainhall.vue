<template>
  <div>
    <Row />
  </div>
</template>

<script>
import Row from "../Row/Row";
import seatData from "../../public/seats.js";

export default {
  name: 'Mainhall',
  components: {
    Row
  },
  data () {
    return {
      // rows: seatdata.ranks.length
    }
  },
  methods: {
  }
}
</script>