<template>
  <LPage>
    <v-row>
      <v-col cols="8">
        <v-card tile :color="$lcarsColour()">
          <v-card-text>
            <h2>Mission Complete</h2>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card tile :color="$lcarsColour()">
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card tile :color="$lcarsColour()">
          <v-card-text>
            <h2>Recall Away team. Bring them home.</h2>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-card tile :color="$lcarsColour()">
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-card tile :color="$lcarsColour()">
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card tile :color="$lcarsColour()">
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-card tile :color="$lcarsColour()">
          <v-card-text> </v-card-text>
        </v-card>
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
