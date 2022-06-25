<template>
  <div class="jitsi-container" ref="jitsi-container"></div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      api: null,
    };
  },
  mounted() {
    const el = this.$refs["jitsi-container"];

    if (!window.JitsiMeetExternalAPI) {
      return;
    }

    const domain = "sts.dirk.arends.com.au";
    const options = {
      roomName: "TestCode",
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
};
</script>

<style lang="css" scoped></style>
