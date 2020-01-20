import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tabIndex: 0,
        isUserAuthenticated: null
    },
    mutations: {
        selectedTab(state, updatedTab) {
            state.tabIndex = updatedTab;
        },
        userAuthenticationStatus(state, updatedAuthentication) {
            state.isUserAuthenticated = updatedAuthentication;
        }
    },
    getters: {
        tabIndex: state => state.tabIndex,
        isUserAuthenticated: state => state.isUserAuthenticated
    }
})