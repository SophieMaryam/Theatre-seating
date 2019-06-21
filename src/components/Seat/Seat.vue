<template>
  <div class="seat" :style="{ backgroundColor: this.assignColorToSeat() }"></div>
</template>

<script>
import groupData from "../../public/groups.js";

export default {
  name: "Seat",
  props: ["seat", "rank","sectionName", "row"],
  data () {
    return {
      groupData: groupData
    }
  },
  methods: {
    getIds() {
      const groupId = this.groupData.map((data) => {
        return data.id
      });
      return groupId
    },
    assignColorToId() {
      const ids = this.getIds();
      var colors = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate", "red", "blue", "orange", "yellow"];
      let coloredIds = [];
      for(let i=0; i < ids.length ;i++) {
        coloredIds.push({id: ids[i], color: colors[i]})
      }
      return coloredIds
    },
    assignColorToSeat() {
        for (let i = 0; i < this.groupData.length; i++) {
        const seats = this.groupData[i].seats;
        const coloredIds = this.assignColorToId();
        for (let j = 0; j < seats.length; j++) {
          if (seats[j].section === this.$props.sectionName &&
              seats[j].row === this.$props.row &&
              seats[j].seat === this.$props.seat) {
                const objectWeNeed = coloredIds.find(
                  object => object.id === groupData[i].id
                )
                return objectWeNeed.color
          }
        }
      }
      return "green"
    }
  }
}
</script>

<style>
  .seat {
    width: 20px;
    height: 20px;
    margin-right: 10px;
    display: flex;
    float: left;
  }
</style>
