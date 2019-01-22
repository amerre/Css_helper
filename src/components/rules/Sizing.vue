<template>
  <div>
    <button @click="show = !show">
      <h1>Sizing</h1>
    </button>
    <div v-if="show" class="rulesWrap">
      <div>
        <h1>Width : {{ width }} px</h1>
        <input type="range" min="0" max="200" v-model="width">
      </div>
      <div>
        <h1>Height : {{ height }} px</h1>
        <input type="range" min="0" max="200" v-model="height">
      </div>
      <div>
        <h1>Border : {{ border }} px</h1>
        <input type="range" min="0" max="80" v-model="border">
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