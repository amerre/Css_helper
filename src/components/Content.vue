<template>
  <div class="content">
    <div
      class="box"
      :style="{ width: width + 'px', height: height + 'px', border: border + borderrgb, backgroundColor: bgrgb }"
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
      return this.$store.state.border;
    },
    borderrgb() {
      return (
        "px solid rgb(" +
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
    }
  }
};
</script>

<style lang="scss">
</style>