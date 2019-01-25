<template>
  <div>
    <button :class="{ active: show }" @click="show = !show">
      <h1 class="rulesName">Shadow</h1>
    </button>
    <transition name="roll" mode="out-in">
      <div v-if="show" class="rulesWrap">
        <div>
          <h2>Shadow X :{{ shadowX }}</h2>
          <input type="range" min="0" max="255" v-model="shadowX">
          <h2>Shadow Y :{{ shadowY }}</h2>
          <input type="range" min="0" max="255" v-model="shadowY">
          <h2>Spread :{{ spread }}</h2>
          <input type="range" min="0" max="255" v-model="spread">
          <h2>Blur :{{ blur }}</h2>
          <input type="range" min="0" max="255" v-model="blur">
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