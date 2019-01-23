<template>
  <div class="rules">
    <!--
      TODO: Animer les entrées/sorties
      TODO: Designer l'app correctement
      TODO: Ajouter les deux dernieres regles
      TODO: Upload le projet et le linker sur github
    -->
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