<template>
  <div class="current-page">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";

.current-page {
  height: 100%;
  width: 100%;
  color: white;
}
</style>
