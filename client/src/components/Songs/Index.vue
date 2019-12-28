<template>
  <v-layout text-center wrap>
    <v-flex xs6 offset-xs3>
      <SongsSearchPanel></SongsSearchPanel>
      <SongsPanel class="mt-2"></SongsPanel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsPanel from "./SongsPanel";
import SongsSearchPanel from "./SongsSearchPanel";
import SongsService from "@/services/SongsService";
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  },
  data() {
    return {
      songs: []
    };
  },
  async mounted() {
    // do a request to the backend fo all the songs
    this.songs = (await SongsService.index()).data;
  }
};
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
}

.song-artist {
  font-size: 24px;
}

.song-genre {
  font-size: 18px;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
