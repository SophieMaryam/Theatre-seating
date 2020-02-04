import Vue from "vue";

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
        },
        deleteProduct(productName) {
            let storageProducts = JSON.parse(localStorage.getItem('products'));
            let products = storageProducts.filter(product => product.name !== productName);
            localStorage.setItem('products', JSON.stringify(products));
            this.displayBasketProducts();
        },
        goToCheckOut(productName, index) {
            this.$router.push({
                name: "CheckOut",
                params: { productName: productName, index: index }
            });
        }
    }
});
