<template>
  <div style="height: 100%; width: 100%">
    <client-only>
      <LcarsStarChart :type="starChartType" />
    </client-only>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      starChartType: Math.random() > 0.5 ? "nav" : "planet",
    };
  },
  computed: {},
  mounted() {
    // this.$setBreadcrumbs([{ to: null, label: "Home" }]);
  },
};
</script>
