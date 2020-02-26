import Vue from "vue";
import firebase from "firebase";
import allProductDataJSon from "../../common/productData.json";

export default Vue.extend({
  name: "ContinueShoppingModal",
  props: ["selectedProduct"],
  data() {
    return {
      modalOpen: false,
      allProductData: allProductDataJSon.allProductData
    };
  },
  methods: {
    addToBasket(product) {
      let products = JSON.parse(localStorage.getItem("products")) || [];
      let filteredProduct = products.find(p => p.name == product.name);
      if (filteredProduct) {
          filteredProduct.quantity = Number(filteredProduct.quantity) + 1
          filteredProduct.price = Number(product.price) * Number(filteredProduct.quantity)
      } else {
        products.push({ name: product.name, price: product.price, quantity: 1, img: product.img});
      }
      return localStorage.setItem("products", JSON.stringify(products));
    },
    goToBasket(productName) {
      const currentUser = firebase.auth().currentUser;
      if (!currentUser) {
        // Incomplete: This stills need to query product
        this.$router.replace({
          path: "/login",
          query: { redirect: "/checkout" }
        });
      } else {
        this.$store.commit("selectedTab", 3);
        this.$router.replace({ path: "/profile", query: { productName } });
      }
    },
    goToCheckOut(productName) {
      this.$router.replace({ path: "/checkout", query: { productName } });
    }
  }
});
