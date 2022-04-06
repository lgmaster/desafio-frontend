<template>
  <div class="smallvideo col-3 mt-2 mb-2">
    <div class="row d-flex align-items-center
    justify-content-center"
    data-bs-toggle="modal"
    data-bs-target="#modalPlayerVideo"
    @click="playVideo(video.id)">
      <div class="col-4 d-flex align-items-center justify-content-center">
          <img :src="video.snippet.thumbnails.high.url"
          height="72px"
          :alt="video.snippet.title">
      </div>
      <div class="col">
          <p class="text-start mb-0">{{video.snippet.title | truncate(40)}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import truncate from "@/util/filters";

export default {
  name: "SmallVideo",
  props: ["video"],
  filters: {
    truncate,
  },
  methods: {
    ...mapActions("videos", ["playVideo"]),
  },
};
</script>

<style lang="scss">
.smallvideo {
  img, p {
    cursor: pointer;
  }

  p {
    font-size: toRem(12px)
  }
}
</style>
