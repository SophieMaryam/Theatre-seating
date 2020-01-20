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
            // this.checkForDuplicates()
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
        },
        checkForDuplicates() {
            // var productName = this.basketProducts.map((product) => { return product.name });
           const unique = this.basketProducts.filter((set => product => !set.has(product.name) && set.add(product.name))(new Set));
        }
    }
});