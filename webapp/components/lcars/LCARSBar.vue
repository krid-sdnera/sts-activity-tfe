<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    colorScheme: number;
    align: "left" | "right";
  }>(),
  {
    width: 1,
    align: "left",
  }
);

const emit = defineEmits<{
  close: [];
}>();
</script>

<template>
  <div class="bar" :data-color-scheme="colorScheme" :data-align="align">
    <div class="bar-left"></div>
    <div class="bar-text">
      <span>
        <slot></slot>
      </span>
    </div>
    <div class="bar-right" @click="emit('close')">X</div>
  </div>
</template>

<style scoped>
/* TODO: Consolidate with small title styles */
.bar {
  position: relative;
  display: flex;
  flex-direction: row;
  height: var(--lcars-xs-title-size);
}

.bar-text {
  flex-grow: 1;
}

.bar[data-color-scheme="1"] .bar-text {
  background-color: var(--lcars-color-a2);
  color: var(--lcars-color-a5);
}

.bar[data-color-scheme="2"] .bar-text {
  background-color: var(--lcars-color-a6);
  color: var(--lcars-color-a8);
}

.bar[data-align="left"] .bar-text {
  text-align: left;
}

.bar[data-align="right"] .bar-text {
  text-align: right;
}

.bar-text span {
  /* make actual capital letter height match height of row with a multiplier */
  font-size: calc(var(--lcars-xs-title-size));
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  /* truncating a string with custom string is not supported in any browser except Firefox */
  text-overflow: "";
  /* alignment tweak; need to check other systems but works good on Mac */
  vertical-align: text-bottom;

  background-color: var(--lcars-color-black);
}

.bar[data-align="left"] .bar-text span {
  padding-right: var(--lcars-block-gap);
}

.bar[data-align="right"] .bar-text span {
  padding-left: var(--lcars-block-gap);
}

.bar-left {
  width: var(--lcars-xs-title-size);
  height: var(--lcars-xs-title-size);
  border-top-left-radius: 50%;
  border-bottom-left-radius: 50%;
  margin-right: var(--lcars-block-gap);
}

.bar-right {
  padding: 0 7px;
  width: var(--lcars-xs-title-size);
  height: var(--lcars-xs-title-size);
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  margin-left: var(--lcars-block-gap);
}

.bar[data-color-scheme="1"] .bar-left,
.bar[data-color-scheme="1"] .bar-right {
  background-color: var(--lcars-color-a3);
}

.bar[data-color-scheme="2"] .bar-left,
.bar[data-color-scheme="2"] .bar-right {
  background-color: var(--lcars-color-a7);
}
</style>
