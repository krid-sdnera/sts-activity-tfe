<template>
  <LPage>
    <v-row>
      <v-col cols="12">
        <v-card tile :color="$lcarsColour()">
          <v-card-title>
            <h2>Welcome to Starfleet</h2>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="8">
        <v-card tile :color="$lcarsColour()">
          <v-card-title>
            <h4>Assignment: Survey Mission in the Echo Star system</h4>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-btn block tile :color="$lcarsColour()" to="/mission">
          View mission details
        </v-btn>
      </v-col>

      <v-col cols="8">
        <v-card tile :color="$lcarsColour()">
          <v-card-title>
            <h4>
              Secondary Assignment: Monitor the life support systems of away
              team
            </h4>
          </v-card-title>
        </v-card>
      </v-col>

      <v-col cols="4">
        <v-btn block tile :color="$lcarsColour()" to="/life-support">
          Monitor Life Support
        </v-btn>
      </v-col>
    </v-row>
  </LPage>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
