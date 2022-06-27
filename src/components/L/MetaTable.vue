<template>
  <div class="meta-content">
    <div class="numbers-area">
      <client-only>
        <LcarsNumbersTable :color-scheme="colorScheme" />
      </client-only>
    </div>
    <div class="buttons-area">
      <LcarsLCARSButton
        v-for="(item, i) in items"
        :key="i"
        :color="item.colour"
        :label="item.title"
        @click="$router.push({ to: item.to })"
      />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    items: Array,
    colorScheme: { type: Number, default: Math.random() > 0.75 ? 2 : 1 },
  },
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/styles.sass";
.meta-content {
  user-select: none;
  grid-area: meta-content;
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 5px;
  display: flex;
}

.numbers-area {
  flex-grow: 1;
}

.numbers-area table {
  width: 100%;
}

.buttons-area {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: var(--lcars-block-gap);
  column-gap: var(--lcars-gap);
  justify-content: right;
  justify-items: right;
  align-content: flex-end;
  grid-auto-flow: column;
  margin-left: 20px;
  margin-left: 40px;
}
</style>
