<template>
  <div class="alert-container">
    <v-alert
      v-for="alert in alerts"
      v-bind:key="alert.uniq"
      dense
      :type="alert.type"
    >
      <div class="d-flex flex-column">
        <strong v-if="alert.heading">{{ alert.heading }}</strong>
        <span> {{ alert.message }} </span>
      </div>
    </v-alert>
  </div>
</template>

<script lang="ts">
import { AppAlert } from "~/common/alert";

export default {
  computed: {
    alerts(): AppAlert[] {
      return this.$store.getters.alerts;
    },
  },
};
</script>

<style lang="css" scoped>
.alert-container {
  position: fixed;
  bottom: 0px;
  right: 16px;
  z-index: 999;
}
</style>
