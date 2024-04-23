<script setup lang="ts">
const { sounds } = useSounds();
const router = useRouter();

const i = ref<number>(0);
const colorRand = ref<number>(
  Array(10)
    .fill(0)
    .map((_) => useLcarsColor())
);
const interval = ref<NodeJS.Timeout | null>(null);
const phValue = ref<number>(null);
const loadingNextMessage = ref<number>(false);

onMounted(() => {
  clearInterval(interval.value);
  interval.value = setInterval(() => {
    this.increment();
  }, 5000);
});
onBeforeUnmount(() => {
  clearInterval(interval.value);
});

async function increment() {
  loadingNextMessage.value = true;
  await new Promise((r) => setTimeout(r, 3000));
  loadingNextMessage.value = false;

  i.value = i.value + 1;
  sounds.playRandom();
}
function storeMission() {
  sounds().playRandom();
  router.push("/mission-recall");
}
</script>

<template>
  <v-row>
    <v-col cols="12" v-if="i >= 0">
      <v-card :color="colorRand[0]" tile>
        <v-card-text>
          Incoming transmission from The Federation Science Council
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="i >= 1">
      <v-card :color="colorRand[1]" tile>
        <v-card-text>
          Carbon based life is no longer viable on this planet.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="i >= 2">
      <v-card :color="colorRand[2]" tile>
        <v-card-text>
          The Council suspects that was not always the case.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="i >= 3">
      <v-card :color="colorRand[3]" tile>
        <v-card-text> Samples must be collected. </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="i >= 4">
      <v-card :color="colorRand[4]" tile>
        <v-card-text>
          <h3>Background:</h3>

          The acidity of a soil sample tells us a lot about the type of
          environment the soil is formed in and the types of living organisms
          that might be able to live there. Soils with a pH between 6-8 will be
          best for supporting carbon and nitrogen based plant and aquatic life.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="i >= 5">
      <v-card :color="colorRand[5]" tile>
        <v-card-text>
          <h3>Instructions:</h3>

          We need to collect soil samples from the beach and determine their pH.

          <v-list :color="colorRand[5]">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-1-box</v-icon>
              </template>

              <v-list-item-title>
                Collect soil samples of two different types of soil from around
                the beach area. Try for a sandy soil and a clay based soil. You
                only need enough to fill a quarter of your vial.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-2-box</v-icon>
              </template>

              <v-list-item-title>
                Add a spatula of your soil sample to a test tube and mix with an
                equal volume of distilled water. You will need to shake the test
                tube thoroughly to make sure it is mixed.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-3-box</v-icon>
              </template>

              <v-list-item-title>
                Add 6-8 drops of universal indicator to your test tube.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-4-box</v-icon>
              </template>

              <v-list-item-title>
                Compare the colour of the liquid in your test tube with the
                colour chart and determine the pH of the soil sample.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-5-box</v-icon>
              </template>

              <v-list-item-title>
                Report your results back to mission command and clean up your
                experiment area before returning to base.
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="i >= 6">
      <v-card :color="colorRand[6]" tile>
        <v-card-text>
          Starfleet want to know what the pH level was. Please report back this
          information:
          <v-text-field v-model="phValue" label="pH Level"></v-text-field>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="i >= 6">
      <v-btn
        :color="colorRand[8]"
        tile
        block
        @click="storeMission()"
        :loading="loadingNextMessage"
      >
        Ready for next transmission
      </v-btn>
    </v-col>

    <v-col cols="12" v-if="i < 6">
      <v-btn
        :color="colorRand[7]"
        tile
        block
        @click="increment()"
        :loading="loadingNextMessage"
      >
        Ready for next transmission
      </v-btn>
    </v-col>
  </v-row>
</template>

<style lang="scss" scoped>
div {
  color: black !important;
}
</style>
