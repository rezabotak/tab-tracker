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
export default {
  props: ["youtubeId"]
};
</script>

<style scoped></style>
