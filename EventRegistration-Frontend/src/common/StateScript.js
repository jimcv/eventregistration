import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const COUNT_STATE = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

export const LOGIN_STATE = new Vuex.Store({
  state: {
    isLoggedIn: false,
    userType: "",
    username: ""
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  }
});
