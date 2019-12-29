<template>
  <Panel title="Bookmarks" class="mr-2">
    <v-data-table :headers="headers" :items="bookmarks" class="elevation-1">
    </v-data-table>
  </Panel>
</template>

<script>
import { mapState } from "vuex";
import BookmarksService from "@/services/BookmarksService";

export default {
  data() {
    return {
      headers: [
        {
          text: "Title",
          value: "title"
        },
        {
          text: "Artist",
          value: "artist"
        }
      ],
      bookmarks: []
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      try {
        this.bookmarks = (await BookmarksService.index()).data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>

<style scoped></style>
