<template>
  <div class="content">
    <div
      class="box"
      :style="{ width: width + 'px', height: height + 'px', border: border + 'px solid black'}"
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
    }
  }
};
</script>

<style lang="scss">
</style>