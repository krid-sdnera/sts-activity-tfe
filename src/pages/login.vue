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

<script lang="ts">
export default {
  data() {
    return {
      loginCode: null,
      loading: false,
      noActivityHandler: null,
      errorMessage: null,
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
      this.loading = true;
      this.errorMessage = "Checking Code..";
      await new Promise((r) => setTimeout(r, 2000));

      this.loading = false;
      if (!/SAW\d{3}/.test(this.loginCode)) {
        this.errorMessage = "Invalid Access Code";
        return;
      }

      this.errorMessage = "";
      await this.$store.dispatch("registerLogin", this.loginCode);
      clearTimeout(this.noActivityHandler);

      this.$createAlert({
        message: "Access Granted",
        type: "success",
      });

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
