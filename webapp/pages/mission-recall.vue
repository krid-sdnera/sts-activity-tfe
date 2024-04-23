<script setup lang="ts">
const store = useStore();
const router = useRouter();
</script>

<template>
  <LPage>
    <v-row>
      <v-col cols="8">
        <v-card tile :color="useLcarsColor()">
          <v-card-text>
            <h2>Mission Complete</h2>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card tile :color="useLcarsColor()">
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card tile :color="useLcarsColor()">
          <v-card-text>
            <h2>Recall Away team. Bring them home.</h2>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-card tile :color="useLcarsColor()">
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-card tile :color="useLcarsColor()">
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card tile :color="useLcarsColor()">
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-card tile :color="useLcarsColor()">
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </LPage>
</template>
