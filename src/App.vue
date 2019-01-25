 <!--
      TODO: Ajouter une fonction pour copier dans le presse papier l'export
      TODO: Finir de designer l'app
      TODO: Ajouter les deux dernieres regles
      TODO: Upload le projet et le linker sur github
    -->
<template>
  <div id="app">
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";

export default {
  components: {
    appSidebar: Sidebar,
    appContent: Content
  }
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>

