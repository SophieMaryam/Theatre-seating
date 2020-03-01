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
        this.getBasketProducts();
    },
    methods: {
        getBasketProducts() {
            this.basketProducts = JSON.parse(localStorage.getItem('products')) || [];
        },
        deleteProduct(productName) {
            let selectedProduct = this.localStorageProducts.findIndex(product => product.name === productName);
            this.localStorageProducts.splice(selectedProduct, 1);
            localStorage.setItem('products', JSON.stringify(this.localStorageProducts));
            this.getBasketProducts();
        },
        decrementProductCount(product) {
          let filteredProduct = this.localStorageProducts.find(p => p.name === product.name);
          if (filteredProduct && product.quantity > 1) {
              filteredProduct.quantity = Number(product.quantity) - 1
              filteredProduct.price = this.reduceProductPrice(product);
              localStorage.setItem("products", JSON.stringify(this.localStorageProducts));
          } else {
            this.deleteProduct(product.name)
          }
          this.getBasketProducts();
        },
        reduceProductPrice(product) {
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
