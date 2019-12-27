<template>
  <div>
    <v-app-bar fixed dark app class="cyan">
      <v-toolbar-title>
        <router-link to="/">TabTracker</router-link>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn text router :to="{ name: 'songs' }">
          Browse
        </v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text router to="login" v-if="!$store.state.isUserLoggedIn">
          Login
        </v-btn>
        <v-btn text router to="register" v-if="!$store.state.isUserLoggedIn">
          Sign Up
        </v-btn>
        <v-btn text @click="logout" to="/" v-if="$store.state.isUserLoggedIn">
          Logout
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
    }
  }
};
</script>

<style scoped>
a {
  font-weight: bold;
  text-decoration: none;
  color: white;
}
a.router-link-active {
  color: white;
}

a.router-link-exact-active {
  color: white;
}
</style>
