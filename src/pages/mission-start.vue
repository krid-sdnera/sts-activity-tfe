<template>
  <LPage>
    <v-row>
      <v-col cols="12">
        <v-card tile>
          <v-card-title>
            <h2>Mission Details</h2>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card tile>
          <v-card-text class="text--primary">
            Our preliminary scans show that the atmosphere is currently
            incapable of supporting humanoid life. We must deploy an away team
            with environmental suits to the surface for further analysis.
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12">
        <v-card tile>
          <v-card-text>
            <v-checkbox
              v-model="preReqSuit"
              label="EV Suits equipped"
            ></v-checkbox>
            <v-checkbox
              v-model="preReqVisuals"
              label="Visual link operational"
            ></v-checkbox>
            <v-checkbox
              v-model="preReqComs"
              label="Comms chanel open"
            ></v-checkbox>
            <v-checkbox v-model="preReqFunny" :label="funnyText"></v-checkbox>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-btn
          block
          tile
          color="green"
          :disabled="!missionReady"
          to="/mission-details"
        >
          Start Mission
        </v-btn>
      </v-col>
    </v-row>
  </LPage>
</template>

<script lang="ts">
import { DateTime, Duration, Interval } from "luxon";

function get_random(list) {
  return list[Math.floor(Math.random() * list.length)];
}

export default {
  data() {
    return {
      preReqSuit: false,
      preReqVisuals: false,
      preReqComs: false,
      preReqFunny: null,
      funnyReqs: ["Underwear on backwards or inside out", "Shirt on backwards"],
    };
  },
  watch: {
    preReqSuit() {
      this.$store.dispatch("setUiShowVideo", this.preReqSuit);
    },
  },
  computed: {
    funnyText() {
      return get_random(this.funnyReqs);
    },
    missionReady() {
      return (
        this.preReqSuit &&
        this.preReqVisuals &&
        this.preReqComs &&
        this.preReqFunny === false
      );
    },
  },
  mounted() {},
  methods: {},
};
</script>
