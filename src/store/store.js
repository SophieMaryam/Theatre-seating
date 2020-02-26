import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'tickets',
  storage: window.localStorage
})

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tabIndex: 0,
        isUserAuthenticated: null,
        selectedSeat: [{
          id: null,
          seatNumber: "",
          sectionName: ""
        }]
    },
    mutations: {
        selectedTab(state, updatedTab) {
            state.tabIndex = updatedTab;
        },
        userAuthenticationStatus(state, updatedAuthentication) {
            state.isUserAuthenticated = updatedAuthentication;
        },
        ADD_SELECTED_SEAT(state, selectedSeatPayload) {
          var newSelectedSeat = {
            id: newID,
            seatNumber: selectedSeatPayload.seatNumber,
            sectionName: selectedSeatPayload.sectionName
          }
          state.selectSeat.unshift(newSelectedSeat)
          // state.selectedSeat.seatNumber = updatedSelectedSeatData.seatNumber;
          // state.selectedSeat.sectionName = updatedSelectedSeatData.sectionName;
        },
        DELETE_SELECTED_SEAT(state, deleteSelectSeatPayload) {
          var seat = state.selectSeat.find()
        }
    },
    getters: {
        tabIndex: state => state.tabIndex,
        isUserAuthenticated: state => state.isUserAuthenticated,
        selectedSeat: state => state.selectedSeat
    },
    plugins: [vuexPersist.plugin]
})
