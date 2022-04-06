<template>
  <div id="app">
    <Header />
    <ModalPlayerVideo />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header/index.vue";
import ModalPlayerVideo from "@/components/ModalPlayerVideo/index.vue";
import { mapActions } from "vuex";

export default {
  components: {
    Header,
    ModalPlayerVideo,
  },
  methods: {
    ...mapActions("auth", ["userSession"]),
  },
  async mounted() {
    const session = localStorage.getItem("gapi.session");
    this.userSession(session);
  },
};
</script>

<style lang="scss">

</style>
