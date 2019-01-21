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
    },
    opacity: 1
  },
  mutations: {
    // WIDTH
    WIDTH_COMMIT(state, payload) {
      state.width = payload;
    },
    // HEIGHT
    HEIGHT_COMMIT(state, payload) {
      state.height = payload;
    },
    // BORDER
    BORDER_COMMIT(state, payload) {
      state.border = payload;
    },
    // BORDER COLOR - R
    BORDERRCOLOR_COMMIT(state, payload) {
      state.bordercolor.r = payload;
    },
    // BORDER COLOR - G
    BORDERGCOLOR_COMMIT(state, payload) {
      state.bordercolor.g = payload;
    },
    // BORDER COLOR - B
    BORDERBCOLOR_COMMIT(state, payload) {
      state.bordercolor.b = payload;
    },
    // BACKGROUND COLOR - R
    BGRCOLOR_COMMIT(state, payload) {
      state.bgcolor.r = payload;
    },
    // BACKGROUND COLOR - G
    BGGCOLOR_COMMIT(state, payload) {
      state.bgcolor.g = payload;
    },
    // BACKGROUND COLOR - B
    BGBCOLOR_COMMIT(state, payload) {
      state.bgcolor.b = payload;
    },
    // OPACITY
    OPACITY_COMMIT(state, payload) {
      state.opacity = payload;
    }
  },
  actions: {}
});
