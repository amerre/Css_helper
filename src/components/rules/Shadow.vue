<template>
  <div>
    <button :class="{ active: show }" @click="show = !show">
      <h1 class="rulesName">Shadow</h1>
    </button>
    <transition name="roll" mode="out-in">
      <div v-if="show" class="rulesWrap">
        <div>
          <h2>Shadow X : {{ shadowX }}</h2>
          <input type="range" min="0" max="255" v-model="shadowX">
          <h2>Shadow Y : {{ shadowY }}</h2>
          <input type="range" min="0" max="255" v-model="shadowY">
          <h2>Spread : {{ spread }}</h2>
          <input type="range" min="-50" max="255" v-model="spread">
          <h2>Blur : {{ blur }}</h2>
          <input type="range" min="0" max="255" v-model="blur">
          <h2>Style</h2>
          <select v-model="shadowstyle">
            <option value selected>Outline</option>
            <option value="inset">Inset</option>
          </select>

          <h2>Color</h2>
          <h2>R : {{ shadowrcolor }}</h2>
          <input type="range" min="0" max="255" v-model="shadowrcolor">
          <h2>G : {{ shadowgcolor }}</h2>
          <input type="range" min="0" max="255" v-model="shadowgcolor">
          <h2>B : {{ shadowbcolor }}</h2>
          <input type="range" min="0" max="255" v-model="shadowbcolor">
          <h2>Opacity : {{ shadowopacity }}</h2>
          <input type="range" min="0" max="1" step="0.1" v-model="shadowopacity">
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
    shadowX: {
      get() {
        return this.$store.state.shadowX;
      },
      set(value) {
        this.$store.commit("SHADOWX_COMMIT", value);
      }
    },
    shadowY: {
      get() {
        return this.$store.state.shadowY;
      },
      set(value) {
        this.$store.commit("SHADOWY_COMMIT", value);
      }
    },
    spread: {
      get() {
        return this.$store.state.spread;
      },
      set(value) {
        this.$store.commit("SPREAD_COMMIT", value);
      }
    },
    blur: {
      get() {
        return this.$store.state.blur;
      },
      set(value) {
        this.$store.commit("BLUR_COMMIT", value);
      }
    },
    shadowstyle: {
      get() {
        return this.$store.state.shadowstyle;
      },
      set(value) {
        this.$store.commit("SHADOWSTYLE_COMMIT", value);
      }
    },
    shadowrcolor: {
      get() {
        return this.$store.state.shadowcolor.r;
      },
      set(value) {
        this.$store.commit("SHADOWRCOLOR_COMMIT", value);
      }
    },
    shadowgcolor: {
      get() {
        return this.$store.state.shadowcolor.g;
      },
      set(value) {
        this.$store.commit("SHADOWGCOLOR_COMMIT", value);
      }
    },
    shadowbcolor: {
      get() {
        return this.$store.state.shadowcolor.b;
      },
      set(value) {
        this.$store.commit("SHADOWBCOLOR_COMMIT", value);
      }
    },
    shadowopacity: {
      get() {
        return this.$store.state.shadowcolor.a;
      },
      set(value) {
        this.$store.commit("SHADOWOPACITY_COMMIT", value);
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