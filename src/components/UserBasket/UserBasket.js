import Vue from "vue";

export default Vue.extend({
    name: "UserBasket",
    data() {
        return {
            hasDuplicates: null,
            localStorageProducts: JSON.parse(localStorage.getItem('products')) || []
        }
    },
    mounted() {
      this.getBasketProducts();
    },
    methods: {
        getBasketProducts() {
          return this.localStorageProducts
        },
        deleteProduct(productName) {
            let selectedProduct = this.localStorageProducts.findIndex(prod => prod.name === productName);
            this.localStorageProducts.splice(selectedProduct, 1);
            localStorage.setItem('products', JSON.stringify(this.localStorageProducts));
            this.getBasketProducts();
        },
        decrementProductCount(product) {
          let findProductDuplicates = this.localStorageProducts.find(p => p.name === product.name);
          if (findProductDuplicates && product.quantity > 1) {
            findProductDuplicates.price = this.reduceProductPrice(product);
            findProductDuplicates.quantity = Number(product.quantity) - 1;
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
