import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    boxes: 1,
    width: 80,
    height: 90,
    border: 10,
    borderradius: 0,
    borderstyle: "solid",
    bordercolor: {
      r: 0,
      g: 255,
      b: 0
    },
    bgcolor: {
      r: 0,
      g: 0,
      b: 0
    },
    opacity: 1,
    translateX: 0,
    translateY: 0,
    scale: 1,
    rotateY: 0,
    rotateX: 0,
    rotateZ: 0,
    shadowX: 10,
    shadowY: 10,
    spread: 0,
    blur: 0
  },
  mutations: {
    // NUMBER OF BOXES
    BOXES_COMMIT(state, payload) {
      state.boxes = payload;
    },
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
    // BORDER RADIUS
    BORDERRADIUS_COMMIT(state, payload) {
      state.borderradius = payload;
    },
    // BORDER STYLE
    BORDERSTYLE_COMMIT(state, payload) {
      state.borderstyle = payload;
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
    },
    // TRANSFORM
    TRANSLATEX_COMMIT(state, payload) {
      state.translateX = payload;
    },
    TRANSLATEY_COMMIT(state, payload) {
      state.translateY = payload;
    },
    SCALE_COMMIT(state, payload) {
      state.scale = payload;
    },
    ROTATEX_COMMIT(state, payload) {
      state.rotateX = payload;
    },
    ROTATEY_COMMIT(state, payload) {
      state.rotateY = payload;
    },
    ROTATEZ_COMMIT(state, payload) {
      state.rotateZ = payload;
    },
    // SHADOW
    SHADOWX_COMMIT(state, payload) {
      state.shadowX = payload;
    },
    SHADOWY_COMMIT(state, payload) {
      state.shadowY = payload;
    },
    SPREAD_COMMIT(state, payload) {
      state.spread = payload;
    },
    BLUR_COMMIT(state, payload) {
      state.blur = payload;
    }
  }
});
