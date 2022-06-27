<template>
  <LPage>
    <v-row
      v-for="(mission, index) in missions"
      :key="mission.name"
      :align="index % 2 ? 'row-reverse' : ''"
    >
      <v-col cols="8">
        <v-card tile :color="$lcarsColour()">
          <v-card-text>
            <h2>{{ mission.name }}</h2>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-btn
          block
          tile
          :to="`/missions/${mission.name}`"
          :color="$lcarsColour()"
        >
          Check details
        </v-btn>
      </v-col>
    </v-row>
  </LPage>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    missions() {
      const mission = this.$store.getters.mission;

      if (!mission) {
        return [];
      }
      return [mission];
    },
  },
  watch: {
    dialog() {
      if (this.dialog) {
        // opening dialog, ignore
        return;
      }

      // if () {
      //   this.$router.push("/");
      // }
    },
  },
  mounted() {
    this.dialog = true;
  },
  methods: {
    closeMission() {
      this.dialog = false;
      this.$router.push("/dashboard");
    },
  },
};
</script>
