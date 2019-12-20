import Vue from "vue";
import allProductDataJSON from "../../common/productData.json";

export default Vue.extend({
    name: "ProductList",
    data() {
        return {
            productData: allProductDataJSON.allProductData
        }
    },
    methods: {
        goToProductPage(product, index) {
            this.$router.push({
                name: "SelectedProduct",
                params: { name: product.name, index: index }
            });
        }
    }
});