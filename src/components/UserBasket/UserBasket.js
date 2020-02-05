import Vue from "vue";

export default Vue.extend({
    name: "UserBasket",
    data() {
        return {
            name: "",
            basketProducts: [],
            localStorageProducts: JSON.parse(localStorage.getItem('products')) || []
        }
    },
    mounted() {
        this.displayBasketProducts();
    },
    methods: {
        displayBasketProducts() {
            this.basketProducts = JSON.parse(localStorage.getItem('products')) || [];
        },
        deleteProduct(productName) {
            let product = this.localStorageProducts.findIndex(product => product.name === productName);
            this.localStorageProducts.splice(product, 1);
            localStorage.setItem('products', JSON.stringify(this.localStorageProducts));
            this.displayBasketProducts();
        },
        reduceProductAmount(product) {
          let filteredProduct = this.localStorageProducts.find(p => p.name === product.name);
          if (filteredProduct && product.quantity > 1) {
              filteredProduct.quantity = Number(product.quantity) - 1
              filteredProduct.price = this.productPriceReduction(product);
              localStorage.setItem("products", JSON.stringify(this.localStorageProducts));
          } else {
            this.deleteProduct(product.name)
          }
          this.displayBasketProducts();
        },
        productPriceReduction(product) {
          return  Number(product.price) - (Number(product.price) / Number(product.quantity))
        },
        goToCheckOut(productName, index) {
            this.$router.push({
                name: "CheckOut",
                params: { productName: productName, index: index }
            });
        }
    }
});
