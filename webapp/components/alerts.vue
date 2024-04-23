<script setup lang="ts">
const store = useStore();

const alerts = store.getters.alerts;
</script>

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

<style lang="css" scoped>
.alert-container {
  position: fixed;
  bottom: 0px;
  right: 16px;
  z-index: 999;
}
</style>
