<template>
  <Panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">{{ song.title }}</div>
        <div class="song-artist">{{ song.artist }}</div>
        <div class="song-genre">{{ song.genre }}</div>
        <v-btn
          dark
          class="cyan"
          router
          :to="{
            name: 'songs-edit',
            params() {
              return { songId: songId };
            }
          }"
        >
          Edit
        </v-btn>
        <v-btn
          dark
          class="cyan ml-1"
          @click="setAsBookmark"
          v-if="isUserLoggedIn && !bookmark"
        >
          Set As Bookmark
        </v-btn>
        <v-btn
          dark
          class="cyan ml-1"
          @click="unsetAsbookmark"
          v-if="isUserLoggedIn && bookmark"
        >
          Unset Bookmark
        </v-btn>
      </v-flex>
      <v-flex xs6>
        <img :src="song.albumImageURL" alt="" class="album-image" />
        <br />
        {{ song.album }}
      </v-flex>
    </v-layout>
  </Panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  props: ["song"],
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  data() {
    return {
      bookmark: null
    };
  },
  async mounted() {
    if (!this.isUserLoggedIn) {
      return;
    }

    try {
      this.bookmark = (
        await BookmarksService.bookmark({
          songId: this.$store.state.route.params.songId
        })
      ).data;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async setAsBookmark() {
      try {
        this.bookmark = (
          await BookmarksService.post({
            songId: this.song.id
          })
        ).data;
      } catch (err) {
        console.log(err);
      }
    },
    async unsetAsbookmark() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (err) {
        console.log(err);
      }
    }
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
