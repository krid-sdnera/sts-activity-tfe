<template>
  <div class="screen XS SM MD">
    <section class="lcars-type-01">
      <div class="lcars-title large" :data-type="titleType">
        <span class="short-title">{{ title }}</span>
        <span class="long-title">{{ longTitle }}</span>
      </div>
      <div class="sidebar-top">
        <div class="sidebar-block">
          {{ displayLcarsLabel ? lcarsLabel : numbers[0] }}
        </div>
        <div class="sidebar-block">{{ numbers[1] }}</div>
      </div>
      <div class="sidebar-bottom">
        <div class="sidebar-block">{{ numbers[2] }}</div>
        <div class="sidebar-block bgcolor-2">{{ numbers[3] }}</div>
        <div class="sidebar-block bgcolor-6">{{ numbers[4] }}</div>
        <div class="sidebar-block bgcolor-3">
          <router-link to="/transmission">{{ numbers[5] }}</router-link>
        </div>
      </div>
      <div class="divider-top"></div>
      <div class="divider-bottom"></div>
      <!-- Can switch between divider types 1 and 2 -->
      <LcarsDividerContent />
      <div class="meta-content">
        <div class="numbers-area">
          <client-only>
            <LcarsNumbersTable :color-scheme="colorScheme" />
          </client-only>
        </div>
        <div class="buttons-area">
          <LcarsLCARSButton />
          <LcarsLCARSButton :blank="true" />
          <LcarsLCARSButton :blank="true" :color="3" />
          <LcarsLCARSButton :blank="true" />
          <LcarsLCARSButton :blank="true" />
          <LcarsLCARSButton :blank="true" />
        </div>
      </div>
      <div class="main-content">
        <!-- <LcarsStarChart :type="starChartType" /> -->
      </div>
      <footer>
        <LcarsLCARSBar align="right" :color-scheme="titleType">
          {{ displayLcarsLabel ? lcarsLabel : "" }}
        </LcarsLCARSBar>
      </footer>
    </section>

    <v-main>
      <app-status-bar></app-status-bar>

      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <alerts></alerts>
  </div>
</template>

<script lang="ts">
import { EventStage } from "~/types";
import { makeRandomNumber, makeRandomLetters } from "~/common/utils";
import { initSounds } from "~/common/utils/sounds";

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
  data() {
    const sidebarLabelType = Math.ceil(Math.random() * 5);

    return {
      drawer: false,
      items: [  { title: "Home", icon: "mdi-home", to: "/" }],
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

.lcars-type-01 {
  --header-content-area: calc(
    var(--lcars-top-section-height) - var(--lcars-title-size) -
      var(--lcars-divider-top-height)
  );

  display: grid;
  column-gap: 0;
  row-gap: var(--lcars-gap);
  height: 100%;
}

.screen.XS > .lcars-type-01 {
  /* small (mobile/PADD) layout */
  grid-template-columns:
    [content-start]
    1fr
    [content-end];
  grid-template-rows:
    [header-start]
    var(--lcars-xs-title-size)
    [header-end main-start]
    auto
    [main-end footer-start]
    var(--lcars-xs-title-size)
    [footer-end];
  grid-template-areas:
    "title"
    "main-content"
    "footer";
}

.screen.SM > .lcars-type-01 {
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

.lcars-title {
  color: var(--lcars-color-a5);
  /* make actual capital letter height match height of row with a multiplier */
  font-size: calc(var(--lcars-xs-title-size) * 1.36);
  line-height: 1;
  text-transform: uppercase;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  /* truncating a string with custom string is not supported in any browser except Firefox */
  text-overflow: "";
}

.lcars-title.large,
.lcars-title.large > .long-title {
  display: none;
}

.screen.SM .lcars-title.small {
  display: none;
}

.screen.SM .lcars-title.large,
.screen.SM .lcars-title.large > .short-title {
  display: block;
}

.screen.MD .lcars-title.large > .short-title {
  display: none;
}

.screen.MD .lcars-title.large > .long-title {
  display: block;
}

.screen.SM .lcars-title {
  font-size: calc(var(--lcars-sm-title-size) * 1.25);
}

.screen.MD .lcars-title {
  /* make actual capital letter height match height of row with a multiplier */
  font-size: calc(var(--lcars-title-size) * 1.25);
}

.lcars-title[data-type="2"] {
  color: var(--lcars-color-a8);
}

.sidebar-top {
  background-color: var(--lcars-color-a6);
  /* background-color: var(--lcars-color-b5); */
  border-bottom-left-radius: 72px 48px;
  position: relative;
  grid-area: sidebar-top;
  display: none;
}

.screen.SM .sidebar-top {
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
  /* background-color: var(--lcars-color-b3); */
  position: relative;
  grid-area: sidebar-bottom;
  display: none;
}

.screen.SM .sidebar-bottom {
  /* Align all blocks to bottom of bar */
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
  background-color: transparent;
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

.divider-top {
  position: relative;
  grid-row: 3;
  grid-column: 2;
  background-color: var(--lcars-color-a6);
  /* background-color: var(--lcars-color-b5); */
  display: none;
}

.divider-bottom {
  position: relative;
  grid-row: 4;
  grid-column: 2;
  background-color: var(--lcars-color-a1);
  /* background-color: var(--lcars-color-b3); */
  display: none;
}

.screen.SM .divider-top,
.screen.SM .divider-bottom {
  display: block;
}

.screen.SM .divider-grid {
  display: grid;
}

.bgcolor-1 {
  background-color: var(--lcars-color-a1) !important;
}
.bgcolor-2 {
  background-color: var(--lcars-color-a2) !important;
}
.bgcolor-3 {
  background-color: var(--lcars-color-a3) !important;
}
.bgcolor-4 {
  background-color: var(--lcars-color-a4) !important;
}
.bgcolor-5 {
  background-color: var(--lcars-color-a5) !important;
}
.bgcolor-6 {
  background-color: var(--lcars-color-a6) !important;
}
.bgcolor-7 {
  background-color: var(--lcars-color-a7) !important;
}
.bgcolor-8 {
  background-color: var(--lcars-color-a8) !important;
}
.bgcolor-9 {
  background-color: var(--lcars-color-a9) !important;
}

.meta-content {
  grid-area: meta-content;
  flex-direction: row;
  margin-left: 20px;
  margin-bottom: 5px;
  display: none;
}

.screen.SM .meta-content {
  display: flex;
}

.numbers-area {
  flex-grow: 1;
}

.numbers-area table {
  width: 100%;
}

.buttons-area {
  display: none;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: var(--lcars-block-gap);
  column-gap: var(--lcars-gap);
  justify-content: right;
  justify-items: right;
  align-content: flex-end;
  grid-auto-flow: column;
  margin-left: 20px;
}

.screen.MD .buttons-area {
  display: grid;
}

.screen.LG .buttons-area {
  margin-left: 40px;
}

.buttons-area > :nth-child(5),
.buttons-area > :nth-child(6) {
  display: none;
}

.screen.XL .buttons-area > :nth-child(5),
.screen.XL .buttons-area > :nth-child(6) {
  display: inherit;
}

.main-content {
  grid-area: main-content;
}

.screen.SM .main-content {
  margin-left: 20px;
  margin-top: 20px;
}

.screen.SM footer {
  display: none;
}

/* hack */
.screen.XS:not(.SM) .label-text {
  line-height: 47px;
}
</style>
