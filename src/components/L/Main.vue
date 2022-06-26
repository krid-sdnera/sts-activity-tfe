<template>
  <div class="main-content">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss">
@import "~vuetify/src/styles/styles.sass";

.main-content {
  grid-area: main-content;

  margin-left: 20px;
  margin-top: 20px;
}
</style>
