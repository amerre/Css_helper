<template>
  <div class="rules">
    <app-Sizing></app-Sizing>
    <app-Color></app-Color>
  </div>
</template>

<script>
import Sizing from "./rules/Sizing";
import Color from "./rules/Color";

export default {
  components: {
    appSizing: Sizing,
    appColor: Color
  }
};
</script>