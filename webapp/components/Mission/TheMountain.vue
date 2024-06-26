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

onMounted(() => {
  clearInterval(interval.value);
  interval.value = setInterval(() => {
    increment();
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

          The density and type of gases in the atmosphere along with the
          temperature ranges experienced will determine whether water ice, or
          other any other forms of ice, can exist in a region. The presence of
          both carbon dioxide and water are good signs that a planet is suitable
          for life, so we will be looking for these compounds. As you move
          higher in altitude (away from the surface of a planet) the atmosphere
          becomes thinner so there are less gas particles creating pressure.
          This decrease in pressure leads to a decrease in temperature so
          mountainous regions are where you are most likely to find ice on this
          planet.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="i >= 5">
      <v-card :color="colorRand[5]" tile>
        <v-card-text>
          <h3>Instructions:</h3>

          <v-list :color="colorRand[5]">
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-1-box</v-icon>
              </template>

              <v-list-item-title>
                Warning: ice that is made from carbon dioxide (called dry ice)
                is cold enough to burn you.<br />
                Only use tongs to touch the ice samples on this planet.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-2-box</v-icon>
              </template>

              <v-list-item-title>
                Collect two different ice samples. Look for ice from different
                areas in different shapes.
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-3-box</v-icon>
              </template>

              <v-list-item-title>
                Place one of your ice samples into a beaker of liquid water.
                <ul>
                  <li>
                    If the ice is made from frozen water H2O it should float
                    because solid water is less dense than liquid water. The ice
                    should slowly melt in the water.
                  </li>
                  <li>
                    If the ice is made from frozen carbon dioxide CO2 it should
                    sublimate. This means it will turn directly from a solid to
                    a gas (it will skip the liquid phase). It will be more dense
                    than the liquid water so it will sink and you will be able
                    to observe the bubbles of gas being produced.
                  </li>
                </ul>
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <template v-slot:prepend>
                <v-icon color="black">mdi-numeric-4-box</v-icon>
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
          Starfleet want to know the results of this test. Please report back
          this information:
          <v-text-field v-model="rockValue" label="Ice Result"></v-text-field>
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
