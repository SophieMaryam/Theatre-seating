 <template>
  <div>
    <div>
      {{ name }}
      <Row 
      v-for="row in rows" 
      :key="row.row"
      :row="row.row"
      :seats="row.seats"
      :sectionName="name" />
    </div>
    <br/>
  </div>
</template>
<script>
import Row from "../Row/Row";

export default {
  name: "Room",
  props: ["name", "rows"],
  components: {
    Row
  }
}
</script>
