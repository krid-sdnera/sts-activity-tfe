<script setup lang="ts"></script>

<template>
  <div class="current-page">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
// @import "~vuetify/src/styles/styles.sass";

.current-page {
  height: 100%;
  width: 100%;
  color: white;
  overflow-y: auto;
  overflow-x: clip;
}
</style>
