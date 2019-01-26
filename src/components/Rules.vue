<template>
  <div class="rules">
    <app-Sizing></app-Sizing>
    <app-Color></app-Color>
    <app-transform></app-transform>
    <app-shadow></app-shadow>
    <app-spacing></app-spacing>
  </div>
</template>

<script>
import Sizing from "./rules/Sizing";
import Color from "./rules/Color";
import Transform from "./rules/Transform";
import Shadow from "./rules/Shadow";
import Spacing from "./rules/Spacing";

export default {
  components: {
    appSizing: Sizing,
    appColor: Color,
    appTransform: Transform,
    appShadow: Shadow,
    appSpacing: Spacing
  }
};
</script>