<template>
  <Panel title="Lyrics">
    <v-layout>
      <v-flex>
        <pre>{{ song.lyrics }}</pre>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
export default {
  props: ["song"]
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
