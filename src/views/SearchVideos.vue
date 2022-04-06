<template>
  <div id="home" class="container-fluid mt-3">
    <div class="row mt-3">
      <div class="col">
        <SearchedVideos />
      </div>
    </div>
  </div>
</template>

<script>
import SearchedVideos from "@/components/SearchedVideos/index.vue";

export default {
  name: "SearchVideos",
  components: {
    SearchedVideos,
  },
  data() {
    return {
    };
  },
  computed: {
  },
};
</script>

<style lang="scss">

</style>
