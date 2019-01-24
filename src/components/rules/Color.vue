<template>
  <div>
    <button :class="{ active: show }" @click="show = !show">
      <h1 class="rulesName">Color</h1>
    </button>
    <transition name="roll" mode="out-in">
      <div v-if="show" class="rulesWrap">
        <div>
          <h2>Border-color</h2>
          <h2>R:{{ borderrcolor }}</h2>
          <input type="range" min="0" max="255" v-model="borderrcolor">
          <h2>G:{{ bordergcolor }}</h2>
          <input type="range" min="0" max="255" v-model="bordergcolor">
          <h2>B:{{ borderbcolor }}</h2>
          <input type="range" min="0" max="255" v-model="borderbcolor">

          <h2>Bg-color</h2>
          <h2>R:{{ bgrcolor }}</h2>
          <input type="range" min="0" max="255" v-model="bgrcolor">
          <h2>G:{{ bggcolor }}</h2>
          <input type="range" min="0" max="255" v-model="bggcolor">
          <h2>B:{{ bgbcolor }}</h2>
          <input type="range" min="0" max="255" v-model="bgbcolor">

          <h2>Opacity : {{ opacity }}</h2>
          <input type="range" min="0" max="1" v-model="opacity" step="0.1">
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },
  computed: {
    borderrcolor: {
      get() {
        return this.$store.state.bordercolor.r;
      },
      set(value) {
        this.$store.commit("BORDERRCOLOR_COMMIT", value);
      }
    },
    bordergcolor: {
      get() {
        return this.$store.state.bordercolor.g;
      },
      set(value) {
        this.$store.commit("BORDERGCOLOR_COMMIT", value);
      }
    },
    borderbcolor: {
      get() {
        return this.$store.state.bordercolor.b;
      },
      set(value) {
        this.$store.commit("BORDERBCOLOR_COMMIT", value);
      }
    },
    bgrcolor: {
      get() {
        return this.$store.state.bgcolor.r;
      },
      set(value) {
        this.$store.commit("BGRCOLOR_COMMIT", value);
      }
    },
    bggcolor: {
      get() {
        return this.$store.state.bgcolor.g;
      },
      set(value) {
        this.$store.commit("BGGCOLOR_COMMIT", value);
      }
    },
    bgbcolor: {
      get() {
        return this.$store.state.bgcolor.b;
      },
      set(value) {
        this.$store.commit("BGBCOLOR_COMMIT", value);
      }
    },
    opacity: {
      get() {
        return this.$store.state.opacity;
      },
      set(value) {
        this.$store.commit("OPACITY_COMMIT", value);
      }
    }
  }
};
</script>

<style scoped>
.roll-enter-to,
.roll-leave {
  height: 392.1px;
}
</style>