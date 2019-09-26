 <template>
  <div>
    <div>
      <Room 
      v-for="section in sections" 
      :key="section.name"
      :name="section.name"
      :rows="section.rows" />
    </div>
  </div>
</template>
<script>
import seatData from "../../common/seats.js";
import Room from "../Room/Room";

export default {
  name: "Sections",
  components: {
    Room
  },
  data () {
    return {
      sections: seatData.sections
    }
  }
}
</script>
