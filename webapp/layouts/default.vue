<script setup lang="ts">
/**
 * Makes labels for LCARS UI.
 * Types:
 *  1. 6 random digits
 *  2. 2 digits - 7 digits - 2 digits (note: verify length of middle section)
 *  3. three letters + up to 4 numbers
 *
 * if `type` is not provided, pick one at random.
 *
 * @param {Number} type of label to make
 * @returns {String}
 */

function makeLabels(type?: number) {
  switch (type) {
    case 1:
      return useRandom().numbers(6);
    case 2:
      return `${useRandom().numbers(2)}-${useRandom().numbers(
        7
      )}-${useRandom().numbers(2)}`;
    case 3:
      return `${useRandom().letters(3)} ${useRandom().numbers(4, false, 3)}`;
    case 4:
      return `${useRandom().numbers(2)}-${useRandom().numbers(6)}`;
    default: {
      const rand = Math.ceil(Math.random() * 4);
      return makeLabels(rand);
    }
  }
}

function makeLCARSLabel() {
  return `LCARS ${useRandom().numbers(5)}`;
}

const { sounds } = useSounds();
const store = useStore();
const accessCode = store.getters.accessCode;

const lcarsLabel = computed(() => {
  if (!accessCode.value) {
    return makeLCARSLabel();
  } else {
    return `${makeLCARSLabel()} Terra Firma Explora`;
  }
});
const sidebarTopMenu = computed(() => {
  const items = [];
  if (!accessCode.value) {
    items.push({ title: makeLCARSLabel(), to: "/" });
    items.push({ title: makeLabels(), to: "#" });
  } else {
    items.push({ title: makeLCARSLabel(), to: "#" });
    items.push({ title: `Restrict Access ${makeLabels(1)}`, to: "/" });
  }

  return items;
});

const sidebarBottomMenu = computed(() => {
  const items = [];
  if (!accessCode.value) {
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
  } else {
    items.push({
      title: `Mission Details ${makeLabels()}`,
      to: "/dashboard",
    });
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
    items.push({
      title: `Away Team Vitals ${makeLabels()}`,
      to: "/life-support",
    });
    items.push({ title: makeLabels(), to: "#" });
  }

  return items;
});

const metaMenu = computed(() => {
  const items = [];
  if (!accessCode.value) {
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
  } else {
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
    items.push({ title: makeLabels(), to: "#" });
  }

  return items;
});
</script>

<template>
  <div>
    <LContainer
      :title="lcarsLabel"
      :sidebarTopMenu="sidebarTopMenu"
      :sidebarBottomMenu="sidebarBottomMenu"
      :metaMenu="metaMenu"
    >
      <v-app>
        <v-main>
          <v-container fluid class="fill-height">
            <v-row class="fill-height">
              <v-col cols="8">
                <slot />
              </v-col>
              <v-col cols="4">
                <jitsi></jitsi>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
        <alerts></alerts>
      </v-app>
    </LContainer>
  </div>
</template>

<style lang="scss">
// @import "~vuetify/src/styles/styles.sass";
#app {
  background-color: var(--lcars-colors-black);
  height: 100%;

  > .v-application--wrap {
    min-height: unset;
    height: 100%;
  }
  .v-main {
    height: 100%;
  }
}

.container > .row,
.container > .row > .col {
  height: 100%;
}
</style>
