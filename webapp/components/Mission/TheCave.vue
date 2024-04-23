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
const rockValue = ref<number>(null);
const loadingNextMessage = ref<number>(false);

// onMounted(() => {
//   clearInterval(interval.value);
//   interval.value = setInterval(() => {
//     increment();
//   }, 5000);
// });
// onBeforeUnmount(() => {
//   clearInterval(interval.value);
// });

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

          When carbonates are found in rocks this often means that carbon based
          life has existed in that region. Limestone is a type of carbonate that
          often forms in caves which when exposed to heat and pressure turns
          into marble.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="i >= 5">
      <v-card :color="colorRand[5]" tile>
        <v-card-text>
          <h3>Instructions:</h3>

          We need to collect rock samples from this cave and test for the
          presence of carbonates to determine if we are likely to find that
          carbon-based life flurished in past eons.
          <v-list :color="colorRand[5]">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-1-box</v-icon>
              </template>

              <v-list-item-title>
                Use your sample vials to collect a small sample of the red rocks
                and a small sample of the white rocks. <br />
                One or two small rocks of each type will be enough.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-2-box</v-icon>
              </template>

              <v-list-item-title>
                Crush each of your samples to dust using the mortar and pestle.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-3-box</v-icon>
              </template>

              <v-list-item-title>
                Put the crushed rocks into two separate test tubes.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-4-box</v-icon>
              </template>

              <v-list-item-title>
                Using gloves, add a pipette of 1M hydrochloric acid to each test
                tube and observe what happens.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-5-box</v-icon>
              </template>

              <v-list-item-title>
                If the rocks fizz they contain carbonate. If there is no fizzing
                then no carbonate is present.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-6-box</v-icon>
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
          Starfleet want to know which rock fizzed. Please report back this
          information:
          <v-checkbox
            v-model="rockValue"
            value="red"
            label="Red rock"
          ></v-checkbox>
          <v-checkbox
            v-model="rockValue"
            value="white"
            label="White rock"
          ></v-checkbox>
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
