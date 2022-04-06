<template>
  <div class="modal" id="modalPlayerVideo" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="btn-close"
          data-bs-dismiss="modal" aria-label="Close" @click="close"></button>
        </div>
        <div class="modal-body">
          <div class="ratio ratio-16x9">
            <iframe v-if="getPlayedVideo" width="560" height="100%" :src="'https://www.youtube.com/embed/'+getPlayedVideo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ModalPlayerVideo",
  computed: {
    ...mapGetters("videos", ["getPlayedVideo"]),
  },
  methods: {
    ...mapActions("videos", ["playVideo"]),
    close() {
      this.playVideo(null);
    },
  },
};
</script>

<style>

</style>
