import Vue from "vue";
import allProductDataJSon from "../../common/productData.json";
import TheatreNewsletter from "../TheatreNewsletter/TheatreNewsletter.vue";
import ContinueShoppingModal from "../ContinueShoppingModal/ContinueShoppingModal.vue";
import { EventBus } from "../../common/EventBus.js";

export default Vue.extend({
    name: "SelectedProduct",
    components: {
        TheatreNewsletter,
        ContinueShoppingModal

    },
    data() {
        return {
            productName: this.$route.params.name,
            allProductData: allProductDataJSon.allProductData,
        }
    }
});