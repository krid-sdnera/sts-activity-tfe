<template>
  <LPage>
    <LDialog
      v-model="dialog"
      name="mission-the-mountain"
      title="Mission Details"
      v-slot="props"
    >
      <v-row>
        <v-col cols="8">
          <v-card tile :color="$lcarsColour()">
            <v-card-title>
              <h2>Mission Details</h2>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="8">
          <MissionTheMountain></MissionTheMountain>
        </v-col>
      </v-row>
    </LDialog>
  </LPage>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dialog: true,
    };
  },
  computed: {
    missionStarted() {
      return this.$store.getters.missionStarted;
    },
  },
  watch: {
    dialog() {
      if (this.dialog) {
        // opening dialog, ignore
        return;
      }

      this.$router.push("/mission-list");
    },
  },
  mounted() {
    if (!this.missionStarted) {
      this.$router.push("/mission-start");
    }
  },
  methods: {},
};
</script>
