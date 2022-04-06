<template>
  <nav class="header navbar navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <router-link to="/">
        <img :src="require('@/assets/images/logo.png')" alt="Logo" height="80">
        </router-link>
      </a>
      <form class="d-flex">
        <input class="form-control me-2 rounded-0"
        type="search" placeholder="Search" aria-label="Search" v-model="searchInput">
        <button class="btn btn-outline-dark" type="submit"
        @click.prevent="searchVideos">Search</button>
      </form>
      <div v-if="getUserSession" class="d-flex align-items-center justify-content-center">
        <img :src="getUserSession.imageUrl" width="35"
        class="rounded float-start" :alt="getUserSession.firstName">
        <span class="ms-2 me-2">{{getUserSession.firstName}}</span>
      </div>
      <div v-else>
        <a href="#" class="link-primary">Create Account</a>
          <span class="ms-2 me-2">or</span>
        <a href="#" @click="login" class="link-primary">Sign-In</a>
      </div>
    </div>
    <div class="container-fluid mt-1 pb-3 border-bottom">
      <div class="w-25"></div>
      <div class="btn-group" role="group" aria-label="Menu">
        <router-link to="/"><button type="button" class="btn border-end">Home</button></router-link>
        <router-link to="/videos">
        <button type="button" class="btn border-end">Videos</button>
        </router-link>
        <button type="button" class="btn">Channels</button>
      </div>
      <div class="btn-group" role="group" aria-label="Menu">
        <button type="button" class="btn border-end">Subscriptions</button>
        <button type="button" class="btn border-end">History</button>
        <button type="button" class="btn">Uploads</button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      searchInput: "",
    };
  },
  computed: {
    ...mapGetters("auth", ["getUserSession"]),
  },
  methods: {
    ...mapActions("auth", ["login"]),
    ...mapActions("videos", ["search"]),
    searchVideos() {
      this.search(this.searchInput);
      this.searchInput = "";

      const path = "/search";
      if (this.$route.path !== path) this.$router.push(path);
    },
    signIn() {
      this.login();
    },
  },
};
</script>

<style lang="scss">
.header {
  .btn {
    border-radius: 0;

    &:hover {
      border-bottom: 1px solid black;
    }
  }
}
</style>
