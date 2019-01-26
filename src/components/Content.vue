<template>
  <div class="content">
    <div
      v-for="box in boxes"
      :key="box"
      class="box"
      :style="{
        width: width,
        height: height,
        border: border,
        borderRadius: borderradius,
        backgroundColor: bgrgba,
        transform: transform,
        boxShadow: shadow,
        margin: margin
        }"
    ></div>
    <div id="footer">
      <button id="addABox" @click="addBox">
        <h1>Add a box</h1>
      </button>
      <button @click="show = !show">
        <h1 v-if="!show">Export CSS</h1>
        <h1 v-if="show">Close export</h1>
      </button>
    </div>
    <transition name="fadeAndSlide" mode="out-in">
      <!-- PASSING DATA TO THE EXPORT COMPONENT -->
      <app-export
        v-if="show"
        :width="width"
        :height="height"
        :border="border"
        :borderradius="borderradius"
        :borderopacity="this.$store.state.bordercolor.a"
        :bgrgba="bgrgba"
        :translateX="this.$store.state.translateX"
        :translateY="this.$store.state.translateY"
        :scale="this.$store.state.scale"
        :rotateX="this.$store.state.rotateX"
        :rotateY="this.$store.state.rotateY"
        :rotateZ="this.$store.state.rotateZ"
        :shadowopacity="this.$store.state.shadowcolor.a"
        :shadow="shadow"
        :margin="margin"
      ></app-export>
    </transition>
  </div>
</template>

<script>
import Export from "./Export.vue";

export default {
  methods: {
    addBox() {
      if (this.boxes < 3) {
        this.boxes++;
      }
    }
  },
  data() {
    return {
      show: false
    };
  },
  components: {
    appExport: Export
  },
  computed: {
    // GET THE BOXES
    boxes: {
      get() {
        return this.$store.state.boxes;
      },
      set(value) {
        this.$store.commit("BOXES_COMMIT", value);
      }
    },
    // GET THE DIFFERENTS VARIABLES STORED IN STORE.JS
    width() {
      return this.$store.state.width + "px";
    },
    height() {
      return this.$store.state.height + "px";
    },
    border() {
      return (
        this.$store.state.border +
        "px " +
        this.$store.state.borderstyle +
        " " +
        "rgba(" +
        this.$store.state.bordercolor.r +
        ", " +
        this.$store.state.bordercolor.g +
        ", " +
        this.$store.state.bordercolor.b +
        ", " +
        this.$store.state.bordercolor.a +
        ")"
      );
    },
    borderradius() {
      return this.$store.state.borderradius + "px";
    },
    bgrgba() {
      return (
        "rgba(" +
        this.$store.state.bgcolor.r +
        ", " +
        this.$store.state.bgcolor.g +
        ", " +
        this.$store.state.bgcolor.b +
        ", " +
        this.$store.state.bgcolor.a +
        ")"
      );
    },
    transform() {
      return (
        "translateX(" +
        this.$store.state.translateX +
        "px)" +
        "translateY(" +
        this.$store.state.translateY +
        "px)" +
        "scale(" +
        this.$store.state.scale +
        ")" +
        "rotateX(" +
        this.$store.state.rotateX +
        "deg)" +
        "rotateY(" +
        this.$store.state.rotateY +
        "deg)" +
        "rotateZ(" +
        this.$store.state.rotateZ +
        "deg)"
      );
    },
    shadow() {
      return (
        this.$store.state.shadowstyle +
        " " +
        this.$store.state.shadowX +
        "px " +
        this.$store.state.shadowY +
        "px " +
        this.$store.state.blur +
        "px " +
        this.$store.state.spread +
        "px " +
        "rgba(" +
        this.$store.state.shadowcolor.r +
        ", " +
        this.$store.state.shadowcolor.g +
        ", " +
        this.$store.state.shadowcolor.b +
        ", " +
        this.$store.state.shadowcolor.a +
        ")"
      );
    },
    margin() {
      return (
        this.$store.state.margin.top +
        "px " +
        this.$store.state.margin.right +
        "px " +
        this.$store.state.margin.bottom +
        "px " +
        this.$store.state.margin.left +
        "px"
      );
    }
  }
};
</script>

<style lang="scss">
.fadeAndSlide-enter,
.fadeAndSlide-leave-to {
  opacity: 0;
  transform: translateY(-200px);
}
.fadeAndSlide-enter-to,
.fadeAndSlide-leave {
  opacity: 1;
}
.fadeAndSlide-enter-active,
.fadeAndSlide-leave-active {
  transition: all 0.5s ease;
}
</style>
