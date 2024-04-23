<script setup lang="ts">
const props = defineProps<{
  title: string;
  sidebarTopMenu: any[];
  sidebarBottomMenu: any[];
  metaMenu: any[];
}>();
</script>

<template>
  <div class="lcars-container">
    <section class="lcars-type-01">
      <LHeader :title="props.title"></LHeader>
      <LSidebar location="top" :items="props.sidebarTopMenu"></LSidebar>
      <LSidebar location="bottom" :items="props.sidebarBottomMenu"></LSidebar>

      <div class="divider-top"></div>
      <div class="divider-bottom"></div>
      <LcarsDividerContent />

      <LMetaTable :items="props.metaMenu"></LMetaTable>

      <LMain>
        <slot></slot>
      </LMain>
    </section>
  </div>
</template>

<style lang="scss">
// @import "~vuetify/src/styles/styles.sass";

.lcars-container {
  height: 100vh;
  padding: 20px;
}

.lcars-type-01 {
  --header-content-area: calc(
    var(--lcars-top-section-height) - var(--lcars-title-size) -
      var(--lcars-divider-top-height)
  );

  display: grid;
  column-gap: 0;
  row-gap: var(--lcars-gap);
  height: 100%;

  grid-template-columns:
    [sidebar-start]
    var(--lcars-sidebar-width)
    [sidebar-end content-start]
    auto
    [content-end];
  grid-template-rows:
    [header-start]
    var(--lcars-title-size)
    var(--header-content-area)
    var(--lcars-divider-top-height)
    [header-end main-start]
    var(--lcars-divider-bottom-height)
    auto
    [main-end];
  grid-template-areas:
    "sidebar-top title"
    "sidebar-top meta-content"
    "sidebar-top divider"
    "sidebar-bottom divider"
    "sidebar-bottom main-content";
}

.divider-top {
  position: relative;
  grid-row: 3;
  grid-column: 2;
  background-color: var(--lcars-color-a6);
  /* background-color: var(--lcars-color-b5); */
  display: block;
}

.divider-bottom {
  position: relative;
  grid-row: 4;
  grid-column: 2;
  background-color: var(--lcars-color-a1);
  /* background-color: var(--lcars-color-b3); */
  display: block;
}
</style>
