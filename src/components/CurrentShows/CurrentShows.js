import Vue from "vue";
import allShowsDataJSON from "../../common/currentShowData.json";
import { VueAgile } from "vue-agile";

export default Vue.extend({
  name: "CurrentShows",
  components: {
    agile: VueAgile
  },
  data() {
    return {
      allAvailableShowsData: allShowsDataJSON.availableShowsList,
			asNavFor1: [],
			asNavFor2: [],
			options1: {
				dots: false,
				fade: true,
				navButtons: false
			},
			
			options2: {
				autoplay: true,
				centerMode: true,
				dots: false,
				navButtons: false,
				slidesToShow: 3,
				responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 5
                    }
                },
                
                {
                    breakpoint: 1000,
                    settings: {
                        navButtons: true
                    }
                }
            ]
				
			}
		}
	},
  mounted () {
		this.asNavFor1.push(this.$refs.thumbnails)
		this.asNavFor2.push(this.$refs.main)
	}
});