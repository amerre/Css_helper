<template>
  <div>
    <button @click="show = !show">
      <h1>Transform</h1>
    </button>
    <div v-if="show" class="rulesWrap">
      <div>
        <h1>Translate X : {{ translateX }} px</h1>
        <input type="range" min="0" max="200" v-model="translateX">
      </div>
      <div>
        <h1>Translate Y : {{ translateY }} px</h1>
        <input type="range" min="0" max="200" v-model="translateY">
      </div>
      <div>
        <h1>Scale : * {{ scale }}</h1>
        <input type="range" min="0" max="5" step="0.1" v-model="scale">
      </div>
      <div>
        <h1>Rotate X : {{ rotateX }} deg</h1>
        <input type="range" min="0" max="300" v-model="rotateX">
      </div>
      <div>
        <h1>Rotate Y : {{ rotateY }} deg</h1>
        <input type="range" min="0" max="300" v-model="rotateY">
      </div>
      <div>
        <h1>Rotate Z : {{ rotateZ }}deg</h1>
        <input type="range" min="0" max="300" v-model="rotateZ">
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
    },
    rotateX: {
      get() {
        return this.$store.state.rotateX;
      },
      set(value) {
        this.$store.commit("ROTATEX_COMMIT", value);
      }
    },
    rotateY: {
      get() {
        return this.$store.state.rotateY;
      },
      set(value) {
        this.$store.commit("ROTATEY_COMMIT", value);
      }
    },
    rotateZ: {
      get() {
        return this.$store.state.rotateZ;
      },
      set(value) {
        this.$store.commit("ROTATEZ_COMMIT", value);
      }
    }
  }
};
</script>