<script setup lang="ts">
const store = useStore();
const router = useRouter();
onMounted(() => {
  if (!store.getters.missionStarted) {
    router.push("/mission-start");
  } else {
    router.push("/mission-list");
  }
});
</script>

<template>
  <LPage> </LPage>
</template>
