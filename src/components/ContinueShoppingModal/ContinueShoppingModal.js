import Vue from "vue";
import firebase from "firebase";
import allProductDataJSon from "../../common/productData.json";

export default Vue.extend({
    name: "ContinueShoppingModal",
    props: ["selectedProduct"],
    data() {
        return {
            modalOpen: false,
            allProductData: allProductDataJSon.allProductData,
        }
    },
    methods: {
        addToBasket(product) {
            let products = [];
            if (localStorage.getItem('products')) {
                products = JSON.parse(localStorage.getItem('products'));
            }
            // products.push({ name: product.name, image: product.img, price: product.price });
            // localStorage.setItem('products', JSON.stringify(products));
            let hello = products.map(name => name.name)
            const values = hello.forEach( (item) => {
                if(item == product.name) {
                    console.log("hi")
                } else {
                    products.push({ name: product.name, image: product.img, price: product.price });
                    localStorage.setItem('products', JSON.stringify(products));
                }
              });

        },
        goToBasket(productName) {
            const currentUser = firebase.auth().currentUser;
            if (!currentUser) {
                // Incomplete: This stills need to query theatre/indx & show name
                this.$router.replace({ path: "/login", query: { redirect: '/checkout' } });
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