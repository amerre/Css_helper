<template>
  <div class="export" @click="show = !show">
    <button class="exportBtn">Export CSS</button>
    <div class="exportContent" v-if="show">.box {
      <div>width: {{ width }} px;</div>
      <div>height: {{ height }} px;</div>
      <div v-if="border != 0">border: {{ border }}px {{ borderstyle }} {{ borderrgb }};</div>
      <div v-if="borderradius != 0">border-radius: {{ borderradius }}px;</div>
      <div v-if="bgrgb != 'rgb(0, 0, 0)'">background-color: {{ bgrgb }};</div>
      <div v-if="opacity != 1">opacity: {{ opacity }};</div>
      <div v-if="translateX != 0">transform: translateX({{ translateX }}px);</div>
      <div v-if="translateY != 0">transform: translateY({{ translateY }}px);</div>
      <div v-if="scale != 1">transform: scale({{ scale }});</div>
      <div v-if="rotateX != 0">transform: rotateX{{ rotateX }}px);</div>
      <div v-if="rotateY != 0">transform: rotateY({{ rotateY }}px);</div>
      <div v-if="rotateZ != 0">transform: rotateZ({{ rotateZ }}px);</div>}
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
    width() {
      return this.$store.state.width;
    },
    height() {
      return this.$store.state.height;
    },
    border() {
      return this.$store.state.border;
    },
    borderradius() {
      return this.$store.state.borderradius;
    },
    borderstyle() {
      return this.$store.state.borderstyle;
    },
    borderrgb() {
      return (
        "rgb(" +
        this.$store.state.bordercolor.r +
        ", " +
        this.$store.state.bordercolor.g +
        ", " +
        this.$store.state.bordercolor.b +
        ")"
      );
    },
    bgrgb() {
      return (
        "rgb(" +
        this.$store.state.bgcolor.r +
        ", " +
        this.$store.state.bgcolor.g +
        ", " +
        this.$store.state.bgcolor.b +
        ")"
      );
    },
    opacity() {
      return this.$store.state.opacity;
    },
    translateX() {
      return this.$store.state.translateX;
    },
    translateY() {
      return this.$store.state.translateY;
    },
    scale() {
      return this.$store.state.scale;
    },
    rotateX() {
      return this.$store.state.rotateX;
    },
    rotateY() {
      return this.$store.state.rotateY;
    },
    rotateZ() {
      return this.$store.state.rotateZ;
    }
  }
};
</script>