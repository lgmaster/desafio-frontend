<template>
  <div class="card">
    <div class="card-body">
      <h5>More Videos</h5>
        <div class="row mt-3">
          <SmallVideo />
          <SmallVideo />
          <SmallVideo />
          <SmallVideo />
          <SmallVideo />
          <SmallVideo />
        </div>
      </div>
  </div>
</template>

<script>
import SmallVideo from "@/components/SmallVideo/index.vue";

export default {
  name: "MoreVideos",
  components: {
    SmallVideo,
  },
};
</script>

<style>

</style>
