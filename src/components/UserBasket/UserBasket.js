import Vue from "vue";
import { getAllBasketProducts, deleteBasketProduct } from "../../firebase.js";

export default Vue.extend({
    name: "UserBasket",
    data() {
        return {
            name: "",
            basketProducts: []
        }
    },
    mounted() {
        this.displayBasketProducts();
    },
    methods: {
        displayBasketProducts() {
            this.basketProducts = JSON.parse(localStorage.getItem('products'));
            console.log(this.basketProducts.length)

        },
        deleteProduct(productName) {
            let storageProducts = JSON.parse(localStorage.getItem('products'));
            let products = storageProducts.filter(product => product.name !== productName );
            localStorage.setItem('products', JSON.stringify(products));
            this.displayBasketProducts();
        },
        goToCheckOut(product, index) {
            this.$router.push({
                name: "CheckOut",
                params: { product: product, index: index }
            });
        }
    }
});