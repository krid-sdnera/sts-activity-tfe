<template>
  <div class="lcars-title" :data-type="titleType">
    {{ title }}
    <span @click="enterFullscreen()">[]</span>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    titleType: { type: Number, default: Math.ceil(Math.random() * 2) },
  },
  methods: {
    enterFullscreen() {
      if (document.fullscreenEnabled) {
        if (!document.fullscreenElement) {
          document.documentElement
            .requestFullscreen()
            .then(() => {
              this.$sounds().panelBeep13.play();
            })
            .catch((err) => {
              this.$sounds().deny();
            });
        } else {
          document.exitFullscreen();
          this.$sounds().panelBeep08.play();
        }
      }
    },
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
