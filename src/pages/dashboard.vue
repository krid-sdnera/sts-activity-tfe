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
        <v-btn block tile :color="$lcarsColour()" to="/mission-start">
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
        <v-btn block tile :color="$lcarsColour()" @click="dialog = true">
          Monitor Life Support
        </v-btn>
      </v-col>
    </v-row>
    <LDialog v-model="dialog" title="TITLE" v-slot="props">
      <v-btn @click="props.close()">close</v-btn>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test1</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
      <p>test2</p>
    </LDialog>
  </LPage>
</template>

<script lang="ts">
export default {
  data() {
    return {
      dialog: false,
    };
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>
