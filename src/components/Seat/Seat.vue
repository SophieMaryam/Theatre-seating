<!-- <template>
  <div class="seat" :style="{ backgroundColor: assignColorToSeat }"></div>
</template>-->


<!-- <script>
import groupData from "../../common/groups.json";

export default {
  name: "Seat",
  props: ["seat", "rank","sectionName", "row"],
  data () {
    return {
      allGroupData: groupData.groups,
      allSeats: [],
      allGroupIds: [],
      assignedIdsToColors: [],
      allAssignedIds: [],
    }
  },
  created() {
      this.getAllSeats();
      this.getGroupIds();
      this.assignGroupIdToColor();
  },
  computed: {
    assignColorToSeat() {
      const selectedGroupSeats = this.allSeats.find(seatGroup => seatGroup);

      const selectedSeat = selectedGroupSeats.map(seat => {
       return (seat.section === this.$props.sectionName &&
            seat.row === this.$props.row &&
            seat.seat === this.$props.seat)
      });

      if (selectedSeat) {
        const assignedSeat = this.assignedIdsToColors.find(coloredId => this.assignedIdsToColors.id === this.seat.id)
        return assignedSeat.color
      }
      return "green"
    }
  },
  methods: {
    getAllSeats() {
      this.allSeats = this.allGroupData.map(group => group.seats);
    },
    getGroupIds() {
      this.allGroupIds = this.allGroupData.map(group => group.id);
    },
    assignGroupIdToColor() {
      this.allGroupIds.forEach(id => {
        const idNotAssignedColor = !(this.assignedIdsToColors.includes(id)) || this.assignedIdsToColors == "";
        if (idNotAssignedColor) {
          this.assignedIdsToColors.push({
            id: id, color: this.getRandomColor()
          })
        }
      });
    },
    getRandomColor() {
      return "#"+((1<<24)*Math.random()|0).toString(16)
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
</style> -->
