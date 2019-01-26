<template>
  <div>
    <div id="app">
      <app-sidebar></app-sidebar>
      <app-content></app-content>
    </div>
    <div id="tooSmall">
      <h1>💻📲
        <br>Sorry, responsive isn't configured yet. I'm working on it, come back later !
      </h1>
    </div>
  </div>
</template>

<script>
import Sidebar from "./components/sidebar/Sidebar.vue";
import Content from "./components/content/Content.vue";

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

