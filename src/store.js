import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    width: 80,
    height: 90,
    border: 2
  },
  mutations: {
    WIDTH_COMMIT(state, payload) {
      state.width = payload;
    },
    HEIGHT_COMMIT(state, payload) {
      state.height = payload;
    },
    BORDER_COMMIT(state, payload) {
      state.border = payload;
    }
  },
  actions: {}
});
