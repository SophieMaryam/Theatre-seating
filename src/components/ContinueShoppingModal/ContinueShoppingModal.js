import Vue from "vue";
import firebase from "firebase";

export default Vue.extend({
    name: "ContinueShoppingModal",
    props: ["productName", "productIndex", "productPrice"],
    data() {
        return {
            modalOpen: false,
            productName: "",
            productIndex: "",
            productPrice: ""
        }
    },
    methods: {
        goToBasket() {
            const currentUser = firebase.auth().currentUser;
            if (!currentUser) {
                // Incomplete: This stills need to query theatre/indx & show name
                this.$router.replace({ path: "/login", query: { redirect: '/theatre' } });
            } else {
                this.$router.replace({ path: "/profile", query: { productIndex, productName } });
            }
        }
    },
    buyProduct() {
        console.log("purchase page")
    }
});