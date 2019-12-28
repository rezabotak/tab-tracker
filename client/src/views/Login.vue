/* eslint-disable prettier/prettier */
<template>
  <v-layout text-center wrap>
    <v-flex xs6 offset-xs3>
      <Panel title="Login">
        <v-text-field type="email" name="email" label="Email" v-model="email" />
        <br />
        <v-text-field
          type="password"
          name="password"
          label="Password"
          v-model="password"
        />
        <br />
        <div class="danger-alert" v-html="error"></div>
        <br />
        <v-btn class="cyan" dark @click="login">Login</v-btn>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({
          name: "songs"
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<style scoped></style>
