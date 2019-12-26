<template>
  <div>
    <v-app-bar fixed dark app class="cyan">
      <v-toolbar-title>
        <router-link to="/">TabTracker</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <!-- <router-link to="register">
          <v-btn text>
            SIGN UP
          </v-btn>
        </router-link> -->
        <v-btn text router to="login" v-if="!$store.state.isUserLoggedIn"
          >Login</v-btn
        >
        <v-btn text router to="register" v-if="!$store.state.isUserLoggedIn"
          >Sign Up</v-btn
        >
      </v-toolbar-items>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "PageHeader"
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
