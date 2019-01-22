<template>
  <div>
    <button @click="show = !show">
      <h1>Transform</h1>
    </button>
    <div v-if="show" class="rulesWrap">
      <div>
        <h1>Translate X : {{ translateX }}</h1>
        <input type="range" min="0" max="200" v-model="translateX">
      </div>
      <div>
        <h1>Translate Y : {{ translateY }}</h1>
        <input type="range" min="0" max="200" v-model="translateY">
      </div>
      <div>
        <h1>Scale : {{ scale }}</h1>
        <input type="range" min="0" max="5" step="0.1" v-model="scale">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    };
  },
  computed: {
    translateX: {
      get() {
        return this.$store.state.translateX;
      },
      set(value) {
        this.$store.commit("TRANSLATEX_COMMIT", value);
      }
    },
    translateY: {
      get() {
        return this.$store.state.translateY;
      },
      set(value) {
        this.$store.commit("TRANSLATEY_COMMIT", value);
      }
    },
    scale: {
      get() {
        return this.$store.state.scale;
      },
      set(value) {
        this.$store.commit("SCALE_COMMIT", value);
      }
    }
  }
};
</script>