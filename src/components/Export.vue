<template>
  <div class="export" @click="show = !show">
    <button class="exportBtn">Export CSS</button>
    <div class="exportContent" v-if="show">.
      box {
      <div>
        width: {{ width }} px;
      </div>
      <div>
        height: {{ height }} px;
      </div>
      <div v-if="border != 0">
        border: {{ border }}px {{ borderstyle }} {{ borderrgb }};
      </div>
      <div v-if="borderradius != 0">
        border-radius: {{ borderradius }}px;
      </div>
      <div v-if="bgrgb != 'rgb(0, 0, 0)'">
        background-color: {{ bgrgb }};
      </div>
      <div v-if="opacity != 1">
        opacity: {{ opacity }};
      </div>
      <div v-if="translateX != 0">
        transform: translateX({{ translateX }}px);
      </div>
      <div v-if="translateY != 0">
        transform: translateY({{ translateY }}px);
      </div>
      <div v-if="scale != 1">
        transform: scale({{ scale }});
      </div>
      <div v-if="rotateX != 0">
        transform: rotateX({{ rotateX }}px);
      </div>
      <div v-if="rotateY != 0">
        transform: rotateY({{ rotateY }}px);
      </div>
      <div v-if="rotateZ != 0">
        transform: rotateZ({{ rotateZ }}px);
      </div>
      }
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
  props: {
    width: String,
    height: String,
    border: String,
    borderradius: String,
    borderstyle: String,
    borderrgb: String,
    bgrgb: String,
    opacity: String,
    translateX: String,
    translateY: String,
    scale: String,
    rotateY: String,
    rotateX: String,
    rotateZ: String
  }
};
</script>