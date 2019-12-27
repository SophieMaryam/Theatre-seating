import Vue from "vue";
import firebase from "firebase";
import { addProductToBasket } from "../../firebase.js";
import allProductDataJSon from "../../common/productData.json";

export default Vue.extend({
    name: "ContinueShoppingModal",
    props: ["productName", "singleProduct"],
    data() {
        return {
            modalOpen: false,
            allProductData: allProductDataJSon.allProductData,
        }
    },
    methods: {
        async putInBasket(product) {
            await addProductToBasket(product.name, product.price);
        },
        goToBasket(productName) {
            const currentUser = firebase.auth().currentUser;
            if (!currentUser) {
                // Incomplete: This stills need to query theatre/indx & show name
                this.$router.replace({ path: "/login", query: { redirect: '/theatre' } });
            } else {
                // await updateUserPersonalData(this.profile);
                this.$store.commit("selectedTab", 3);
                this.$router.replace({ path: "/profile", query: { productName } });
            }
        }
    },
    buyProduct() {
        console.log("purchase page")
    }
});