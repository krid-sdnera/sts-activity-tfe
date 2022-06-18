<template>
  <v-app>
    <v-main>
      <app-status-bar></app-status-bar>

      <v-container>
        <Nuxt />
      </v-container>
    </v-main>

    <alerts></alerts>
  </v-app>
</template>

<script lang="ts">
import { EventStage } from "~/types";

export default {
  data() {
    return {
      drawer: false,
      items: [{ title: "Home", icon: "mdi-home", to: "/" }],
      monsterAcronymIndex: 0,
    };
  },
  mounted() {},
  computed: {},
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/styles.sass";
</style>
