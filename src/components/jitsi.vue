<template>
  <LPage>
    <v-row>
      <v-col cols="12" v-if="uiShowVideo">
        <v-card tile :color="$lcarsColour()">
          <v-card-title>
            <h2>Comms</h2>
          </v-card-title>
        </v-card>
      </v-col>
      <v-col cols="12" v-if="uiShowVideo">
        <v-btn v-if="!api" block color="green" @click="initialise()">
          connect
        </v-btn>
        <v-btn v-else block color="red" @click="dispose()">disconnect</v-btn>
      </v-col>
      <v-col cols="12" v-if="!uiShowVideo"> </v-col>
      <v-col cols="12" v-show="uiShowVideo">
        <div class="jitsi-container" ref="jitsi-container"></div>
      </v-col>
    </v-row>
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

<style lang="css" scoped></style>
