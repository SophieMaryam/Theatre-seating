 <template>
  <div>
    <div>
      <Room v-for="section in sections" v-bind:key="section.name"
      :name="section.name"
      :rows="section.rows" />
    </div>
  </div>
</template>
<script>
import seatData from "../../public/seats.js";
import Room from "../Room/Room";

export default {
  name: 'Sections',
  components: {
  },
  data () {
    return {
    }
  }
}
</script>
