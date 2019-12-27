<template>
  <Panel title="YouTube Video">
    <v-layout>
      <v-flex>
        <youtube-media
          :video-id="youtubeId"
          player-width="500"
          player-height="216"
        ></youtube-media>
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import Panel from "@/components/Panel";
export default {
  props: ["youtubeId"],
  components: {
    Panel
  }
};
</script>

<style scoped></style>
