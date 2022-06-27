<template>
  <LPage> </LPage>
</template>

<script lang="ts">
export default {
  data() {
    return {};
  },
  computed: {
    missionStarted() {
      return this.$store.getters.missionStarted;
    },
  },

  mounted() {
    if (!this.missionStarted) {
      this.$router.push("/mission-start");
    } else {
      this.$router.push("/mission-detailsstart");
    }
  },
  methods: {},
};
</script>
