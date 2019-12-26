<template>
  <v-layout text-center wrap>
    <v-flex xs6 offset-xs3>
      <Panel title="Songs">
        <div slot="action">
          <v-btn
            router
            :to="{ name: 'songs-create' }"
            class="cyan accent-2"
            fab
            light
            absolute
            right
            center
          >
            <v-icon>add</v-icon>
          </v-btn>
        </div>
        <div v-for="song in songs" :key="song.id" class="song">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">{{ song.title }}</div>
              <div class="song-artist">{{ song.artist }}</div>
              <div class="song-genre">{{ song.genre }}</div>
              <v-btn
                dark
                class="cyan"
                router
                :to="{ name: 'song', params: { songId: song.id } }"
                >View</v-btn
              >
            </v-flex>
            <v-flex xs6>
              <img :src="song.albumImageURL" alt="" class="album-image" />
            </v-flex>
          </v-layout>
        </div>
      </Panel>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from "@/components/Panel";
import SongsService from "@/services/SongsService";
export default {
  components: {
    Panel
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
