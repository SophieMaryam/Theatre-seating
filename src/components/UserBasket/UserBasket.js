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
        // this.storageProducts = JSON.parse(localStorage.getItem("products"));
      // let products = this.storageProducts.find(
      //   product => product.name !== productName
      // );
      // if (products.quantity < 1) {
      //   Object.assign(products, {
      //     name: products.name,
      //     quantity: Number(products.quantity) - 1,
      //     price: Number(products.price) * Number(products.quantity)
      //   });
      //   localStorage.setItem("products", JSON.stringify(products));
      // } else {
      //   this.deleteProduct(product)
      // }
      // this.displayBasketProducts();
    methods: {
        displayBasketProducts() {
            this.basketProducts = JSON.parse(localStorage.getItem('products'));
            console.log(this.basketProducts)
        },
        deleteProduct(productName) {
            // let storageProducts = JSON.parse(localStorage.getItem('products'));
            // let products = storageProducts.find(product => product.name !== productName);
            // localStorage.setItem('products', JSON.stringify(products));
            // this.displayBasketProducts();
        },
        goToCheckOut(productName, index) {
            this.$router.push({
                name: "CheckOut",
                params: { productName: productName, index: index }
            });
        }
    }
});
