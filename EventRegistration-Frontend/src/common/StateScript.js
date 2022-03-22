import Vue from "vue";
import Vuex from "vuex";
import persistedState from "vuex-persistedstate";

Vue.use(Vuex);

// sessionStorage clears on new tab, localStorage never expires

export const COUNT_STATE = new Vuex.Store({
  plugins: [
    persistedState({
      key: "vuex-count-state",
      storage: window.localStorage,
    }),
  ],
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

export const LOGIN_STATE = new Vuex.Store({
  plugins: [
    persistedState({
      key: "vuex-login-state",
      storage: window.localStorage,
    }),
  ],
  state: {
    isLoggedIn: false,
    userType: "",
    username: "",
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});
