<template>
  <div class="card mb-4">
    <div class="card-body">
        <h5>Searched Videos</h5>
        <div v-if="getSearchedVideos"
        class="row p-3 d-flex
        align-items-center justify-content-center">
          <SmallVideo v-for="video in getSearchedVideos" :key="video.id.videoId" :video="video" />
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import SmallVideo from "@/components/SmallVideo/index.vue";

export default {
  name: "SearchedVideos",
  components: {
    SmallVideo,
  },
  computed: {
    ...mapGetters("videos", [
      "getSearchedVideos",
    ]),
  },
};
</script>

<style>

</style>
