<template>
  <div class="rules">
    <app-Sizing></app-Sizing>
    <app-Color></app-Color>
    <app-transform></app-transform>
  </div>
</template>

<script>
import Sizing from "./rules/Sizing";
import Color from "./rules/Color";
import Transform from "./rules/Transform";

export default {
  components: {
    appSizing: Sizing,
    appColor: Color,
    appTransform: Transform
  }
};
</script>