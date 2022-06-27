<template>
  <div
    :class="{
      'sidebar-top': location === 'top',
      'sidebar-bottom': location === 'bottom',
    }"
  >
    <div
      v-for="(item, i) in items"
      :key="i"
      :class="`bgcolor-${Math.floor(Math.random() * 9) + 1}`"
      class="sidebar-block"
    >
      <nuxt-link :to="item.to">{{ item.title }}</nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    location: String,
    items: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";

.sidebar-top,
.sidebar-bottom {
  user-select: none;
  font-size: 1.3rem;
}

.sidebar-top {
  background-color: var(--lcars-color-a6);
  border-bottom-left-radius: 72px 48px;
  position: relative;
  grid-area: sidebar-top;
  display: block;
}

.sidebar-top::after {
  content: " ";
  background-color: var(--lcars-color-black);
  position: absolute;
  top: 0;
  right: 0;
  width: 34px;
  height: calc(100% - var(--lcars-divider-top-height));
  border-bottom-left-radius: 32px 24px;
}

.sidebar-bottom {
  border-top-left-radius: 72px 48px;
  background-color: var(--lcars-color-a1);
  position: relative;
  grid-area: sidebar-bottom;
  display: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.sidebar-bottom::after {
  content: " ";
  background-color: var(--lcars-color-black);
  position: absolute;
  bottom: 0;
  right: 0;
  width: 34px;
  height: calc(100% - var(--lcars-divider-bottom-height));
  border-top-left-radius: 32px 24px;
}

.sidebar-block {
  text-align: right;
  padding: 10px 50px 2px 5px;
  display: flex;
  flex-direction: column;
  position: relative;
}

.sidebar-top .sidebar-block {
  border-bottom: var(--lcars-block-gap) solid var(--lcars-color-black);
  background-color: var(--lcars-color-a3);
  min-height: 62px;
  height: 60%;
  justify-content: flex-end;
}

.sidebar-top .sidebar-block:first-child:hover {
  background-color: var(--lcars-color-a2);
}

.sidebar-top .sidebar-block:last-child {
  background-color: transparent !important;
  border: 0;
  justify-content: flex-start;
}

.sidebar-bottom .sidebar-block {
  border-top: var(--lcars-block-gap) solid var(--lcars-color-black);
  min-height: 62px;
  height: 60%;
  justify-content: flex-start;
}

.sidebar-bottom .sidebar-block:first-child {
  background-color: transparent !important;
  border: 0;
  justify-content: flex-end;
}

.sidebar-block > a {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 10px 50px 2px 5px;
  text-decoration: none;
  color: inherit;
}
</style>
