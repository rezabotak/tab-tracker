<template>
  <Panel title="Tabs">
    <v-layout>
      <v-flex>
        <pre>{{ tab }}</pre>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
export default {
  props: ["tab"]
};
</script>

<style scoped>
pre {
  text-align: left;
  white-space: pre-wrap;
  height: 400px;
  overflow: auto;
}
</style>
