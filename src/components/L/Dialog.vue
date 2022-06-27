<template>
  <v-dialog v-model="dialog" overlay-color="black" :overlay-opacity="1">
    <div class="dialog-container">
      <div>
        <LcarsLCARSBar align="left" :color-scheme="colorScheme">
          {{ title }}
        </LcarsLCARSBar>

        <div class="content-wrapper">
          <slot :close="close"></slot>
        </div>

        <LcarsLCARSBar align="right" :color-scheme="colorScheme">
          footer
        </LcarsLCARSBar>
      </div>
    </div>
  </v-dialog>
</template>

<script lang="ts">
export default {
  props: {
    title: String,
    value: Boolean,
  },
  data() {
    return {
      dialog: false,
      colorScheme: Math.random() > 0.75 ? 2 : 1,
    };
  },
  mounted() {
    this.dialog = this.value;
  },
  watch: {
    value() {
      this.dialog = this.value;
    },
    dialog() {
      this.$emit("input", this.dialog);
    },
  },
  methods: {
    close() {
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";

.dialog-container {
  overflow-y: hidden;
}
.content-wrapper {
  height: 77vh;
  overflow-y: auto;
  padding: 20px 30px;
}
</style>
