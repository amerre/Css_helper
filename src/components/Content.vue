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
        border: border + 'px ' + borderstyle + ' ' + borderrgba,
        borderRadius: borderradius + 'px',
        backgroundColor: bgrgba,
        opacity: opacity,
        transform:
        'translateX(' + translateX + 'px)' +
        'translateY(' + translateY + 'px)' +
        'scale(' + scale + ')' +
        'rotateX(' + rotateX + 'deg)' +
        'rotateY(' + rotateY + 'deg)' +
        'rotateZ(' + rotateZ + 'deg)',
        boxShadow: shadow
        }"
    ></div>
    <div id="footer">
      <button id="addABox" @click="boxes++">
        <h1>Add a box</h1>
      </button>
      <button @click="show = !show">
        <h1 v-if="!show">Export CSS</h1>
        <h1 v-if="show">Close export</h1>
      </button>
    </div>
    <transition name="fadeAndSlide" mode="out-in">
      <app-export
        v-if="show"
        :width="width"
        :height="height"
        :border="border"
        :borderradius="borderradius"
        :borderstyle="borderstyle"
        :borderrgba="borderrgba"
        :bgrgba="bgrgba"
        :borderopacity="this.$store.state.bordercolor.a"
        :opacity="opacity"
        :translateX="translateX"
        :translateY="translateY"
        :scale="scale"
        :rotateX="rotateX"
        :rotateY="rotateY"
        :rotateZ="rotateZ"
        :shadowopacity="this.$store.state.shadowcolor.a"
        :shadow="shadow"
      ></app-export>
    </transition>
  </div>
</template>

<script>
import Export from "./Export.vue";

export default {
  data() {
    return {
      show: false
    };
  },
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
    borderrgba() {
      return (
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
    },
    // TODO:
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
    }
  }
};
</script>

<style lang="scss">
.fadeAndSlide-enter {
  opacity: 0;
  transform: translateX(-200px);
}
.fadeAndSlide-enter-to {
  opacity: 1;
}

.fadeAndSlide-leave {
  opacity: 1;
}
.fadeAndSlide-leave-to {
  opacity: 0;
  transform: translateY(200px);
}
.fadeAndSlide-enter-active,
.fadeAndSlide-leave-active {
  transition: all 0.7s ease;
}
</style>