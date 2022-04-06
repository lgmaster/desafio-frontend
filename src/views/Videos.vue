<template>
  <div id="home" class="container-fluid mt-3">
    <div class="row mt-3">
      <div class="col">
        <MoreVideos />
      </div>
    </div>
  </div>
</template>

<script>
import MoreVideos from "@/components/MoreVideos/index.vue";

export default {
  name: "Videos",
  components: {
    MoreVideos,
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
