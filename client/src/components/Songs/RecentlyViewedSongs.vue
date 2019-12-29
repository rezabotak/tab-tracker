<template>
  <Panel title="Recently Viewed Songs" class="mr-2 mt-2">
    <v-data-table :headers="headers" :items="histories" class="elevation-1">
    </v-data-table>
  </Panel>
</template>

<script>
import { mapState } from "vuex";
import SongHistoryService from "@/services/SongHistoryService";
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
      histories: []
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn", "user"])
  },
  async mounted() {
    if (this.isUserLoggedIn) {
      try {
        this.histories = (await SongHistoryService.index()).data;
      } catch (err) {
        console.log(err);
      }
    }
  }
};
</script>
<style scoped></style>
