<template>
  <LPage>
    <LDialog
      v-model="dialog"
      name="mission-start"
      title="Mission Details"
      v-slot="props"
    >
      <v-row>
        <v-col cols="8">
          <v-card tile :color="colorRand[0]">
            <v-card-title>
              <h2>Mission Details</h2>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card tile :color="colorRand[1]">
            <v-card-text class="text--primary">
              Our preliminary scans show that the atmosphere is currently
              incapable of supporting humanoid life. We must deploy an away team
              with environmental suits to the surface for further analysis.
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="8">
          <v-card tile :color="colorRand[2]">
            <v-card-text>
              <v-checkbox
                v-model="preReqSuit"
                label="EV Suits equipped"
                dense
              ></v-checkbox>
              <v-checkbox
                v-model="preReqVisuals"
                label="Visual link operational"
                dense
              ></v-checkbox>
              <v-checkbox
                v-model="preReqComs"
                label="Comms chanel open"
                dense
              ></v-checkbox>
              <v-checkbox
                v-model="preReqFunny"
                :label="funnyText"
                dense
              ></v-checkbox>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-btn
            block
            tile
            color="green"
            :disabled="!missionReady"
            :color="colorRand[3]"
            @click="startMission()"
          >
            Start Mission
          </v-btn>
        </v-col>
      </v-row>
    </LDialog>
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
      dialog: false,
      preReqSuit: false,
      preReqVisuals: false,
      preReqComs: false,
      preReqFunny: null,
      funnyReqs: ["Underwear on backwards or inside out", "Shirt on backwards"],
      colorRand: Array(10)
        .fill(0)
        .map((_) => this.$lcarsColour()),
    };
  },
  watch: {
    dialog() {
      if (this.dialog) {
        // opening dialog, ignore
        return;
      }

      if (!this.missionReady) {
        this.$router.push("/dashboard");
      }
    },
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
  mounted() {
    this.dialog = true;
  },
  methods: {
    async startMission() {
      this.dialog = false;
      await this.$store.dispatch("pickMission");
      this.$router.push("/mission-list");
    },
  },
};
</script>
