<template>
  <div id="app">
    <v-app>
      <PageHeader />
      <v-content>
        <v-container class="mt-5">
          <router-view />
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import PageHeader from "@/components/Header";
export default {
  name: "app",
  components: {
    PageHeader
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
