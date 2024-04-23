<script setup lang="ts">
const store = useStore();
const router = useRouter();

const missions = store.getters.missions;
</script>

<template>
  <LPage>
    <v-row
      v-for="(mission, index) in missions"
      :key="mission.name"
      :align="index % 2 ? 'end' : 'start'"
    >
      <v-col cols="8">
        <v-card tile :color="useLcarsColor()">
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
          :color="useLcarsColor()"
        >
          Check details
        </v-btn>
      </v-col>
    </v-row>
  </LPage>
</template>
