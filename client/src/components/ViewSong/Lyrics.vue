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
import Panel from "@/components/Panel";

export default {
  props: ["song"],
  components: {
    Panel
  }
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
