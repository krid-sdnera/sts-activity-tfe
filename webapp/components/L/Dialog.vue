<script setup lang="ts">
const props = defineProps<{
  name: string;
  title: string;
}>();

const model = defineModel<boolean>();

const store = useStore();

const dialog = ref(false);
const colorScheme = ref(Math.random() > 0.75 ? 2 : 1);

onMounted(() => {
  dialog.value = model.value ?? false;
});

onBeforeUnmount(() => {
  store.mutations.setDialogStatus({ [props.name]: false });
});

watch(model, () => {
  dialog.value = model.value ?? false;
});

watch(model, () => {
  store.mutations.setDialogStatus({ [props.name]: dialog.value });
});

function close() {
  dialog.value = false;
}
</script>

<template>
  <v-dialog v-model="dialog" scrim="black" :opacity="1">
    <div class="dialog-container">
      <div>
        <LCARSBar align="left" :color-scheme="colorScheme" @close="close()">
          {{ props.title }}
        </LCARSBar>

        <div class="content-wrapper">
          <slot :close="close"></slot>
        </div>

        <LCARSBar align="right" :color-scheme="colorScheme"> Close </LCARSBar>
      </div>
    </div>
  </v-dialog>
</template>

<style lang="scss" scoped>
// @import "~vuetify/src/styles/styles.sass";

.dialog-container {
  overflow-y: hidden;
}
.content-wrapper {
  height: 77vh;
  overflow-y: auto;
  padding: 20px 30px;
}
</style>
