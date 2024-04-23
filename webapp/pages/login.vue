<script setup lang="ts">
const store = useStore();
const { sounds } = useSounds();

const loginCode = ref(null);
const loading = ref(false);
const noActivityHandler = ref<NodeJS.Timeout | undefined>(undefined);
const errorMessage = ref<string | null>(null);

initNoActivityHandler();

const router = useRouter();

function initNoActivityHandler() {
  clearTimeout(noActivityHandler.value);
  noActivityHandler.value = setTimeout(() => {
    router.push("/");
    sounds.deny();
  }, 20000);
}
async function login() {
  loading.value = true;
  errorMessage.value = "Checking Code..";
  await new Promise((r) => setTimeout(r, 2000));

  loading.value = false;
  if (!/SAW\d{3}/.test(loginCode.value ?? "")) {
    sounds.deny();
    errorMessage.value = "Invalid Access Code";
    return;
  }

  errorMessage.value = "";
  await store.mutations.registerLogin(loginCode.value ?? "");
  clearTimeout(noActivityHandler.value);

  sounds.panelBeep13.play();

  store.mutations.createAlert({
    message: "Access Granted",
    type: "success",
  });

  router.push("/dashboard");
}
</script>

<template>
  <LPage>
    <v-row>
      <v-col cols="12">
        <h2 class="restricted">Access Restricted</h2>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="loginCode"
          color="red"
          error
          :error-messages="errorMessage"
          full-width
          autofocus
          clearable
          solo
          outlined
          :loading="loading"
          append-icon="mdi-send"
          label="Enter Authorisation Code"
          @keydown.enter="login"
          @keydown="initNoActivityHandler"
          @click:append="login"
        ></v-text-field>
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
