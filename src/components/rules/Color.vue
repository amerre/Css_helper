<template>
  <div>
    <button @click="show = !show">
      <h1>Color</h1>
    </button>
    <div v-if="show" class="rulesWrap">
      <div>
        <h1>Border-color</h1>
        <h1>R:{{ borderrcolor }}</h1>
        <input type="range" min="0" max="255" v-model="borderrcolor">
        <h1>G:{{ bordergcolor }}</h1>
        <input type="range" min="0" max="255" v-model="bordergcolor">
        <h1>B:{{ borderbcolor }}</h1>
        <input type="range" min="0" max="255" v-model="borderbcolor">

        <h1>Bg-color</h1>
        <h1>R:{{ bgrcolor }}</h1>
        <input type="range" min="0" max="255" v-model="bgrcolor">
        <h1>G:{{ bggcolor }}</h1>
        <input type="range" min="0" max="255" v-model="bggcolor">
        <h1>B:{{ bgbcolor }}</h1>
        <input type="range" min="0" max="255" v-model="bgbcolor">
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
    }
  }
};
</script>