<template>
  <div>
    <v-layout text-center wrap>
      <v-flex xs4>
        <Panel title="Song Metadata">
          <v-text-field
            required
            :rules="[required]"
            label="Title"
            v-model="song.title"
          ></v-text-field>
          <v-text-field
            required
            :rules="[required]"
            label="Artist"
            v-model="song.artist"
          ></v-text-field>
          <v-text-field
            required
            :rules="[required]"
            label="Genre"
            v-model="song.genre"
          ></v-text-field>
          <v-text-field
            required
            :rules="[required]"
            label="Album"
            v-model="song.album"
          ></v-text-field>
          <v-text-field
            required
            :rules="[required]"
            label="Album Image URL"
            v-model="song.albumImageURL"
          ></v-text-field>
          <v-text-field
            required
            :rules="[required]"
            label="YouTube ID"
            v-model="song.youtubeId"
          ></v-text-field>
        </Panel>
      </v-flex>
      <v-flex xs8>
        <Panel title="Song Structure" class="ml-4">
          <v-textarea
            required
            :rules="[required]"
            label="Lyric"
            v-model="song.lyrics"
          ></v-textarea>
          <v-textarea
            required
            :rules="[required]"
            label="Tab"
            v-model="song.tab"
          ></v-textarea>
          <div class="danger-alert mb-1" v-if="error">{{ error }}</div>
          <v-btn dark class="cyan" @click="create">Create Song</v-btn>
        </Panel>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Panel from "@/components/Panel";
import SongsServices from "@/services/SongsService";
export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageURL: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: value => !!value || "Required."
    };
  },
  components: {
    Panel
  },
  methods: {
    async create() {
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        key => !!this.song[key]
      );

      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields.";
        return;
      }

      try {
        await SongsServices.post(this.song);
        this.$router.push({
          name: "songs"
        });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style scoped>
.danger-alert {
  color: red;
}
</style>
