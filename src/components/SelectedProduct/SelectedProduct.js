import Vue from "vue";
import allProductDataJSon from "../../common/productData.json";
import TheatreNewsletter from "../TheatreNewsletter/TheatreNewsletter.vue";

export default Vue.extend({
    name: "SelectedProduct",
    components: {
        TheatreNewsletter
    },
    data() {
        return {
            productName: this.$route.params.name,
            allProductData: allProductDataJSon.allProductData
        }
    },
    methods: {
        openContinueShoppingModal() {
            
        }
    }
});