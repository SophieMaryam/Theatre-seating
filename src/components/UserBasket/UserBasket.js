import Vue from "vue";
import { getAllBasketProducts, deleteBasketProduct } from "../../firebase.js";

export default Vue.extend({
    name: "UserBasket",
    data() {
        return {
            basketProducts: []
        }
    },
    mounted() {
        this.displayBasketProducts();
    },
    methods: {
        async displayBasketProducts() {
            this.basketProducts = await getAllBasketProducts();
        },
        async deleteProduct(product) {
            await deleteBasketProduct(product);
            this.displayBasketProducts();
        }
    }
});