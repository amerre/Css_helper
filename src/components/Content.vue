<template>
  <div class="content">
    <div
      v-for="box in boxes"
      :key="box"
      class="box"
      :style="{
        color: 'white',
        width: width + 'px',
        height: height + 'px',
        border: border + 'px ' + borderstyle + ' ' + borderrgb,
        borderRadius: borderradius + 'px',
        backgroundColor: bgrgb,
        opacity: opacity,
        transform:
        'translateX(' + translateX + 'px)' +
        'translateY(' + translateY + 'px)' +
        'scale(' + scale + ')' +
        'rotateX(' + rotateX + 'deg)' +
        'rotateY(' + rotateY + 'deg)' +
        'rotateZ(' + rotateZ + 'deg)'
        }"
    ></div>
    <div class="foot">
      <button class="addBoxBtn" @click="boxes++">Add a box</button>
      <app-export
        :width="width"
        :height="height"
        :border="border"
        :borderradius="borderradius"
        :borderstyle="borderstyle"
        :borderrgb="borderrgb"
        :bgrgb="bgrgb"
        :opacity="opacity"
        :translateX="translateX"
        :translateY="translateY"
        :scale="scale"
        :rotateX="rotateX"
        :rotateY="rotateY"
        :rotateZ="rotateZ"
      ></app-export>
    </div>
  </div>
</template>

<script>
import Export from "./Export.vue";

export default {
  components: {
    appExport: Export
  },
  computed: {
    boxes: {
      get() {
        return this.$store.state.boxes;
      },
      set(value) {
        this.$store.commit("BOXES_COMMIT", value);
      }
    },
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

<style lang="scss">
</style>