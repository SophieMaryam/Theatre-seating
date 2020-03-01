import Vue from "vue";

export default Vue.extend({
    name: "UserBasket",
    data() {
        return {
            storageBasketProducts: [],
            hasDuplicates: null,
            localStorageProducts: JSON.parse(localStorage.getItem('products')) || []
        }
    },
    mounted() {
      this.getBasketProducts();
    },
    methods: {
        getBasketProducts() {
          this.storageBasketProducts = JSON.parse(localStorage.getItem('products')) || [];
        },
        deleteProduct(productName) {
            let selectedProduct = this.localStorageProducts.findIndex(prod => prod.name === productName);
            this.localStorageProducts.splice(selectedProduct, 1);
            localStorage.setItem('products', JSON.stringify(this.localStorageProducts));
            this.getBasketProducts();
        },
        decrementProductCount(product) {
          let filterProductDuplicates = this.localStorageProducts.find(p => p.name === product.name);
          if (filterProductDuplicates && product.quantity > 1) {
            filterProductDuplicates.price = this.reduceProductPrice(product);
            filterProductDuplicates.quantity = Number(product.quantity) - 1;
              localStorage.setItem("products", JSON.stringify(this.localStorageProducts));
          } else {
            this.deleteProduct(product.name)
          }
          this.getBasketProducts();
        },
        incrementProductCount(product) {
          let filterProductDuplicates = this.localStorageProducts.find(p => p.name === product.name);
          if (filterProductDuplicates) {
            filterProductDuplicates.price = this.increaseProductPrice(product);
            filterProductDuplicates.quantity = Number(product.quantity) + 1;
            localStorage.setItem("products", JSON.stringify(this.localStorageProducts));
          }
          this.getBasketProducts();
        },
        reduceProductPrice(product) {
          return Number(product.price) - (Number(product.price) / Number(product.quantity))
        },
        increaseProductPrice(product) {
          return Number(product.price) + (Number(product.price) / Number(product.quantity))
        },
        // findProductDuplicates(product) {
        //  this.hasDuplicates = this.localStorageProducts.find(p => p.name === product.name);
        //  return this.hasDuplicates;
        // },
        goToCheckOut(productName, index) {
            this.$router.push({
                name: "CheckOut",
                params: { productName: productName, index: index }
            });
        }
    }
});
