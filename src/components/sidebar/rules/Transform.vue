<template>
  <div>
    <button :class="{ active: show }" @click="show = !show">
      <h1 class="rulesName">Transform</h1>
    </button>
    <transition name="roll" mode="out-in">
      <div v-if="show" class="rulesWrap">
        <h2>Translate X : {{ translateX }} px</h2>
        <input type="range" min="0" max="200" v-model="translateX">

        <h2>Translate Y : {{ translateY }} px</h2>
        <input type="range" min="0" max="200" v-model="translateY">

        <h2>Scale : * {{ scale }}</h2>
        <input type="range" min="0" max="5" step="0.1" v-model="scale">

        <h2>Rotate X : {{ rotateX }} deg</h2>
        <input type="range" min="0" max="360" v-model="rotateX">

        <h2>Rotate Y : {{ rotateY }} deg</h2>
        <input type="range" min="0" max="360" v-model="rotateY">

        <h2>Rotate Z : {{ rotateZ }}deg</h2>
        <input type="range" min="0" max="360" v-model="rotateZ">
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


<style scoped >
.roll-enter-to,
.roll-leave {
  height: 301.8px;
}
</style>