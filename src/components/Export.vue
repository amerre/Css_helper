<template>
  <div class="exportContent">div {
    <p>width: {{ width }} px;</p>
    <p>height: {{ height }} px;</p>
    <p v-if="border != 0">border: {{ border }}px {{ borderstyle }} {{ borderrgb }};</p>
    <p v-if="borderradius != 0">border-radius: {{ borderradius }}px;</p>
    <p v-if="bgrgb != 'rgb(0, 0, 0)'">background-color: {{ bgrgb }};</p>
    <p v-if="opacity != 1">opacity: {{ opacity }};</p>
    <p v-if="translateX != 0">transform: translateX({{ translateX }}px);</p>
    <p v-if="translateY != 0">transform: translateY({{ translateY }}px);</p>
    <p v-if="scale != 1">transform: scale({{ scale }});</p>
    <p v-if="rotateX != 0">transform: rotateX({{ rotateX }}px);</p>
    <p v-if="rotateY != 0">transform: rotateY({{ rotateY }}px);</p>
    <p v-if="rotateZ != 0">transform: rotateZ({{ rotateZ }}px);</p>}
  </div>
</template>

<script>
export default {
  props: {
    width: Number,
    height: Number,
    border: Number,
    borderradius: Number,
    borderstyle: String,
    borderrgb: String,
    bgrgb: String,
    opacity: Number,
    translateX: Number,
    translateY: Number,
    scale: Number,
    rotateY: Number,
    rotateX: Number,
    rotateZ: Number
  }
};
</script>