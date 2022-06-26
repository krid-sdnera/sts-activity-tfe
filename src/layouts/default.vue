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
      </v-app>
    </LContainer>

    <alerts></alerts>
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
    const sidebarLabelType = Math.ceil(Math.random() * 5);

    return {
      drawer: false,
      sidebarTopMenu: [
        { title: "LCARS 09943", to: "/" },
        { title: "23452", to: "/" },
      ],
      sidebarBottomMenu: [
        { title: "Home", to: "/" },
        { title: "Star Map", to: "/" },
        {
          title: "GEN STORY",
          to: "/generate-story",
        },
        {
          title: "Wiring",
          to: "/minigames/amongus-wiring",
        },
      ],
      metaMenu: [
        { title: "98765", to: "/" },
        { title: "23452", to: "/" },
        { title: "5486", to: "/" },
        { title: "457689", to: "/" },
      ],
      monsterAcronymIndex: 0,
      title: "Title",
      longTitle: "Long titile",
      titleType: Math.ceil(Math.random() * 2),
      lcarsLabel: makeLCARSLabel(),
      numbers: new Array(6).fill(0).map(function (item, index) {
        return makeLabels(sidebarLabelType);
      }),
      colorScheme: Math.random() > 0.75 ? 2 : 1,
      starChartType: Math.random() > 0.5 ? "nav" : "planet",
    };
  },
  mounted() {
    initSounds();
  },
  computed: {
    displayLcarsLabel() {
      if (Math.random() > 0.35) {
        return true;
      }

      return false;
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
