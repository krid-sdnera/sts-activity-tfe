<script setup lang="ts">
const store = useStore();
const router = useRouter();

const dialog = ref(true);
const missionStarted = store.getters.missionStarted;

watch(dialog, () => {
  if (dialog.value === false) {
    router.push("/mission-list");
  }
});

onMounted(() => {
  if (!missionStarted.value) {
    router.push("/mission-start");
  }
});
</script>

<template>
  <LPage>
    <LDialog
      v-model="dialog"
      name="mission-the-beach"
      title="Mission Details"
      v-slot="props"
    >
      <v-row>
        <v-col cols="8">
          <v-card tile :color="useLcarsColor()">
            <v-card-title>
              <h2>Mission Details</h2>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="8">
          <MissionTheBeach></MissionTheBeach>
        </v-col>
      </v-row>
    </LDialog>
  </LPage>
</template>
