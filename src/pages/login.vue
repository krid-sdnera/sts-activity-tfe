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
          full-width
          autofocus
          clearable
          hide-details
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

<script lang="ts">
export default {
  data() {
    return {
      loginCode: null,
      loading: false,
      noActivityHandler: null,
    };
  },
  mounted() {
    this.initNoActivityHandler();
  },

  methods: {
    initNoActivityHandler() {
      clearTimeout(this.noActivityHandler);
      this.noActivityHandler = setTimeout(() => {
        this.$router.push("/");
      }, 20000);
    },
    async login() {
      await this.$store.dispatch("registerLogin", this.loginCodeInput);

      this.loading = true;
      await new Promise((r) => setTimeout(r, 2000));
      this.loading = false;
      clearTimeout(this.noActivityHandler);

      this.$router.push("/dashboard");
    },
  },
};
</script>

<style scoped>
.restricted {
  text-align: center;
  font-size: 6rem;
  color: red;
}
</style>
