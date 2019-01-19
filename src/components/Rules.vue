<template>
  <div class="rules">
    <button @click="show = !show">Sizing</button>
    <div v-if="show">
      <h1>Width : {{ width }}</h1>
      <input type="range" min="0" max="200" v-model="width">

      <h1>Height : {{ height }}</h1>
      <input type="range" min="0" max="200" v-model="height">

      <h1>Border : {{ border }}</h1>
      <input type="range" min="0" max="80" v-model="border">
    </div>
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
    width: {
      get() {
        return this.$store.state.width;
      },
      set(value) {
        this.$store.commit("WIDTH_COMMIT", value);
      }
    },
    height: {
      get() {
        return this.$store.state.height;
      },
      set(value) {
        this.$store.commit("HEIGHT_COMMIT", value);
      }
    },
    border: {
      get() {
        return this.$store.state.border;
      },
      set(value) {
        this.$store.commit("BORDER_COMMIT", value);
      }
    }
  }
};
</script>