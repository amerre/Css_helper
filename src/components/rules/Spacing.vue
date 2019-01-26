<template>
  <div>
    <button :class="{ active: show }" @click="show = !show">
      <h1 class="rulesName">Spacing</h1>
    </button>
    <transition name="roll" mode="out-in">
      <div v-if="show" class="rulesWrap">
        <h2>Margin top: {{ margintop }} px</h2>
        <input type="range" min="0" max="200" v-model="margintop">

        <h2>Margin right: {{ marginright }} px</h2>
        <input type="range" min="0" max="200" v-model="marginright">

        <h2>Margin bottom: {{ marginbottom }} px</h2>
        <input type="range" min="0" max="200" v-model="marginbottom">

        <h2>Margin left: {{ marginleft }} px</h2>
        <input type="range" min="0" max="200" v-model="marginleft">
      </div>
    </transition>
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
    margintop: {
      get() {
        return this.$store.state.margin.top;
      },
      set(value) {
        this.$store.commit("MARGINTOP_COMMIT", value);
      }
    },
    marginright: {
      get() {
        return this.$store.state.margin.right;
      },
      set(value) {
        this.$store.commit("MARGINRIGHT_COMMIT", value);
      }
    },
    marginbottom: {
      get() {
        return this.$store.state.margin.bottom;
      },
      set(value) {
        this.$store.commit("MARGINBOTTOM_COMMIT", value);
      }
    },
    marginleft: {
      get() {
        return this.$store.state.margin.left;
      },
      set(value) {
        this.$store.commit("MARGINLEFT_COMMIT", value);
      }
    }
  }
};
</script>

<style scoped>
.roll-enter-to,
.roll-leave {
  height: 201.2px;
}
</style>