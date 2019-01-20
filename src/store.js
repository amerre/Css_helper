import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    width: 80,
    height: 90,
    border: 2,
    bordercolor: {
      r: 0,
      g: 0,
      b: 0
    },
    bgcolor: {
      r: 0,
      g: 0,
      b: 0
    }
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
    },
    BORDERRCOLOR_COMMIT(state, payload) {
      state.bordercolor.r = payload;
    },
    BORDERGCOLOR_COMMIT(state, payload) {
      state.bordercolor.g = payload;
    },
    BORDERBCOLOR_COMMIT(state, payload) {
      state.bordercolor.b = payload;
    },
    BGRCOLOR_COMMIT(state, payload) {
      state.bgcolor.r = payload;
    },
    BGGCOLOR_COMMIT(state, payload) {
      state.bgcolor.g = payload;
    },
    BGBCOLOR_COMMIT(state, payload) {
      state.bgcolor.b = payload;
    }
  },
  actions: {}
});
