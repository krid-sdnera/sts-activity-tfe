<template>
  <LPage>
    <client-only>
      <v-row
        class="comms-container"
        :class="{
          'dialog-open': anyDialogOpen,
        }"
      >
        <v-col cols="12" v-if="uiShowVideo && !api">
          <v-card tile :color="$lcarsColour()">
            <v-card-title>
              <h2>Comms</h2>
            </v-card-title>
          </v-card>
        </v-col>
        <v-col cols="12" v-if="uiShowVideo && !api">
          <v-btn block color="green" tile @click="initialise()">connect</v-btn>
        </v-col>
        <v-col cols="12" v-show="uiShowVideo">
          <div class="jitsi-container" ref="jitsi-container"></div>
        </v-col>
        <v-col cols="12" v-if="uiShowVideo && api">
          <v-btn block color="red" tile @click="dispose()">disconnect</v-btn>
        </v-col>
      </v-row>
    </client-only>
  </LPage>
</template>

<script lang="ts">
export default {
  data() {
    return {
      api: null,
    };
  },
  computed: {
    uiShowVideo() {
      return this.$store.getters.uiShowVideo;
    },
    accessCode() {
      return this.$store.getters.accessCode;
    },
    anyDialogOpen() {
      return this.$store.getters.anyDialogOpen;
    },
  },
  watch: {
    accessCode() {
      if (this.accessCode === null) {
        this.dispose();
      }
    },
  },
  mounted() {
    // this.initialise();
  },
  methods: {
    initialise() {
      const el = this.$refs["jitsi-container"];

      console.log("Trying to load jitsi");
      if (!window.JitsiMeetExternalAPI) {
        return;
      }

      // const domain = "sts.dirk.arends.com.au";
      const domain = "meet.jit.si";
      const options = {
        roomName: this.accessCode,
        width: 400,
        height: 400,
        parentNode: el,
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

      this.api = new window.JitsiMeetExternalAPI(domain, options);
    },
    dispose() {
      if (this.api) {
        this.api.dispose();
        this.api = null;
      }
    },
  },
};
</script>

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
