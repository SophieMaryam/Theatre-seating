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
      let localStorageProducts = JSON.parse(localStorage.getItem("products")) || [];
      let findProductDuplicate = localStorageProducts.find(p => p.name == product.name);
      if (findProductDuplicate) {
          findProductDuplicate.quantity = Number(findProductDuplicate.quantity) + 1
          findProductDuplicate.price = Number(product.price) * Number(findProductDuplicate.quantity)
      } else {
        localStorageProducts.push({ name: product.name, price: product.price, quantity: 1, img: product.img});
      }
      return localStorage.setItem("products", JSON.stringify(localStorageProducts));
    },
    goToBasket(productName) {
      const currentUser = firebase.auth().currentUser;
      this.$store.commit("selectedTab", 3);
      if (!currentUser) {
        this.$router.replace({
          path: "/login",
          query: { redirect: "/profile"}
        });
      } else {
        this.$router.replace({ path: "/profile"});
      }
    },
    goToCheckOut(productName) {
      this.$router.replace({ path: "/checkout", query: { productName } });
    }
  }
});
