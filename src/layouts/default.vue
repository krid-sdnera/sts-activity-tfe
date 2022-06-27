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
          <v-container fill-height fluid>
            <v-row>
              <v-col cols="8">
                <Nuxt />
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

<script lang="ts">
import { makeRandomNumber, makeRandomLetters } from "~/common/utils";
import { initSounds } from "~/common/utils/sounds";
import jitsi from "~/components/jitsi.vue";

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

function makeLabels(type) {
  switch (type) {
    case 1:
      return makeRandomNumber(6);
    case 2:
      return `${makeRandomNumber(2)}-${makeRandomNumber(7)}-${makeRandomNumber(
        2
      )}`;
    case 3:
      return `${makeRandomLetters(3)} ${makeRandomNumber(4, false, 3)}`;
    case 4:
      return `${makeRandomNumber(2)}-${makeRandomNumber(6)}`;
    default: {
      const rand = Math.ceil(Math.random() * 4);
      return makeLabels(rand);
    }
  }
}

function makeLCARSLabel() {
  return `LCARS ${makeRandomNumber(5)}`;
}

export default {
  components: { jitsi },
  data() {
    return {
      drawer: false,

      lcarsLabel: makeLCARSLabel(),
    };
  },
  mounted() {
    initSounds();
  },
  computed: {
    accessCode() {
      return this.$store.getters.accessCode;
    },

    sidebarTopMenu() {
      const items = [];
      if (!this.accessCode) {
        items.push({ title: makeLCARSLabel(), to: "#" });
        items.push({ title: makeLabels(), to: "#" });
      } else {
        items.push({ title: makeLCARSLabel(), to: "#" });
        items.push({ title: `Restrict Access ${makeLabels(1)}`, to: "/" });
      }

      return items;
    },
    sidebarBottomMenu() {
      const items = [];
      if (!this.accessCode) {
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
    },
    metaMenu() {
      const items = [];
      if (!this.accessCode) {
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
    },
  },
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/styles.sass";
#app {
  background-color: var(--lcars-colors-black);
  height: 100%;

  > .v-application--wrap {
    min-height: unset;
    height: 100%;
  }
}
</style>
