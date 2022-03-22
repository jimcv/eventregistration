// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import Vuex from "vuex";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);
Vue.config.productionTip = false;

const COUNTER = {
  state: () => ({
    count: 0
  }),
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  getters: {
    getCount: state => {
      return state.count;
    }
  }
};

const LOGIN_STATE = {
  state: () => ({
    isLoggedIn: false,
    currentUserType: "",
    currentUsername: ""
  }),
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
  getters: {
    getLoginStatus: state => {
      return state.isLoggedIn;
    }
  }
};

// set up state management
const store = new Vuex.Store({
  modules: {
    a: COUNTER,
    b: LOGIN_STATE
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App },
  store: store
});
