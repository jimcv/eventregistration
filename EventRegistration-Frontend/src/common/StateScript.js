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
