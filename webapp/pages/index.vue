<script setup lang="ts">
const store = useStore();

store.mutations.resetApp();
</script>

<template>
  <LPage>
    <v-row>
      <v-col cols="12">
        <h2 class="restricted">Access Restricted</h2>
      </v-col>
      <v-col cols="12">
        <v-btn block text tile color="red" x-large to="/login">Authorise</v-btn>
      </v-col>
    </v-row>
  </LPage>
</template>

<style scoped>
.restricted {
  text-align: center;
  font-size: 6rem;
  color: red;
}
</style>
