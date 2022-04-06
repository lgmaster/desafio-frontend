<template>
  <div class="card featured">
    <div class="card-body">
      <h5>Featured</h5>
        <div v-if="getFeaturedVideos" class="row mt-4">
          <template v-for="(video, index) in getFeaturedVideos">
            <div v-if="index === 0" class="col-8"
            :key="video.id"
            data-bs-toggle="modal"
            data-bs-target="#modalPlayerVideo"
            @click="playVideo(video.id)">
              <div class="ratio ratio-4x3">
                <img :src="video.snippet.thumbnails.high.url"
                  class="img-fluid"
                  :alt="video.snippet.title">
              </div>
            </div>
          </template>
          <div v-if="getFeaturedVideos.length > 0"
            class="col-4 d-flex flex-column justify-content-between">
            <template v-for="(video, index) in getFeaturedVideos">
              <div v-if="index !== 0" :key="video.id"
                class="row d-flex align-items-center
                justify-content-center"
                data-bs-toggle="modal"
                data-bs-target="#modalPlayerVideo"
                @click="playVideo(video.id)">
                <div class="col-4  d-flex align-items-center justify-content-center">
                    <img :src="video.snippet.thumbnails.high.url"
                    height="72px"
                    :alt="video.snippet.title">
                </div>
                <div class="col">
                    <p class="text-start mb-0">{{video.snippet.title | truncate(40)}}</p>
                </div>
              </div>
            </template>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import truncate from "@/util/filters";

export default {
  name: "Featured",
  computed: {
    ...mapGetters("videos", [
      "getFeaturedVideos",
    ]),
  },
  filters: {
    truncate,
  },
  methods: {
    ...mapActions("videos", ["playVideo"]),
  },
};
</script>

<style lang="scss">
.featured {
  img, p {
    cursor: pointer;
  }

  p {
    font-size: toRem(13px)
  }
}

</style>
