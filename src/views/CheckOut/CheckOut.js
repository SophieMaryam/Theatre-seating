import Vue from "vue";
import firebase from "firebase";
import { getAllUserProfileData, updateUserPersonalData } from "../../firebase.js";
import allProductDataJSon from "../../common/productData.json";
import UserSettings from "../../components/UserSettings/UserSettings.vue";

export default Vue.extend({
    name: "CheckOut",
    components: {
        UserSettings
    },
    data() {
        return {
            loaded: false,
            paidFor: false,
            productName: this.$route.params.productName,
            profile: {},
            product: {
                price: 10
            },
            localStorageProducts: JSON.parse(localStorage.getItem("products")) || [],
            isAuthenticated: firebase.auth().currentUser
        }
    },
    mounted() {
        this.setProfileData();
        this.listenerForPaypalScript();
    },
    methods: {
        listenerForPaypalScript() {
            const script = document.createElement("script");
            script.src = "https://www.paypal.com/sdk/js?client-id=AYDc1pC2VxkqCLjapMmCNa7t4KjtEY8hkKPnfHEHLy0Q3jEigYx7zOY3QmlzY0re_vG13C2FElpAA28R";
            script.addEventListener("load", this.setLoaded);
            document.body.appendChild(script);
        },
        setLoaded() {
            this.loaded = true;
            window.paypal
                .Buttons({
                    createOrder: (actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    description: this.productName,
                                    amount: {
                                        currency_code: "EU",
                                        value: this.products.price
                                    }
                                }
                            ]
                        });
                    },
                    onApprove: async (actions) => {
                        const order = await actions.order.capture();
                        this.data;
                        this.paidFor = true;
                        console.log(order);
                    },
                    onError: err => {
                        console.log(err);
                    }
                })
                .render(this.$refs.paypal);
        },
        async setProfileData() {
            this.profile = await getAllUserProfileData();
        },
        async saveAndPay() {
            await updateUserPersonalData(this.profile);
        },
        async loginAndRedirectBack(email, password) {
            const value = this.$route.query.redirect;
            await userLogin(email, password, value)
          },
    }
})
