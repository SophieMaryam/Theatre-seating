import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tabIndex: 0
    },
    mutations: {
        selectedTab(state, updatedTab) {
            state.tabIndex = updatedTab;
        }
    },
    getters: {
        tabIndex: state => state.tabIndex
    }
})