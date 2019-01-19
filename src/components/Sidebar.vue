<template>
  <div class="sidebar">
    <!-- A mettre dans un component une fois terminé -->
    <!-- -->
    <div class="sidebox">
      <h2>Font-size : 32px</h2>
      <input type="range" min="0" max="50" data-sizing="px">
    </div>
    <!-- -->
  </div>
</template>

<style lang="scss">
.sidebox {
  border: 4px solid blue;
  min-height: 60px;
  h2 {
    font-size: 25px;
  }
}
</style>