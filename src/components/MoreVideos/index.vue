<template>
  <div class="card mb-4">
    <div class="card-body">
        <h5>More Videos</h5>
        <div v-if="getMoreVideos" class="row p-3 d-flex align-items-center justify-content-center">
          <SmallVideo v-for="video in getMoreVideos" :key="video.id.videoId" :video="video" />
        </div>
      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import SmallVideo from "@/components/SmallVideo/index.vue";

export default {
  name: "MoreVideos",
  components: {
    SmallVideo,
  },
  computed: {
    ...mapGetters("videos", [
      "getMoreVideos",
    ]),
  },
  methods: {
    ...mapActions("videos", ["moreVideos"]),
  },
  async mounted() {
    await this.moreVideos({ chart: "mostPopular", myRating: null, maxResults: 40 });
  },
};
</script>

<style>

</style>
