<script setup lang="ts">
const JitsiAPI = ref<JitsiMeetExternalAPI | null>(null);

const store = useStore();
const uiShowVideo = store.getters.uiShowVideo;
const accessCode = store.getters.accessCode;
const anyDialogOpen = store.getters.anyDialogOpen;

watch(accessCode, () => {
  if (accessCode === null) {
    dispose();
  }
});

onMounted(() => {
  nextTick(() => {
    initialise();
  });
});

const jitsiContainer = ref(null);

watch(jitsiContainer, () => initialise());
watch(accessCode, () => initialise());

function initialise() {
  // Jitsi is already initialised. Dont try to initiaise again.
  if (JitsiAPI.value !== null) {
    return;
  }

  console.log("[Jitsi] Start loading.");

  // Jitsi ref element is not ready.
  if (!jitsiContainer.value) {
    console.log("[Jitsi]Jitsi ref element is not ready.");
    return;
  }

  // Access Code has not been entered.
  if (!accessCode.value) {
    console.log("[Jitsi] Access Code has not been entered.");
    return;
  }

  if (!window.JitsiMeetExternalAPI) {
    console.log("[Jitsi] External API Script has not been loaded.");
    return;
  }

  // const domain = "sts.dirk.arends.com.au";
  // const domain = "meet.jit.si";
  const domain = "192.168.20.117:8443";
  const options = {
    roomName: accessCode.value,
    width: 400,
    height: 400,
    parentNode: jitsiContainer.value,
    configOverwrite: {
      disableModeratorIndicator: true,
      disablePolls: true,
      // disableSelfView: true,
      // disableSelfViewSettings: true,

      // enableWelcomePage: false,
      // enableClosePage: false,
      hideDisplayName: true,
      prejoinConfig: {
        enabled: false,
      },
      enableInsecureRoomNameWarning: false,
      toolbarButtons: [],
    },
    userInfo: { displayName: "Mission Command" },
  };

  JitsiAPI.value = new window.JitsiMeetExternalAPI(domain, options);
}
function dispose() {
  if (JitsiAPI.value) {
    JitsiAPI.value.dispose();
    JitsiAPI.value = null;
  }
}
</script>

<template>
  <LPage>
    <client-only>
      <v-row
        class="comms-container"
        :class="{
          'dialog-open': anyDialogOpen,
        }"
      >
        <v-col cols="12" v-if="uiShowVideo && !JitsiAPI">
          <v-card tile :color="useLcarsColor()">
            <v-card-title>
              <h2>Comms</h2>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" v-if="uiShowVideo && !JitsiAPI">
          <v-btn block color="green" tile @click="initialise()">connect</v-btn>
        </v-col>
        <v-col cols="12" v-show="uiShowVideo">
          <div class="jitsi-container" ref="jitsiContainer"></div>
        </v-col>
        <v-col cols="12" v-if="uiShowVideo && JitsiAPI">
          <v-btn block color="red" tile @click="dispose()">disconnect</v-btn>
        </v-col>
      </v-row>
    </client-only>
  </LPage>
</template>

<style lang="css" scoped>
.comms-container.dialog-open {
  position: fixed;
  z-index: 10000;
  position: fixed;
  z-index: 10000;
  top: 91px;
  right: 30px;
  left: 66vw;
}
.jitsi-container {
}
</style>
