<template>
  <div class="rules">
    <app-Sizing></app-Sizing>
    <app-Color></app-Color>
    <app-transform></app-transform>
    <app-shadow></app-shadow>
  </div>
</template>

<script>
import Sizing from "./rules/Sizing";
import Color from "./rules/Color";
import Transform from "./rules/Transform";
import Shadow from "./rules/Shadow";

export default {
  components: {
    appSizing: Sizing,
    appColor: Color,
    appTransform: Transform,
    appShadow: Shadow
  }
};
</script>