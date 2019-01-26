<template>
  <div class="exportContent">div {
    <p>width: {{ width }} px;</p>
    <p>height: {{ height }} px;</p>
    <p v-if="borderopacity != 0">border: {{ border }}px {{ borderstyle }} {{ borderrgba }};</p>
    <p v-if="borderradius != 0">border-radius: {{ borderradius }}px;</p>
    <p v-if="bgrgba != 'rgba(0, 0, 0, 0)'">background-color: {{ bgrgba }};</p>
    <p v-if="opacity != 1">opacity: {{ opacity }};</p>
    <p v-if="translateX != 0">transform: translateX({{ translateX }}px);</p>
    <p v-if="translateY != 0">transform: translateY({{ translateY }}px);</p>
    <p v-if="scale != 1">transform: scale({{ scale }});</p>
    <p v-if="rotateX != 0">transform: rotateX({{ rotateX }}px);</p>
    <p v-if="rotateY != 0">transform: rotateY({{ rotateY }}px);</p>
    <p v-if="rotateZ != 0">transform: rotateZ({{ rotateZ }}px);</p>
    <p v-if="shadowopacity != 0">box-shadow: {{ shadow }}</p>}
  </div>
</template>

<script>
export default {
  props: {
    width: [String, Number],
    height: [String, Number],
    border: [String, Number],
    borderradius: [String, Number],
    borderstyle: [String, Number],
    borderrgba: [String, Number],
    borderopacity: [String, Number],
    bgrgba: [String, Number],
    opacity: [String, Number],
    translateX: [String, Number],
    translateY: [String, Number],
    scale: [String, Number],
    rotateY: [String, Number],
    rotateX: [String, Number],
    rotateZ: [String, Number],
    shadow: [String, Number],
    shadowopacity: [String, Number]
  }
};
</script>