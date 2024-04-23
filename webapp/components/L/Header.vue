<script setup lang="ts">
const { sounds } = useSounds();

const props = withDefaults(
  defineProps<{
    title: string;
    titleType?: number;
  }>(),
  { titleType: Math.ceil(Math.random() * 2) }
);

function enterFullscreen() {
  if (document.fullscreenEnabled) {
    if (!document.fullscreenElement) {
      document.documentElement
        .requestFullscreen()
        .then(() => {
          sounds.panelBeep13.play();
        })
        .catch((err) => {
          sounds.deny();
        });
    } else {
      document.exitFullscreen();
      sounds.panelBeep08.play();
    }
  }
}
</script>

<template>
  <div class="lcars-title" :data-type="props.titleType">
    {{ props.title }}
    <span @click="enterFullscreen()">[]</span>
  </div>
</template>

<style lang="scss" scoped>
// @import "~vuetify/src/styles/styles.sass";

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
