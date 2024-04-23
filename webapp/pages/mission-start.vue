<script setup lang="ts">
useAccess().requireAccessCode();

import { DateTime, Duration, Interval } from "luxon";

function get_random<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

const store = useStore();
const router = useRouter();

const dialog = ref<boolean>(false);
const preReqSuit = ref<boolean>(false);
const preReqVisuals = ref<boolean>(false);
const preReqComs = ref<boolean>(false);
const preReqFunny = ref<boolean>(null);
const funnyReqs = [
  "Underwear on backwards or inside out",
  "Shirt on backwards",
];
const colorRand = Array(10)
  .fill(0)
  .map((_) => useLcarsColor());

watch(
  preReqSuit,
  () => {
    store.mutations.setUiShowVideo(preReqSuit.value);
  },
  { immediate: true }
);

const funnyText = computed(() => {
  return get_random(funnyReqs);
});
const missionReady = computed(() => {
  return (
    preReqSuit.value &&
    preReqVisuals.value &&
    preReqComs.value &&
    preReqFunny.value === false
  );
});

onMounted(() => {
  dialog.value = true;
});

async function startMission() {
  dialog.value = false;
  await store.actions.pickMission();
  router.push("/mission-list");
}
</script>

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
