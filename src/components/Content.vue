<template>
  <div class="content">
    <div
      class="box"
      :style="{
        width: width + 'px',
        height: height + 'px',
        border: border + ' ' + borderstyle + ' ' + borderrgb,
        borderRadius: borderradius,
        backgroundColor: bgrgb,
        opacity: opacity,
        transform: translateX + translateY + scale + rotateX + rotateY + rotateZ }"
    ></div>
  </div>
</template>

<script>
export default {
  computed: {
    width() {
      return this.$store.state.width;
    },
    height() {
      return this.$store.state.height;
    },
    border() {
      return this.$store.state.border + "px";
    },
    borderradius() {
      return this.$store.state.borderradius + "px";
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
      return "translateX(" + this.$store.state.translateX + "px)";
    },
    translateY() {
      return "translateY(" + this.$store.state.translateY + "px)";
    },
    scale() {
      return "scale(" + this.$store.state.scale + ")";
    },
    rotateX() {
      return "rotateX(" + this.$store.state.rotateX + "deg)";
    },
    rotateY() {
      return "rotateY(" + this.$store.state.rotateY + "deg)";
    },
    rotateZ() {
      return "rotateZ(" + this.$store.state.rotateZ + "deg)";
    }
  }
};
</script>

<style lang="scss">
</style>