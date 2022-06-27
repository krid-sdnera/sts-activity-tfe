<template>
  <div class="lcars-title" :data-type="titleType">
    {{ title }}
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    titleType: { type: Number, default: Math.ceil(Math.random() * 2) },
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";

.lcars-title {
  display: block;
  color: var(--lcars-color-a5);
  font-size: var(--lcars-title-size);
  line-height: 1;
  text-transform: uppercase;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  /* truncating a string with custom string is not supported in any browser except Firefox */
  text-overflow: "";
  user-select: none;
}

.lcars-title[data-type="2"] {
  color: var(--lcars-color-a8);
}
</style>
