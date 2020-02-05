import Vue from "vue";
import firebase from "firebase";
import { getAllUserProfileData, updateUserPersonalData } from "../../firebase.js";
import UserSettings from "../../components/UserSettings/UserSettings.vue";
import PayPal from 'vue-paypal-checkout'

export default Vue.extend({
    name: "CheckOut",
    components: {
        UserSettings,
        PayPal
    },
    data() {
        return {
            loaded: false,
            paidFor: false,
            productName: this.$route.params.productName,
            profile: {},
            isAuthenticated: firebase.auth().currentUser,
            credentials: {
              sandbox: 'AYDc1pC2VxkqCLjapMmCNa7t4KjtEY8hkKPnfHEHLy0Q3jEigYx7zOY3QmlzY0re_vG13C2FElpAA28R',
              production: '<production client id>'
            },
            localStorageProducts: JSON.parse(localStorage.getItem("products")) || [],
            totalPriceAsString: ""
        }
    },
    mounted() {
        this.setProfileData();
        this.totalCheckOutPrice();
    },
    methods: {
        totalCheckOutPrice() {
          let productPrices = this.localStorageProducts.map(product => Number(product.price))
          let sumOfAllPrices = productPrices.reduce((a, b) => a + b, 0)
          this.totalPriceAsString = sumOfAllPrices.toString()
          return this.totalPriceAsString
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
