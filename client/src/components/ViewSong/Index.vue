<template>
  <div>
    <v-layout class="mb-3">
      <v-flex xs6 mr-2>
        <SongMetadata :song="song"></SongMetadata>
      </v-flex>
      <v-flex xs6>
        <Youtube :youtubeId="song.youtubeId"></Youtube>
      </v-flex>
    </v-layout>
    <v-layout class="mb-3">
      <v-flex xs6 mr-2>
        <Lyrics :song="song"></Lyrics>
      </v-flex>
      <v-flex xs6>
        <Tabs :tab="song.tab"></Tabs>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import SongMetadata from "./SongMetadata";
import Youtube from "./YouTube";
import Lyrics from "./Lyrics";
import Tabs from "./Tabs";
import SongsService from "@/services/SongsService";
import SongHistoryService from "@/services/SongHistoryService";
import { mapState } from "vuex";

export default {
  data() {
    return {
      song: {}
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user", "route"])
  },
  async mounted() {
    const songId = this.route.params.songId;
    this.song = (await SongsService.show(songId)).data;

    if (this.isUserLoggedIn) {
      SongHistoryService.post({
        songId: songId
      });
    }
  },
  components: {
    SongMetadata,
    Youtube,
    Lyrics,
    Tabs
  }
};
</script>

<style scoped></style>
