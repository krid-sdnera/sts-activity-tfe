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
              <v-list-item-icon>
                <v-icon color="black">mdi-numeric-1-box</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Collect soil samples of two different types of soil from around
                the beach area. Try for a sandy soil and a clay based soil. You
                only need enough to fill a quarter of your vial.
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="black">mdi-numeric-2-box</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Collect two different ice samples. Look for ice from different
                areas in different shapes.
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="black">mdi-numeric-3-box</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
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

<script lang="ts">
export default {
  data() {
    return {
      i: 0,
      colorRand: Array(10)
        .fill(0)
        .map((_) => this.$lcarsColour()),
      interval: null,
      rockValue: null,
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
  },
};
</script>

<style lang="scss" scoped>
div {
  color: black !important;
}
</style>
