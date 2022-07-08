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

          The acidity of a water sample tells us a lot about the type of
          environment the water is formed in and the types of living organisms
          that might be able to live there. Water with a pH between 6-8 will be
          best for supporting carbon and nitrogen based plant and aquatic life.
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" v-if="i >= 5">
      <v-card :color="colorRand[5]" tile>
        <v-card-text>
          <h3>Instructions:</h3>

          We need to collect water samples from the lake and determine their pH.

          <v-list :color="colorRand[5]">
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="black">mdi-numeric-1-box</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Collect water samples of two different types of water from
                around the beach area. Test the two water samples. You only need
                enough to fill a quarter of your vial.
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon>
                <v-icon color="black">mdi-numeric-2-box</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Add 6-8 drops of universal indicator to your test tube.
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="black">mdi-numeric-3-box</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Compare the colour of the liquid in your test tube with the
                colour chart and determine the pH of the water sample.
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="black">mdi-numeric-4-box</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Report your results back to mission command and clean up your
                experiment area before returning to base.
              </v-list-item-content>
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

<script lang="ts">
export default {
  data() {
    return {
      i: 0,
      colorRand: Array(10)
        .fill(0)
        .map((_) => this.$lcarsColour()),
      interval: null,
      phValue: null,
      loadingNextMessage: false,
    };
  },
  mounted() {
    // clearInterval(this.interval);
    // this.interval = setInterval(() => {
    //   this.increment();
    // }, 5000);
  },
  beforeUnmount() {
    // clearInterval(this.interval);
  },
  methods: {
    async increment() {
      this.loadingNextMessage = true;
      await new Promise((r) => setTimeout(r, 3000));
      this.loadingNextMessage = false;

      this.i = this.i + 1;
      this.$sounds().playRandom();
    },
    storeMission() {
      this.$sounds().playRandom();
      this.$router.push("/mission-recall");
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  color: black !important;
}
</style>
