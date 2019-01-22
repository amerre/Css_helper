<template>
  <div id="app">
    <app-sidebar></app-sidebar>
    <app-content></app-content>
    <app-credits></app-credits>
  </div>
</template>

<script>
import Sidebar from "./components/Sidebar.vue";
import Content from "./components/Content.vue";
import Credits from "./components/Credits.vue";

export default {
  components: {
    appSidebar: Sidebar,
    appContent: Content,
    appCredits: Credits
  }
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>

