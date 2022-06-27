<template>
  <LPage>
    <LDialog
      v-model="dialog"
      name="mission-details"
      title="Mission Details"
      v-slot="props"
    >
      <v-row>
        <v-col cols="8">
          <v-card tile>
            <v-card-title>
              <h2>Mission Details</h2>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="8">
          <MissionMain></MissionMain>
        </v-col>
      </v-row>
    </LDialog>
  </LPage>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {},
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
