<template>
  <div id="home" class="container-fluid mt-3">
    <div class="row">
      <div class="col-12">
        <Featured />
      </div>
      <!-- <div class="col-3">
        <SquarePopUp />
      </div> -->
    </div>
    <div class="row mt-3">
      <div class="col">
        <MoreVideos />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Featured from "@/components/Featured/index.vue";
// import SquarePopUp from "@/components/SquarePopUp/index.vue";
import MoreVideos from "@/components/MoreVideos/index.vue";

export default {
  name: "Home",
  components: {
    Featured,
    // SquarePopUp,
    MoreVideos,
  },
  data() {
    return {
    };
  },
  methods: {
    ...mapActions("videos", ["listFeatured"]),
  },
  async mounted() {
    await this.listFeatured({ chart: "mostPopular", myRating: null, maxResults: 8 });
  },
};
</script>

<style lang="scss">

</style>
